#include <iostream>
#include <memory>

using namespace std;

int main () {
    unique_ptr<int> main_ptr = make_unique<int>(5);

    unique_ptr<int> *ptr_to_smart_ptr = &main_ptr;

    cout << "Value stored in main_ptr: " << *main_ptr << endl;
    cout << "Value via ptr_to_smart_ptr: " << **ptr_to_smart_ptr << endl << endl;

    cout << "Address stored in main_ptr (.get()): " << main_ptr.get() << endl << endl;


    cout << "Address of main_ptr (&main_ptr): " << &main_ptr << endl;
    cout << "Address stored in ptr_to_smart_ptr: " << ptr_to_smart_ptr << endl;

    return 0;
}