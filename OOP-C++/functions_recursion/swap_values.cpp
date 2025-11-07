#include <iostream>
using namespace std;

void swapValues(int&, int&);
int main () {
    int x = 10;
    int y = 20;
    cout << "Before swap: x = " << x << ", y = " << y << endl;
    swapValues(x, y);
    cout << "After swap: x = " << x << ", y = " << y << endl;
    return 0;
}

void swapValues(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}