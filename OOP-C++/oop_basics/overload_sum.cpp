#include <iostream>

using namespace std;

int sum(int, int);
double sum(double, double);
string sum(string, string);

int main()
{
    int intResult = sum(5, 10);
    cout << "Integer Sum: " << intResult << endl;

    double doubleResult = sum(5.5, 10.2);
    cout << "Double Sum: " << doubleResult << endl;

    string stringResult = sum("Hello, ", "World!");
    cout << "String Sum: " << stringResult << endl;
    return 0;
}

int sum(int a, int b)
{
    cout << "Using int sum function" << endl;
    return a + b;
}

double sum(double a, double b)
{
    cout << "Using double sum function" << endl;
    return a + b;
}

string sum(string a, string b)
{
    cout << "Using string sum function" << endl;
    return a + b;
}