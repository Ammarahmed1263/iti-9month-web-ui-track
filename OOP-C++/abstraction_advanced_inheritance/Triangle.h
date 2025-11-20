#ifndef TRIANGLE_H
#define TRIANGLE_H

#include <iostream>
#include <cmath>
#include "GeoShape.h"
using std::cout;
using std::endl;

class Triangle : public GeoShape
{
public:
    Triangle(double b, double h) : GeoShape(b, h) {}

    double calculateArea() const override
    {
        return 0.5 * dimension1 * dimension2;
    }

    double calculatePerimeter() const override
    {
        // Right Triangle for calculation
        double hypotenuse = sqrt(pow(dimension1, 2) + pow(dimension2, 2));
        return dimension1 + dimension2 + hypotenuse;
    }

    void print() const override
    {
        cout << "Triangle:" << endl;
        cout << "  Base: " << dimension1 << ", Height: " << dimension2 << endl;
        cout << "  Area: " << calculateArea() << endl;
        cout << "  Perimeter: " << calculatePerimeter() << endl;
    }
};

#endif