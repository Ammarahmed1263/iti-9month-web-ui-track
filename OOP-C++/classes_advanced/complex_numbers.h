#ifndef COMPLEX_H
#define COMPLEX_H

#include <iostream>
#include <cmath>

using std::cout;
using std::endl;
using std::istream;
using std::ostream;

class ComplexNumbers
{
public:
    // ComplexNumbers() = default;
    ComplexNumbers() : real(0.0f), imagine(0.0f)
    {
        cout << "Default constructor called." << endl;
        count++;
    }

    ComplexNumbers(float real, float imagine) : real{real}, imagine{imagine}
    {
        cout << "Constructor with two parameters called." << endl;
        count++;
    }

    ComplexNumbers(float imagine) : imagine{imagine}
    {
        cout << "Constructor with one parameter called." << endl;
        count++;
    }

    ~ComplexNumbers()
    {
        cout << "Destructor called." << endl;
        count--;
    }

    ComplexNumbers operator+(const ComplexNumbers &other)
    {
        return ComplexNumbers(real + other.real, imagine + other.imagine);
    }

    ComplexNumbers operator-(const ComplexNumbers &other)
    {
        return ComplexNumbers(real - other.real, imagine - other.imagine);
    }

    ComplexNumbers operator*(const ComplexNumbers &other)
    { // (a + bi)(c + di) = (ac - bd) + (ad + bc)i
        float realPart = (real * other.real) - (imagine * other.imagine);
        float imaginePart = (real * other.imagine) + (imagine * other.real);
        return ComplexNumbers(realPart, imaginePart);
    }

    ComplexNumbers operator/(const ComplexNumbers &other)
    { // (a + bi) / (c + di) = [(ac + bd) + (bc - ad)i] / (c^2 + d^2)
        float denominator = (other.real * other.real) + (other.imagine * other.imagine);

        if (denominator == 0)
        {
            cout << "Error: Division by zero!" << endl;
            return ComplexNumbers();
        }

        float realPart = ((real * other.real) + (imagine * other.imagine)) / denominator;
        float imaginePart = ((imagine * other.real) - (real * other.imagine)) / denominator;
        return ComplexNumbers(realPart, imaginePart);
    }

    ComplexNumbers &operator++() // prefix
    {
        ++real;
        return *this;
    }

    ComplexNumbers operator++(int) // postfix
    {
        ComplexNumbers temp = *this;
        real++;
        return temp;
    }

    ComplexNumbers &operator--() // prefix
    {
        --real;
        return *this;
    }

    ComplexNumbers operator--(int) // postfix
    {
        ComplexNumbers temp = *this;
        real--;
        return temp;
    }

    string operator<(const ComplexNumbers &other)
    {
        return ((real * real) + (imagine * imagine) < (other.real * other.real) + (other.imagine * other.imagine))
                   ? "true"
                   : "false";
    }

    string operator>(const ComplexNumbers &other)
    {
        return (other < *this) ? "true" : "false"; // reusing my custom < operator
    }

    string operator==(const ComplexNumbers &other)
    {
        return ((real == other.real) && (imagine == other.imagine))
                   ? "true"
                   : "false";
    }

    // type casting operator to float
    operator float() const
    {
        return sqrt((real * real) + (imagine * imagine));
    }

    static void showCounter()
    {
        cout << ">>>>>>>>>>>>>>>>> complex numbers created: " << count << endl;
    }

private:
    float real{0.0f}, imagine{0.0f};
    static int count;

    friend ostream &operator<<(ostream &cout, const ComplexNumbers &c);
    friend istream &operator>>(istream &cin, ComplexNumbers &c);
};

istream &operator>>(istream &cin, ComplexNumbers &c)
{
    cout << "Enter real and imaginary parts: ";
    cin >> c.real >> c.imagine;
    return cin;
}

ostream &operator<<(ostream &cout, const ComplexNumbers &c)
{
    cout << "Complex Number: ";

    if (c.real == 0 && c.imagine == 0)
    {
        cout << "0 + 0i" << endl;
        return cout;
    }

    if (c.real != 0)
    {
        cout << c.real;
    }

    if (c.imagine != 0)
    {
        if (c.real != 0)
        {
            cout << " ";
        }

        if (c.real != 0 && c.imagine > 0)
        {
            cout << "+";
        }

        if (c.imagine == 1)
        {
            cout << "i";
        }
        else if (c.imagine == -1)
        {
            cout << "-i";
        }
        else
        {
            cout << c.imagine << "i";
        }
    }
    cout << endl;

    return cout;
}

#endif