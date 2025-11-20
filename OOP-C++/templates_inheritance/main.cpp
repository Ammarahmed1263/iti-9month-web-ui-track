#include <iostream>
#include "complex_numbers.h"
#include "stack.h"
#include "inheritance.h"

using namespace std;

template <typename T>
T sum(T a, T b)
{
    return a + b;
}

int main()
{
    Stack<int> intStack;
    intStack.push(10).push(20).push(30);
    intStack.showStackItems();
    intStack.pop();
    intStack.showStackItems();

    cout << "-----------------" << endl;
    Stack<char> charStack;
    charStack.push('a').push('b').push('c');
    charStack.showStackItems();
    charStack.pop();
    charStack.showStackItems();

    cout << "-----------------" << endl;
    Stack<ComplexNumbers> complexStack;
    complexStack.push(ComplexNumbers(1, 2)).push(ComplexNumbers(3, 4));
    complexStack.showStackItems();
    complexStack.pop();
    complexStack.showStackItems();





    cout << "Sum of int: " << sum<int>(3, 5) << endl;
    cout << "Sum of float: " << sum<float>(3.2f, 5.1f) << endl;
    cout << "Sum of " << sum(ComplexNumbers(1, 2), ComplexNumbers(3, 4)) << endl;



    Derived d1(10, 20, 30);
    
    Derived d2(5);
    d2.setA(15);
    d2.setB(25);
    
    Derived d3;
    d3.setA(7);
    d3.setB(14);
    d3.setC(21);

    Base b(100, 200);
    cout << "Sum of Base b: " << b.sum() << endl;

    cout << "Sum of Derived d: " << d1.sum() << endl;
    cout << "Sum of Derived d2: " << d2.sum() << endl;
    cout << "Sum of Derived d3: " << d3.sum() << endl;
    return 0;
}