#include <iostream>

using namespace std;

void swap(int &, int &);
int main()
{
    int x, y;
    cout << "Enter two integers: ";
    cin >> x >> y;
    swap(x, y);
    cout << "x: " << x << ", y: " << y << endl;
    return 0;
}

void swap(int &a, int &b)
{
    int temp;
    temp = a;
    a = b;
    b = temp;
}