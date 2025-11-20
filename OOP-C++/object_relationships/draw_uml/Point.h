#ifndef POINT_H
#define POINT_H

#include <iostream>
using std::cout;
using std::endl;

class Point {
public:
    Point(int xCoord, int yCoord) : x(xCoord), y(yCoord) {}

    int getX() const { return x; }
    int getY() const { return y; }

private:
    int x{};
    int y{};
};

#endif