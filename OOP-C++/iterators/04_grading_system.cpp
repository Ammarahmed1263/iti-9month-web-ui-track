#include <iostream>
using namespace std;
int main()
{
    int grade;
    cout << "Enter your grade: ";
    cin >> grade;

    if (grade < 0 || grade > 100)
    {
        cout << "Invalid grade" << endl;
        return 1;
    };

    if (grade >= 90)
    {
        cout << "Your Score is: A" << endl;
    }
    else if (grade >= 80)
    {
        cout << "Your Score is: B" << endl;
    }
    else if (grade >= 70)
    {
        cout << "Your Score is: C" << endl;
    }
    else if (grade >= 60)
    {
        cout << "Your Score is: D" << endl;
    }
    else
    {
        cout << "Your Score is: F" << endl;
    }

    return 0;
}