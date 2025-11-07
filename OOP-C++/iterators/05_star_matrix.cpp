#include <iostream>
using namespace std;
int main()
{
    int size = 0;
    cout << "Enter Matrix Dimensions: ";
    cin >> size;
    for (int i = 1; i <= size; i++)
    {
        for (int j = 1; j <= size; j++)
        {
            if (i == j) {
                cout << " * ";
            } else {
                cout << " - ";
            }
        }
        cout << endl;
    }
    return 0;
}