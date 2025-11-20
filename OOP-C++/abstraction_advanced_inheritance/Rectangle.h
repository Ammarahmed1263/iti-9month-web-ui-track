#ifndef RECTANGLE_H
#define RECTANGLE_H

#include <iostream>
#include "GeoShape.h"
using std::cout;
using std::endl;

class Rectangle : public GeoShape
{
public:
    Rectangle(double w, double h) : GeoShape(w, h) {}

    double calculateArea() const override
    {
        return dimension1 * dimension2;
    }

    double calculatePerimeter() const override
    {
        return 2 * (dimension1 + dimension2);
    }

    void print() const override
    {
        cout << "Rectangle:" << endl;
        cout << "  Width: " << dimension1 << ", Height: " << dimension2 << endl;
        cout << "  Area: " << calculateArea() << ", Perimeter: " << calculatePerimeter() << endl;
    }
};

#endif