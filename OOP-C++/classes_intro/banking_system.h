#ifndef BANKING_H
#define BANKING_H

#include <iostream>
using std::cout;
using std::endl;
using std::string;

class BankingSystem
{
private:
    string name;
    long long int accountNumber;
    static long long int accountIncrementer;
    double balance;
    static int count;

public:
    // is this correct?
    BankingSystem()
    {
        name = "GUEST_USER";
        accountNumber = accountIncrementer++;
        balance = 0.0;
        count++;
    };

    BankingSystem(string name, double balance)
    {
        this->name = name;
        this->balance = balance;
        count++;
        accountNumber = accountIncrementer++;
    }

    BankingSystem &deposit(double amount)
    {
        balance += amount;
        return *this;
    }

    BankingSystem &withdraw(double amount)
    {
        if (amount > balance)
        {
            cout << "Insufficient Balance" << endl;
            return *this;
        }
        balance -= amount;
        return *this;
    }

    void showAccount()
    {
        cout << "------------------------" << endl;
        cout << "Account Number: " << accountNumber << endl;
        cout << "Account Holder: " << name << endl;
        cout << "Balance: " << balance << endl;
        cout << "------------------------" << endl;
    }

    double getBalance()
    {
        return balance;
    }

    static void showCounter()
    {
        cout << ">>>>>>>>>>>>>>>>>>>>>>>> Accounts created: " << count << endl;
    }

    ~BankingSystem()
    {
        count--;
    }
};

#endif