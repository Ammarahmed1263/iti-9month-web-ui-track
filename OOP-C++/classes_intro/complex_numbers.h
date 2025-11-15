#ifndef COMPLEX_H
#define COMPLEX_H

#include <iostream>
using std::cout;
using std::endl;

class ComplexNumbers
{
private:
    float real = 0.0f, imagine = 0.0f;
    static int count;
    ComplexNumbers() = default;

public:
    static ComplexNumbers createDefault()
    {
        cout << "Default constructor called." << endl;
        count++;
        return ComplexNumbers();
    }

    ComplexNumbers(float real, float imagine)
    {
        cout << "Constructor with two parameters called." << endl;
        this->real = real;
        this->imagine = imagine;
        count++;
    }

    ComplexNumbers(float imagine)
    {
        cout << "Constructor with one parameter called." << endl;
        this->imagine = imagine;
        count++;
    }

    static void showCounter()
    {
        cout << ">>>>>>>>>>>>>>>>> complex numbers created: " << count << endl;
    }

    void printComplex()
    {
        cout << "Complex Number: ";

        if (real == 0 && imagine == 0)
        {
            cout << "0 + 0i" << endl;
            return;
        }

        if (real != 0)
        {
            cout << real;
        }

        if (imagine != 0)
        {
            if (real != 0) {
                cout << " ";
            }

            if (real != 0 && imagine > 0)
            {
                cout << "+";
            }

            if (imagine == 1)
            {
                cout << "i";
            }
            else if (imagine == -1)
            {
                cout << "-i";
            }
            else
            {
                cout << imagine << "i";
            }
        }
        cout << endl;
    }

    ~ComplexNumbers()
    {
        cout << "Destructor called." << endl;
        count--;
    }
};

#endif