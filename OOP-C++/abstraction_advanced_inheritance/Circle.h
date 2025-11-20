#ifndef CIRCLE_H
#define CIRCLE_H

#include <iostream>
#include "GeoShape.h"
using std::cout;
using std::endl;

class Circle : public GeoShape
// class Circle : protected GeoShape
{
public:
    Circle(double radius) : GeoShape(radius, radius) {}

    double getRadius() const { return dimension1; }
    void setRadius(double radius) { dimension1 = dimension2 = radius; }

    void setDimension1(double d) override { dimension1 = dimension2 = d; }
    void setDimension2(double d) override { dimension1 = dimension2 = d; }

    double calculateArea() const override
    {
        return 3.14159 * dimension1 * dimension1;
    }

    double calculatePerimeter() const override
    {
        return 2 * 3.14159 * dimension1;
    }

    // void print() const override
    // {
    //     cout << "Circle:" << endl;
    //     cout << "  Radius: " << dimension1 << endl;
    //     cout << "  Area: " << calculateArea() << ", Perimeter: " << calculatePerimeter() << endl;
    // }
};

#endif