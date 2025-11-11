
#include <iostream>
#include <array>
#include <string>
#include <conio.h>
#include <memory>
// #include <vector>

using namespace std;

struct Employee
{
    int id;
    string name;
    int age;
    float salary;
};

int MAX_EMPLOYEES;
// std::vector<Employee> employees;
unique_ptr<Employee[]> employees;
int empCount = 0;

void handleMenu();
void displayMenuOptions(const array<string, 4> &options, int selected, int menu_size);
void displayAllEmployees();
void displayEmployeeById();
void displayEmployeeForm();
void handleMenuSelection(int selected);

int main()
{
    cout << "Enter number of employees: ";
    cin >> MAX_EMPLOYEES;

    employees = make_unique<Employee[]>(MAX_EMPLOYEES);

    handleMenu();
    return 0;
}

void handleMenu()
{
    array<string, 4> options = {"Add Employee", "Search Employee", "Show All Employees", "Exit"};
    int selected = 0;
    int menu_size = options.size();

    while (true)
    {
        displayMenuOptions(options, selected, menu_size);

        // Wait for key press
        int key = _getch();

        if (key == 224 || key == 0) // Special key prefix
        {
            key = _getch();

            if (key == 72) // Up arrow
            {
                selected = (selected > 0) ? selected - 1 : menu_size - 1;
            }
            else if (key == 80) // Down arrow
            {
                selected = (selected < menu_size - 1) ? selected + 1 : 0;
            }
        }
        else if (key == 13) // Enter key
        {
            cout << "\n\n"
                 << "\x1B[1;36m" << "*** Action Selected: " << options[selected] << " ***" << "\x1B[0m" << "\n";

            handleMenuSelection(selected);

            if (selected != 0)
            {
                cout << "\n\n"
                     << "\x1B[34m" << "Press any key to return to menu..." << "\x1B[0m";
                _getch();
            }
        }
        else if (key == 27) // Escape key
        {
            cout << "\n\n"
                 << "\x1B[32m" << "Exiting program. Goodbye!\n"
                 << "\x1B[0m";
            break;
        }
    }
}

void displayMenuOptions(const array<string, 4> &options, int selected, int menu_size)
{
    cout << "\x1B[2J\x1B[H";

    cout << "--- Employees Management System ---\n\n";

    for (int i = 0; i < menu_size; i++)
    {
        if (i == selected)
            cout << "\x1B[31m" << "> " << options[i] << " <" << "\x1B[0m" << endl;
        else
            cout << "  " << options[i] << endl;
    }
}

void handleMenuSelection(int selected)
{
    switch (selected)
    {
    case 0:
        displayEmployeeForm();
        break;
    case 1:
        displayEmployeeById();
        break;
    case 2:
        displayAllEmployees();
        break;
    case 3:
        cout << "\n\n"
             << "\x1B[32m" << "Exiting program. Goodbye!\n"
             << "\x1B[0m";
        exit(0);
    }
}

void displayEmployeeForm()
{
    while (true)
    {
        // If we've already reached capacity, show message and return
        if (empCount >= MAX_EMPLOYEES)
        {
            cout << "\033[2J\033[H";
            cout << "\033[1;31mMaximum number of employees reached!\033[0m\n";
            return;
        }

        cout << "\033[2J\033[H";

        cout << "\033[1;36m==============================\n";
        cout << "   EMPLOYEE ENTRY FORM (" << empCount + 1 << "/" << MAX_EMPLOYEES << ")\n";
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
        cin >> employees[empCount].id;
        cout << "\033[0m";

        cout << "\033[" << nameRow << ";" << nameCol + 5 << "H\033[1;33m";
        cin.ignore();
        getline(cin, employees[empCount].name);
        cout << "\033[0m";

        cout << "\033[" << ageRow << ";" << ageCol + 4 << "H\033[1;33m";
        cin >> employees[empCount].age;
        cout << "\033[0m";

        cout << "\033[" << salaryRow << ";" << salaryCol + 7 << "H\033[1;33m";
        cin >> employees[empCount].salary;
        cout << "\033[0m";

        empCount++;
        cin.ignore();

        cout << "\033[9;0H\033[1;32mEmployee added successfully! (Count: " << empCount << ")\033[0m\n";
        cout << "Press \033[1;34mENTER\033[0m to add another, or \033[1;31mESC\033[0m to return to menu.\n";

        while (true)
        {
            int key = _getch();
            if (key == 13) // ENTER
            {
                break;
            }
            else if (key == 27) // ESC
            {
                return;
            }
        }
    }
}

void displayEmployeeById()
{
    cout << "\033[2J\033[H";
    cout << "\033[1;36m===== FIND EMPLOYEE BY ID =====\033[0m\n\n";

    if (empCount == 0)
    {
        cout << "\033[1;31mNo employees to display!\033[0m\n";
    }
    else
    {
        int id;
        cout << "Enter employee ID: ";
        cin >> id;

        for (int i = 0; i < empCount; i++)
        {
            if (employees[i].id == id)
            {
                cout << "\033[1;33m#" << i + 1 << " \033[0m";
                cout << "ID: " << employees[i].id
                     << " | Name: " << employees[i].name
                     << " | Age: " << employees[i].age
                     << " | Salary: $" << employees[i].salary << "\n";
                return;
            }
        }

        cout << "\033[1;31mEmployee not found!\033[0m\n";
    }
}

void displayAllEmployees()
{
    cout << "\033[2J\033[H";
    cout << "\033[1;36m===== EMPLOYEE LIST =====\033[0m\n\n";

    if (empCount == 0)
    {
        cout << "\033[1;31mNo employees to display!\033[0m\n";
    }
    else
    {
        for (int i = 0; i < empCount; i++)
        {
            cout << "\033[1;33m#" << i + 1 << " \033[0m";
            cout << "ID: " << employees[i].id
                 << " | Name: " << employees[i].name
                 << " | Age: " << employees[i].age
                 << " | Salary: $" << employees[i].salary << "\n";
        }
    }
}