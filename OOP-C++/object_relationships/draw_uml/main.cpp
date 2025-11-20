#include "SimpleGraphics.h"
#include <iostream>
#include "Picture.h"
using namespace std;

int main()
{
    initScreen(); // clear ASCII screen

    Picture pic;

    int numCircles, numRectangles, numLines, numTriangles, numEllipses;

    cout << "=== Create Your Picture ===" << endl;
    cout << "Note: Circles, Rectangles, Triangles will be STATIC (aggregation)" << endl;
    cout << "      Lines and Ellipses will be DYNAMIC (composition)" << endl
         << endl;

    cout << "How many circles (static)? ";
    cin >> numCircles;

    cout << "How many rectangles (static)? ";
    cin >> numRectangles;

    cout << "How many triangles (static)? ";
    cin >> numTriangles;

    cout << "How many lines (dynamic)? ";
    cin >> numLines;

    cout << "How many ellipses (dynamic)? ";
    cin >> numEllipses;


    Circle *staticCircles = nullptr;
    if (numCircles > 0)
    {
        staticCircles = new Circle[numCircles];
        for (int i = 0; i < numCircles; i++)
        {
            int cx, cy, r;
            cout << "\nCircle " << (i + 1) << " (STATIC):" << endl;
            cout << "  Center X: ";
            cin >> cx;
            cout << "  Center Y: ";
            cin >> cy;
            cout << "  Radius: ";
            cin >> r;

            staticCircles[i] = Circle(cx, cy, r);
            pic.addStatic(&staticCircles[i]);
        }
    }

    Rectangle *staticRects = nullptr;
    if (numRectangles > 0)
    {
        staticRects = new Rectangle[numRectangles];
        for (int i = 0; i < numRectangles; i++)
        {
            int x1, y1, x2, y2;
            cout << "\nRectangle " << (i + 1) << " (STATIC):" << endl;
            cout << "  Top-left X: ";
            cin >> x1;
            cout << "  Top-left Y: ";
            cin >> y1;
            cout << "  Bottom-right X: ";
            cin >> x2;
            cout << "  Bottom-right Y: ";
            cin >> y2;

            staticRects[i] = Rectangle(x1, y1, x2, y2);
            pic.addStatic(&staticRects[i]);
        }
    }

    Triangle *staticTriangles = nullptr;
    if (numTriangles > 0)
    {
        staticTriangles = new Triangle[numTriangles];
        for (int i = 0; i < numTriangles; i++)
        {
            int x1, y1, x2, y2, x3, y3;
            cout << "\nTriangle " << (i + 1) << " (STATIC):" << endl;
            cout << "  Point 1 X: ";
            cin >> x1;
            cout << "  Point 1 Y: ";
            cin >> y1;
            cout << "  Point 2 X: ";
            cin >> x2;
            cout << "  Point 2 Y: ";
            cin >> y2;
            cout << "  Point 3 X: ";
            cin >> x3;
            cout << "  Point 3 Y: ";
            cin >> y3;

            staticTriangles[i] = Triangle(x1, y1, x2, y2, x3, y3);
            pic.addStatic(&staticTriangles[i]);
        }
    }

    for (int i = 0; i < numLines; i++)
    {
        int x1, y1, x2, y2;
        cout << "\nLine " << (i + 1) << " (DYNAMIC):" << endl;
        cout << "  Start X: ";
        cin >> x1;
        cout << "  Start Y: ";
        cin >> y1;
        cout << "  End X: ";
        cin >> x2;
        cout << "  End Y: ";
        cin >> y2;

        Line *line = new Line(x1, y1, x2, y2);
        pic.addDynamic(line);
    }

    for (int i = 0; i < numEllipses; i++)
    {
        int cx, cy, rx, ry;
        cout << "\nEllipse " << (i + 1) << " (DYNAMIC):" << endl;
        cout << "  Center X: ";
        cin >> cx;
        cout << "  Center Y: ";
        cin >> cy;
        cout << "  Radius X: ";
        cin >> rx;
        cout << "  Radius Y: ";
        cin >> ry;

        Ellipse *ellipse = new Ellipse(cx, cy, rx, ry);
        pic.addDynamic(ellipse);
    }

    pic.paint();

    renderScreen();

    cout << "\nCleaning up static shapes (Circles, Rectangles, Triangles)...\n";
    delete[] staticCircles;
    delete[] staticRects;
    delete[] staticTriangles;

    return 0;
}