#ifndef ELLIPSE_H
#define ELLIPSE_H

#include <iostream>
#include "Point.h"
#include "SimpleGraphics.h"
using std::cout;
using std::endl;

class Ellipse
{
public:
    Ellipse(int x, int y, int rx, int ry)
        : center(x, y), radiusX(rx), radiusY(ry) {}


    void draw() const
    {
        drawEllipse(center.getX(), center.getY(), radiusX, radiusY);
    }

private:
    Point center;
    int radiusX;
    int radiusY;
};

#endif