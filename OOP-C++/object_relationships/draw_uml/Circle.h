#ifndef CIRCLE_H
#define CIRCLE_H

#include <iostream>
#include "Point.h"
#include "SimpleGraphics.h"
using std::cout;
using std::endl;

class Circle
{
public:
    Circle() : center(0, 0), radius(0) {}
    Circle(int x, int y, int r) : center(x, y), radius(r) {}


    void draw() const
    {
        drawCircle(center.getX(), center.getY(), radius);
    }

private:
    Point center;
    int radius;
};

#endif