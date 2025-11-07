#include <iostream>

using namespace std;
int main()
{

    int n;
    cout << "Enter an odd number for magic square size: ";
    cin >> n;

    if (n % 2 == 0 || n < 1)
    {
        cout << "Magic square works only for positive odd numbers.\n";
        return 0;
    }

    int row = 1;
    int col = (n + 1) / 2;

    // cout << "\x1B[2J";
    for (int num = 1; num <= n * n; num++)
    {
        // int color = 31 + ((num - 1) % 6);
        int color;
        if (num % 2 != 0)
        {
            color = 35;
        }
        else
        {
            color = 36;
        }

        cout << "\x1B[" << row + 4 << ";" << (col * 4) << "H";
        cout << "\x1B[" << color << "m" << num << "\x1B[0m";

        // Siamese method moves
        int nextRow = row - 1;
        int nextCol = col + 1;

        if (nextRow < 1)
            nextRow = n;
        if (nextCol > n)
            nextCol = 1;

        // every time you place a multiple of n (i.e. num % n == 0) the next placement is directly below the previous cell
        if (num % n == 0)
        {
            nextRow = row + 1;
            nextCol = col;
            if (nextRow > n)
                nextRow = 1;
        }

        row = nextRow;
        col = nextCol;
    }

    cout << "\x1B[" << (n + 3) << ";1H\n";
    return 0;
}

// Standard escape codes are prefixed with `Escape`:

// - Ctrl-Key: `^[`
// - Octal: `\033`
// - Unicode: `\u001b`
// - Hexadecimal: `\x1B`
// - Decimal: `27`

// | Color Name | Foreground Color Code | Background Color Code |
// | :--------- | :-------------------- | :-------------------- |
// | Black      | `30`                  | `40`                  |
// | Red        | `31`                  | `41`                  |
// | Green      | `32`                  | `42`                  |
// | Yellow     | `33`                  | `43`                  |
// | Blue       | `34`                  | `44`                  |
// | Magenta    | `35`                  | `45`                  |
// | Cyan       | `36`                  | `46`                  |
// | White      | `37`                  | `47`                  |
// | Default    | `39`                  | `49`                  |

// Magic constant=n(n^2+1)/2
