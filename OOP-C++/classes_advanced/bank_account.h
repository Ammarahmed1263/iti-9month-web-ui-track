#ifndef BANKING_H
#define BANKING_H

#include <iostream>
using std::cout;
using std::endl;
using std::istream;
using std::move;
using std::ostream;
using std::string;

class BankAccount
{
public:
    BankAccount()
    {
        name = "GUEST_USER";
        accountNumber = accountIncrement++;
        balance = 0.0;
        count++;
    };

    BankAccount(string name, double balance) : balance(balance), name(name)
    {
        count++;
        accountNumber = accountIncrement++;
    }

    BankAccount(BankAccount &&other) : name(move(other.name)),
                                       accountNumber(other.accountNumber),
                                       balance(other.balance)
    {
        other.accountNumber = 0;
        other.balance = 0.0;
        count++;
    }

    ~BankAccount()
    {
        count--;
    }

    BankAccount &operator=(BankAccount &&other)
    {
        if (this != &other)
        {
            name = move(other.name);
            accountNumber = other.accountNumber;
            balance = other.balance;

            other.accountNumber = 0;
            other.balance = 0.0;
        }

        return *this;
    }

    BankAccount &deposit(double amount)
    {

        balance += amount;
        return *this;
    }

    BankAccount &withdraw(double amount)
    {
        if (amount > balance)
        {
            cout << "Insufficient Balance" << endl;
            return *this;
        }
        balance -= amount;
        return *this;
    }

    double getBalance()
    {
        return balance;
    }

    static void showCounter()
    {
        cout << ">>>>>>>>>>>>>>>>>>>>>>>> Accounts created: " << count << " <<<<<<<<<<<<<<<<<<<<<<<<<<" << endl;
    }

private:
    string name;
    long long int accountNumber;
    static long long int accountIncrement;
    double balance;
    static int count;

    BankAccount(const BankAccount &) = delete;
    BankAccount &operator=(const BankAccount &) = delete;

    friend ostream &operator<<(ostream &out, const BankAccount &account);
    friend istream &operator>>(istream &in, BankAccount &account);
};

ostream &operator<<(ostream &cout, const BankAccount &account)
{
    cout << "Account Number: " << account.accountNumber << endl;
    cout << "Account Holder: " << account.name << endl;
    cout << "Balance: " << account.balance << endl;
    cout << "------------------------" << endl;

    return cout;
}

istream &operator>>(istream &cin, BankAccount &account)
{
    cout << "Enter Account Holder Name: ";
    cin >> account.name;
    cout << "Enter Initial Balance: ";
    cin >> account.balance;
    return cin;
}

#endif