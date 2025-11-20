#ifndef PICTURE_H
#define PICTURE_H

#include <iostream>
#include <vector>
#include "Rectangle.h"
#include "Circle.h"
#include "Triangle.h"
#include "Ellipse.h"
#include "Line.h"
using std::cout;
using std::endl;
using std::vector;

class Picture {
    vector<Rectangle*> aggRects;
    vector<Circle*> aggCircles;
    vector<Triangle*> aggTriangles;

    vector<Ellipse*> compEllipses;
    vector<Line*> compLines;

public:
    Picture() {}

    void addStatic(Rectangle* s) {
        aggRects.push_back(s);
    }
    
    void addStatic(Circle* s) {
        aggCircles.push_back(s);
    }
    
    void addStatic(Triangle* s) {
        aggTriangles.push_back(s);
    }

    void addDynamic(Ellipse* s) {
        compEllipses.push_back(s);
    }

    void addDynamic(Line* s) {
        compLines.push_back(s);
    }

    void paint() {
        for (auto s : aggRects)
            s->draw();
        for (auto s : aggCircles)
            s->draw();
        for (auto s : aggTriangles)
            s->draw();

        for (auto s : compEllipses)
            s->draw();
        for (auto s : compLines)
            s->draw();
    }

    ~Picture() {
        cout << "\nDestroying Picture: Deleting 'composed' shapes (Lines and Ellipses)...\n";

        for (auto s : compEllipses)
            delete s;

        for (auto s : compLines)
            delete s;   
    }
};

#endif