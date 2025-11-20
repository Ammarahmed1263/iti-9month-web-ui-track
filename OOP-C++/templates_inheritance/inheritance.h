#ifndef INHERITANCE_H
#define INHERITANCE_H

#include <iostream>

class Base {
public:
    Base() = default;
    Base(int x) : a{x}, b{0} {}
    Base(int x, int y) : a{x}, b{y} {}
    
    void setA(int x) { a = x; }
    void setB(int y) { b = y; }

    int getA() const { return a; }
    int getB() const { return b; }

    int sum() const { return a + b; }

private:
// protected:
    int a{};
    int b{};
};

class Derived : public Base {
public:
    Derived() : Base{}, c{0} {}
    Derived(int x) : Base{}, c{x} {}
    Derived(int x, int y, int z) : Base{x, y}, c{z} {}

    int getC() const { return c; }
    void setC(int z) { c = z; }

    int sum() const { return Base::sum() + c; }
    // int sum() const { return getA() + getB() + c; }
    // int sum() const { return a + b + c; }

private:
    int c;
};

#endif