#ifndef SQUARE_H
#define SQUARE_H

#include <iostream>
#include "Rectangle.h"
using std::cout;
using std::endl;

class Square : public Rectangle
// class Square : protected Rectangle
{
public:
    Square(double side) : Rectangle(side, side) {}

    double getSide() const { return dimension1; }
    void setSide(double side) { dimension1 = dimension2 = side; }

    void setDimension1(double d) override { dimension1 = dimension2 = d; }
    void setDimension2(double d) override { dimension1 = dimension2 = d; }

    double calculateArea() const override
    {
        return dimension1 * dimension1;
    }

    double calculatePerimeter() const override
    {
        return 4 * dimension1;
    }

    void print() const override
    {
        cout << "Square:" << endl;
        cout << "  Side: " << dimension1 << endl;
        cout << "  Area: " << calculateArea() << ", Perimeter: " << calculatePerimeter() << endl;
    }
};

#endif