#ifndef RECTANGLE_H
#define RECTANGLE_H

#include <iostream>
#include "Point.h"
#include "SimpleGraphics.h"
using std::cout;
using std::endl;

class Rectangle
{
public:
    Rectangle() : ul(0, 0), lr(0, 0) {}
    Rectangle(int x1, int y1, int x2, int y2)
        : ul(x1, y1), lr(x2, y2) {}


    Rectangle(const Rectangle &other) 
        : ul(other.ul), 
          lr(other.lr) {}


    void draw() const
    {
        drawRect(ul.getX(), ul.getY(), lr.getX(), lr.getY());
    }

private:
    Point ul; // Upper-Left
    Point lr; // Lower-Right
};

#endif