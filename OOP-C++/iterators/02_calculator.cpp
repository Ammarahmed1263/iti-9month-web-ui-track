#include <iostream>
using namespace std;

int main()
{
    char op;
    while (true)
    {
        int a, b;
        cout << "please enter operation letter from menu" << endl;
        cout << "a. addition" << endl;
        cout << "b. subtraction" << endl;
        cout << "c. multiplication" << endl;
        cout << "d. division" << endl;
        cout << "e. exit" << endl;

        cout << "Enter operation letter: ";
        cin >> op;

        if (op == 'e' || op == 'E')
        {
            break;
        }
        else
        {
            if (op != 'a' && op != 'b' && op != 'c' && op != 'd' && op != 'e' && op != 'E')
            {
                cout << ">>>>>>>> Invalid operation letter" << endl;
                continue;
            }
        }

        cout << "Enter two numbers: ";
        cin >> a >> b;
        float result;
        switch (op)
        {
        case 'a':
            cout << ">>>> Sum result: " << a + b;
            break;
        case 'b':
            cout << ">>>> Difference result: " << a - b;
            break;
        case 'c':
            cout << ">>>> Multiplication result: " << a * static_cast<float>(b);
            break;
        case 'd':
            cout << ">>>> Division result: " << a / static_cast<float>(b);
            break;
        case 'e':
        case 'E':
            break;
        }

        cout << "---------------------------------------------------------------------------" << endl;
    }
    return 0;
}