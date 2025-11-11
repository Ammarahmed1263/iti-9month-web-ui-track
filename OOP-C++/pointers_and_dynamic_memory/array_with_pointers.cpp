#include <iostream>

using namespace std;

int main()
{
    int size;
    cout << "Enter size of array: ";
    cin >> size;

    int *arr = new int[size];

    for (int i = 0; i < size; i++)
    {
        cout << "Enter element " << i + 1 << ": ";
        cin >> *(arr + i);
    }

    cout << "\nYou entered: [";
    for (int i = 0; i < size; i++)
    {
        cout << *(arr + i) << (i < size - 1 ? ", " : "");
    }
    cout << "]" << endl;

    delete[] arr;

    return 0;
}