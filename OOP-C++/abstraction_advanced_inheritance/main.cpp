#include <iostream>
#include <algorithm>
#include "GeoShape.h"
#include "Square.h"
#include "Cube.h"
#include "Rectangle.h"
#include "Circle.h"
#include "Triangle.h"
#include "Rhombus.h"

using namespace std;

template <typename T1, typename T2>
// bool compareShapes(const T1 &shape1, const T2 &shape2);
bool compareShapes(const T1 *shape1, const T2 *shape2);

bool sortAsc(GeoShape *a, GeoShape *b);
bool sortDsc(GeoShape *a, GeoShape *b);

int main()
{
    int count = 6;
    GeoShape **shapes = new GeoShape *[count];

    shapes[0] = new Square(4.0);
    shapes[1] = new Rectangle(3.0, 5.0);
    shapes[2] = new Circle(2.0);
    shapes[3] = new Triangle(3.0, 4.0);
    shapes[4] = new Rhombus(4.0, 6.0);
    shapes[5] = new Cube(3.0);

    cout << "--- 1. trying virtual print function ---" << endl;
    for (int i = 0; i < count; ++i)
    {
        shapes[i]->print();
        cout << "----------------------" << endl;
    }

    cout << "\n--- 2. Sorting by Area (Ascending) ---" << endl;
    sort(shapes, shapes + count, sortAsc);

    for (int i = 0; i < count; ++i)
    {
        cout << "Area: " << shapes[i]->calculateArea() << endl;
    }

    cout << "\n--- 2. Sorting by Area (Descending) ---" << endl;
    sort(shapes, shapes + count, sortDsc);

    for (int i = 0; i < count; ++i)
    {
        cout << "Area: " << shapes[i]->calculateArea() << endl;
    }

    cout << "\n--- 3. Area Comparison ---" << endl;
    Square s1(5.0);
    Rectangle r1(5.0, 5.0);
    Cube c1(5.0);

    if (compareShapes(&s1, &r1))
    {
        cout << "Square(5) and Rectangle(5,5) have equal area." << endl;
    }

    if (!compareShapes(&s1, &c1))
    {
        cout << "Square(5) Area (" << s1.calculateArea() << ") is NOT equal to Cube(5) Surface Area (" << c1.calculateArea() << ")." << endl;
    }
    else
    {
        cout << "Square(5) Area equals Cube(5) Surface Area." << endl;
    }

    for (int i = 0; i < count; ++i)
    {
        delete shapes[i];
    }

    delete[] shapes;

    return 0;
}

// template <typename T1, typename T2>
// bool compareShapes(const T1 &shape1, const T2 &shape2)
// {
//     return shape1.calculateArea() == shape2.calculateArea();
// }

template <typename T1, typename T2>
bool compareShapes(const T1 *shape1, const T2 *shape2)
{
    return shape1->calculateArea() == shape2->calculateArea();
}

bool sortAsc(GeoShape *a, GeoShape *b)
{
    return a->calculateArea() < b->calculateArea();
}

bool sortDsc(GeoShape *a, GeoShape *b)
{
    return a->calculateArea() > b->calculateArea();
}