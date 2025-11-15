#include <iostream>
// #include "stack.h"
#include "complex_numbers.h"
// #include "banking_system.h"

// int Stack::count = 0;
// int BankingSystem::count = 0;
// long long int BankingSystem::accountIncrementer = 303101000000;
int ComplexNumbers::count = 0;

using namespace std;

int main () {
    // Stack s1;
    // Stack s2(10);

    // s2.push(5).push(10).push(12).pop().push(15).push(20);
    // s2.showStackItems();


    // Stack::showStacksCount();

    // BankingSystem b1("Ahmed", 5000);
    // BankingSystem b2("mohamed", 8000);
    // BankingSystem b3;

    
    // b1.deposit(2000).withdraw(1000);
    // b2.deposit(3000).withdraw(500);
    
    // double balance = b1.getBalance();
    // cout << "Balance of b1: " << balance << endl;
    // cout << "Balance of b3: " << b3.getBalance() << endl;

    // b1.showAccount();
    // b2.showAccount();
    // BankingSystem::showCounter();
    // b3.showAccount();

    ComplexNumbers c1(3.5, 2.5);
    ComplexNumbers c2(4.0);
    ComplexNumbers c3 = ComplexNumbers::createDefault();
    ComplexNumbers c4(-3.5, -2.5);
    ComplexNumbers c5(-3.5, -2.5);

    c1.printComplex();
    c2.printComplex();
    c3.printComplex();
    c4.printComplex();
    c5.printComplex();

    ComplexNumbers::showCounter();
    return 0;
}