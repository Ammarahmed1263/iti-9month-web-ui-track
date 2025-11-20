#ifndef CUBE_H
#define CUBE_H

#include <iostream>
#include "GeoShape.h"
#include "Square.h"
using std::cout;
using std::endl;

class Cube : public Square
{
public:
    Cube(double s) : Square(s) {}

    double calculateArea() const override
    {
        return 6 * (dimension1 * dimension1);
    }

    double calculateVolume() const
    {
        return dimension1 * dimension1 * dimension1;
    }

    double calculatePerimeter() const override
    {
        return 12 * dimension1;
    }

    void print() const override
    {
        cout << "Cube:" << endl;
        cout << "  Side: " << dimension1 << endl;
        cout << "  Surface Area: " << calculateArea() << endl;
        cout << "  Volume: " << calculateVolume() << endl;
        cout << "  Total Edge Length (Perimeter): " << calculatePerimeter() << endl;
    }
};

#endif