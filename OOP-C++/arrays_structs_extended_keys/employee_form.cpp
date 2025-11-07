#include <iostream>
#include <conio.h>
#include <string>
#include <array>
using namespace std;

struct Employee
{
    string id;
    string name;
    int age;
    float salary;
};

const int maxEmployees = 4;
int main()
{

    array<Employee, maxEmployees> employees;
    int empCount = 0;

    while (true)
    {
        cout << "\033[2J\033[H";

        cout << "\033[1;36m==============================\n";
        cout << "   EMPLOYEE ENTRY FORM (" << empCount + 1 << "/" << maxEmployees << ")\n";
        cout << "==============================\033[0m\n\n";

        cout << "ID:                          Name:\n";
        cout << "\n";
        cout << "Age:                         Salary:\n";

        // Cursor positions
        int idRow = 5, idCol = 2;
        int nameRow = 5, nameCol = 31;
        int ageRow = 7, ageCol = 2;
        int salaryRow = 7, salaryCol = 31;

        cout << "\033[" << idRow << ";" << idCol + 3 << "H\033[1;33m";
        getline(cin >> ws, employees.at(empCount).id);
        cout << "\033[0m";

        cout << "\033[" << nameRow << ";" << nameCol + 5 << "H\033[1;33m";
        getline(cin >> ws, employees.at(empCount).name);
        cout << "\033[0m";

        cout << "\033[" << ageRow << ";" << ageCol + 4 << "H\033[1;33m";
        cin >> employees.at(empCount).age;
        cout << "\033[0m";

        cout << "\033[" << salaryRow << ";" << salaryCol + 7 << "H\033[1;33m";
        cin >> employees.at(empCount).salary;
        cout << "\033[0m";

        empCount++;
        cin.ignore();

        cout << "\033[8;0H\033[1;32mEmployee added successfully!\033[0m\n";
        cout << "Press \033[1;34mENTER\033[0m to add another, or \033[1;31mESC\033[0m to finish.\n";

        while (true)
        {
            int c = _getch();
            if (c == 13)
            { // ENTER
                break;
            }
            else if (c == 27)
            { // ESC
                cout << "\033[2J\033[H";
                cout << "\033[1;31mExiting...\033[0m\n";
                cout << "\033[1;32mBye Bye!\033[0m\n\n";

                cout << "\033[1;36m===== EMPLOYEE LIST =====\033[0m\n\n";
                for (int i = 0; i < empCount; i++)
                {
                    cout << "\033[1;33m#" << i + 1 << " \033[0m";
                    cout << "ID: " << employees[i].id
                         << " | Name: " << employees[i].name
                         << " | Age: " << employees[i].age
                         << " | Salary: $" << employees[i].salary << "\n";
                }

                cout << "\n\033[1;32mThank you for using the system!\033[0m\n";
                return 0;
            }
        }

        if (empCount >= maxEmployees)
        {
            cout << "\033[2J\033[H";
            cout << "\033[1;31mMaximum number of employees reached!\033[0m\n\n";
            cout << "\033[1;36m===== EMPLOYEE LIST =====\033[0m\n\n";
            for (int i = 0; i < empCount; i++)
            {
                cout << "\033[1;33m#" << i + 1 << " \033[0m";
                cout << "ID: " << employees.at(i).id
                     << " | Name: " << employees.at(i).name
                     << " | Age: " << employees.at(i).age
                     << " | Salary: $" << employees.at(i).salary << "\n";
            }
            cout << "\n\033[1;32mBye Bye!\033[0m\n";
            break;
        }
    }

    return 0;
}
