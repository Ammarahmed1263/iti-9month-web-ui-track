#include <iostream>
#include "stack.h"
#include "bank_account.h"
#include "complex_numbers.h"

int Stack::count = 0;
int BankAccount::count = 0;
long long int BankAccount::accountIncrement = 303101000000;
int ComplexNumbers::count = 0;

using namespace std;

int main()
{
    // cout << "--- Stack Tests ---" << endl;

    // Stack s1{};
    // Stack s2{10};
    // s2.push(5).push(10).push(12).push(40);

    // Stack::showStacksCount();

    // cout << "\n--- Testing Copy Constructor ---" << endl;
    // cout << "s2 (before copy): "; s2.showStackItems();
    // Stack s3 = s2;
    // cout << "s3 (after copy): "; s3.showStackItems();
    // Stack::showStacksCount();
    
    // cout << "\n--- Testing Copy assignment ---" << endl;
    // cout << "s1 (before copy): "; s1.showStackItems();
    // s1 = s2;
    // cout << "s2 (after copy): "; s2.showStackItems();
    // Stack::showStacksCount();
    
    // cout << "\n--- Testing Move Constructor ---" << endl;
    // cout << "s3 (before move): "; s3.showStackItems();
    // Stack s4 = move(s3);
    // cout << "s3 (after move): "; s3.showStackItems();
    // cout << "s4 (from move): "; s4.showStackItems();
    // Stack::showStacksCount();
    
    // cout << "\n--- Testing Move Assignment ---" << endl;
    // cout << "s1 (before move): "; s1.showStackItems();
    // s1 = move(s4);
    // cout << "s4 (after move): "; s4.showStackItems();
    // cout << "s1 (from move): "; s1.showStackItems();
    // Stack::showStacksCount();

    // s2.push(5).push(10).push(12).pop().push(15).push(20);
    // s2.showStackItems();

    // try
    // {
    //     cout << "Third element: " << s2[2] << endl;
    //     s2[2] = 99;
    //     cout << "Third element (after change): " << s2[2] << endl;
    //     s2[99]; // exception here
    // }
    // catch (const out_of_range &e)
    // {
    //     cout << "Error: " << e.what() << endl;
    // }


    // cout << "\n--- BankAccount Tests ---" << endl;

    // BankAccount b1{"Ahmed", 5000};
    // BankAccount b2{"mohamed", 8000};
    // BankAccount b3{};

    // b1.deposit(2000).withdraw(1000);
    // b2.deposit(3000).withdraw(500);

    // double balance = b1.getBalance();
    // cout << "Balance of b1: " << balance << endl;

    // cout << b1;
    // cout << b2;
    // cout << b3;
    // BankAccount::showCounter();

    // // Testing copy error
    // // BankAccount b4 = b1;
    // // b3 = b1;

    // cout << "b1 (before move): " << b1;
    // BankAccount b4 = move(b1);

    // cout << "State of b1 (after move): " << b1;
    // cout << "State of b4 (has b1's data): " << b4;
    // BankAccount::showCounter();

    // cout << "State of b2 (before move): " << b2;
    // BankAccount b5{};
    // cout << "State of b5 (before move): " << b5;

    // b5 = move(b2);

    // cout << "State of b2 (after move): " << b2;
    // cout << "State of b5 (has b2's data): " << b5;
    // BankAccount::showCounter();

    // cin >> b3;
    // cout << "After input, b3 details are: " << endl;
    // cout << b3;

    // BankAccount::showCounter();


    cout << "\n--- ComplexNumbers Tests ---" << endl;

    ComplexNumbers c1{3.0f, 4.0f};  // (3 + 4i)
    ComplexNumbers c2{5.0f, -2.0f}; // (5 - 2i)
    ComplexNumbers c3{};            // (0 + 0i)
    ComplexNumbers c4{3.0f, 4.0f};  // Same as c1

    cout << "c1: " << c1;
    cout << "c2: " << c2;
    cout << "c3: " << c3;
    cout << "c4: " << c4;
    ComplexNumbers::showCounter(); // 4

    // Test Arithmetic Operators
    cout << "\n--- Testing Arithmetic Operators ---" << endl;
    cout << "c1 + c2: " << (c1 + c2); // (8 + 2i)
    cout << "c1 - c2: " << (c1 - c2); // (-2 + 6i)
    cout << "c1 * c2: " << (c1 * c2); // (23 + 14i)
    cout << "c1 / c2: " << (c1 / c2); // (0.24 + 1.17i)
    cout << "c1 / c3: " << (c1 / c3); // Division by zero

    // Test Relational Operators
    cout << "\n--- Testing Relational Operators ---" << endl;
    cout << "c1 < c2: " << (c1 < c2) << endl;
    cout << "c1 > c2: " << (c1 > c2) << endl;
    cout << "c1 == c4: " << (c1 == c4) << endl;
    cout << "c1 == c2: " << (c1 == c2) << endl;

    // Test Increment/Decrement
    cout << "\n--- Testing Increment/Decrement ---" << endl;
    cout << "c1: " << c1;
    cout << "chaining because it returns reference ++(++c1): " << ++(++c1);
    cout << "c1: " << c1;
    cout << "c1++: " << (c1++);
    cout << "c1: " << c1;

    // Test Type Casting
    cout << "\n--- Testing Type Casting ---" << endl;
    float mag = c1;
    cout << "Magnitude of c1 (now 5 + 4i): " << mag << endl;

    // Test Stream Operators
    cout << "\n--- Testing Stream Operators ---" << endl;
    cout << "Enter a new complex number for c3:" << endl;
    cin >> c3;
    cout << "You entered c3: " << c3;

    return 0;
}