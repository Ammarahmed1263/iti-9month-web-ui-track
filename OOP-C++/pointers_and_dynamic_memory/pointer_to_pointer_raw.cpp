#include <iostream>

using namespace std;

int main () {
    int x = 5;
    int *ptr = &x;
    int **ptr_to_ptr = &ptr;

    cout << "Value of x: " << x << endl;
    cout << "value stored in ptr: " << *ptr << endl;
    cout << "value stored in ptr_to_ptr: " << **ptr_to_ptr << endl << endl;

    cout << "address of x (&x): " << &x << endl;
    cout << "address stored in ptr: " << ptr << endl << endl;

    cout << "address of ptr (&ptr): " << &ptr << endl;
    cout << "address stored in ptr_to_ptr: " << ptr_to_ptr << endl;

    return 0;
}
