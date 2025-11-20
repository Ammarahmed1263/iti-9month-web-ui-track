#ifndef GEO_SHAPE_H
#define GEO_SHAPE_H

#include <iostream>
using std::cout;
using std::endl;

class GeoShape
{
public:
    GeoShape() = default;
    GeoShape(double dim1, double dim2) : dimension1(dim1), dimension2(dim2) {}

    double getDimension1() const { return dimension1; }
    double getDimension2() const { return dimension2; }

    // virtual function
    virtual void setDimension1(double dim1) { dimension1 = dim1; }
    virtual void setDimension2(double dim2) { dimension2 = dim2; }
    
    // pure virtual functions
    virtual double calculateArea() const = 0;
    virtual double calculatePerimeter() const = 0;

    // virtual function
    virtual void print() const
    {
        cout << "Dimension 1: " << dimension1 << ", Dimension 2: " << dimension2 << endl;
    }

    bool operator==(GeoShape &other)
    {
        return this->calculateArea() == other.calculateArea();
    }

    virtual ~GeoShape() {}

protected:
    double dimension1{0.0f},
        dimension2{0.0f};
};

#endif