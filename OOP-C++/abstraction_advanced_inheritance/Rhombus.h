#ifndef RHOMBUS_H
#define RHOMBUS_H

#include <iostream>
#include <cmath>
#include "GeoShape.h"
using std::cout;
using std::endl;

class Rhombus : public GeoShape
{
public:
    Rhombus(double d1, double d2) : GeoShape(d1, d2) {}

    double calculateArea() const override
    {
        return 0.5 * dimension1 * dimension2;
    }

    double calculatePerimeter() const override
    {
        double side = sqrt(pow(dimension1 / 2, 2) + pow(dimension2 / 2, 2));
        return 4 * side;
    }

    void print() const override
    {
        cout << "Rhombus:" << endl;
        cout << "  Diagonal 1: " << dimension1 << ", Diagonal 2: " << dimension2 << endl;
        cout << "  Area: " << calculateArea() << endl;
        cout << "  Perimeter: " << calculatePerimeter() << endl;
    }
};

#endif