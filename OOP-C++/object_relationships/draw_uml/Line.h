#ifndef LINE_H
#define LINE_H

#include <iostream>
#include "Point.h"
#include "SimpleGraphics.h"

class Line {
    Point start;
    Point end;

public:
    Line(int x1, int y1, int x2, int y2)
        : start(x1, y1), end(x2, y2) {}

    void draw() {
        drawLine(start.getX(), start.getY(), end.getX(), end.getY());
    }
};

#endif