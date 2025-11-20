#ifndef TRIANGLE_H
#define TRIANGLE_H

#include <iostream>
#include "Point.h"
#include "SimpleGraphics.h"
using std::cout;
using std::endl;

class Triangle {
    Point p1, p2, p3;

public:
    Triangle() : p1(0,0), p2(0,0), p3(0,0) {}
    Triangle(int x1, int y1,
             int x2, int y2,
             int x3, int y3)
        : p1(x1,y1), p2(x2,y2), p3(x3,y3) {}

    void draw() {
        drawTriangle(
            p1.getX(), p1.getY(),
            p2.getX(), p2.getY(),
            p3.getX(), p3.getY()
        );
    }
};

#endif