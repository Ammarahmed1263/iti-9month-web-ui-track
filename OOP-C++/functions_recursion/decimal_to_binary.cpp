#include <iostream>
#include <string>
using namespace std;

string decimalToBinaryString(int);
int decimalToBinary(int);

int main()
{
    int x;
    cout << "enter decimal number: ";
    cin >> x;
    cout << "decimal to binary: " << decimalToBinary(x) << endl;
    cout << "conversion using string: " << decimalToBinaryString(x) << endl;

    return 0;
}

string decimalToBinaryString(int x) {
    if (x == 1 || x == 0) return to_string(x);
    
    return decimalToBinaryString(x / 2) + to_string(x % 2);
}

int decimalToBinary(int x) {
    if (x == 1 || x == 0) return x;
    
    return (x % 2) + 10 * decimalToBinary(x / 2);
}