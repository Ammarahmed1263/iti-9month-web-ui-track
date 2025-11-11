#include <iostream>
#include <conio.h>
#include <cstring>

using namespace std;

const int BOX_START_ROW = 4;
const int BOX_START_COL = 30;
const int BOX_WIDTH = 40;
const int BOX_HEIGHT = 1;
const int MAX_LINE_LENGTH = BOX_WIDTH;
const int INPUT_ROW = BOX_START_ROW + (BOX_HEIGHT / 2);

void clearScreen();
void moveCursor(int row, int col);
void hideCursor();
void showCursor();
void drawBox(int startRow, int startCol, int width, int height);
void initEditor(char text[], int &length, int &cursorPos);
void displayLine(const char text[], int length, int cursorPos);
void insertChar(char text[], int &length, int &cursorPos, char ch);
void deleteChar(char text[], int &length, int &cursorPos);
void backspaceChar(char text[], int &length, int &cursorPos);
void moveCursorLeft(int &cursorPos);
void moveCursorRight(int &cursorPos, int length);
void moveCursorHome(int &cursorPos);
void moveCursorEnd(int &cursorPos, int length);
void handleExtendedKey(char text[], int &length, int &cursorPos, int extKey);
void runEditor();

int main()
{
    clearScreen();

    drawBox(BOX_START_ROW, BOX_START_COL, BOX_WIDTH, BOX_HEIGHT);

    runEditor();

    moveCursor(BOX_START_ROW + BOX_HEIGHT + 1, 1);
    cout << endl;
    return 0;
}

void clearScreen()
{
    cout << "\033[2J\033[H";
    cout.flush();
}

void moveCursor(int row, int col)
{
    cout << "\033[" << row << ";" << col << "H";
    cout.flush();
}

void hideCursor()
{
    cout << "\033[?25l";
    cout.flush();
}

void showCursor()
{
    cout << "\033[?25h";
    cout.flush();
}

void drawBox(int startRow, int startCol, int width, int height)
{
    for (int r = 0; r < height; ++r)
    {
        moveCursor(startRow + r, startCol);
        cout << "\033[46m";
        for (int c = 0; c < width; ++c)
            cout << ' ';
        cout << "\033[0m";
    }
    cout.flush();
}

void initEditor(char text[], int &length, int &cursorPos)
{
    text[0] = '\0';
    length = 0;
    cursorPos = 0;
}

void displayLine(const char text[], int length, int cursorPos)
{
    moveCursor(INPUT_ROW, BOX_START_COL);

    cout << "\033[46m\033[30m";

    for (int i = 0; i < BOX_WIDTH; ++i)
    {
        char ch = (i < length) ? text[i] : ' ';
        if (i == cursorPos)
        {
            cout << "\033[43m\033[30m" << ch << "\033[46m\033[30m";
        }
        else
        {
            cout << ch;
        }
    }

    cout << "\033[0m";

    moveCursor(INPUT_ROW, BOX_START_COL + cursorPos);
    cout.flush();
}

void insertChar(char text[], int &length, int &cursorPos, char ch)
{
    if (length >= MAX_LINE_LENGTH)
        return;

    for (int i = length; i > cursorPos; --i)
        text[i] = text[i - 1];

    text[cursorPos] = ch;
    ++length;
    text[length] = '\0';
    ++cursorPos;
}

void deleteChar(char text[], int &length, int &cursorPos)
{
    if (cursorPos >= length)
        return;
    for (int i = cursorPos; i < length - 1; ++i)
        text[i] = text[i + 1];
    --length;
    text[length] = '\0';
}

void backspaceChar(char text[], int &length, int &cursorPos)
{
    if (cursorPos == 0)
        return;
    --cursorPos;
    deleteChar(text, length, cursorPos);
}

void moveCursorLeft(int &cursorPos)
{
    if (cursorPos > 0)
        --cursorPos;
}

void moveCursorRight(int &cursorPos, int length)
{
    if (cursorPos < length && cursorPos < BOX_WIDTH - 1)
        ++cursorPos;
}

void moveCursorHome(int &cursorPos)
{
    cursorPos = 0;
}

void moveCursorEnd(int &cursorPos, int length)
{
    cursorPos = length;
    if (cursorPos > BOX_WIDTH - 1)
        cursorPos = BOX_WIDTH - 1;
}

void handleExtendedKey(char text[], int &length, int &cursorPos, int extKey)
{
    switch (extKey)
    {
    case 75: // left
        moveCursorLeft(cursorPos);
        break;
    case 77: // right
        moveCursorRight(cursorPos, length);
        break;
    case 71: // home
        moveCursorHome(cursorPos);
        break;
    case 79: // end
        moveCursorEnd(cursorPos, length);
        break;
    case 83: // delete
        deleteChar(text, length, cursorPos);
        break;
    }
}

void runEditor()
{
    char text[MAX_LINE_LENGTH + 1];
    int length = 0;
    int cursorPos = 0;
    bool running = true;

    initEditor(text, length, cursorPos);

    hideCursor();
    displayLine(text, length, cursorPos);

    while (running)
    {
        int ch = _getch();

        if (ch == 0 || ch == 224)
        {
            int ext = _getch();
            handleExtendedKey(text, length, cursorPos, ext);
        }
        else
        {
            if (ch == 27) // ESC
            {
                running = false;
            }
            else if (ch == 13) // Enter
            {
                moveCursor(BOX_START_ROW + BOX_HEIGHT + 1, 0);
                cout << "\033[32m You entered: " << text << "\033[0m";
                running = false;
            }
            else if (ch == 8) // Backspace
            {
                backspaceChar(text, length, cursorPos);
            }
            else if (ch >= 32 && ch <= 126) // printable
            {
                insertChar(text, length, cursorPos, static_cast<char>(ch));
            }
        }

        if (length > BOX_WIDTH)
            length = BOX_WIDTH;

        displayLine(text, length, cursorPos);
    }

    // showCursor();
}
