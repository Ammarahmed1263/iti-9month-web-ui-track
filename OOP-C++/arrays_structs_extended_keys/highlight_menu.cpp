#include <iostream>
#include <array>
#include <conio.h>

using namespace std;

int main()
{
    array<string, 4> options = {"New", "Display", "Display All", "Exit"};
    int selected = 0;
    int menu_size = options.size();

    while (true)
    {
        cout << "\x1B[2J\x1B[H";

        cout << "--- Highlight Menu ---\n\n";

        for (int i = 0; i < menu_size; i++)
        {
            if (i == selected)
                cout << "\x1B[31m" << "> " << options[i] << " <" << "\x1B[0m" << endl;
            else
                cout << "  " << options[i] << endl;
        }

        // Wait for key press
        int key = _getch();

        if (key == 224 || key == 0) // Special key prefix
        {
            key = _getch();
            cout << "Pressed extended key code: " << key << "\x1B[2J" << endl;
            if (key == 72)  // Up arrow
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
            cout << "\n\n*** Action Selected: " << options[selected] << " ***\n";

            switch (selected)
            {
            case 0:
                cout << "Executing New data creation...";
                break;
            case 1:
                cout << "Executing Display single item...";
                break;
            case 2:
                cout << "Executing Display All items...";
                break;
            case 3:
                cout << "Exiting program. Goodbye!\n";
                return 0;
            }

            cout << "\n\nPress any key to return to the menu...";
            _getch();
        }
        else if (key == 27) // Escape key
        {
            cout << "\n\nExiting program. Goodbye!\n";
            break;
        }
    }

    return 0;
}