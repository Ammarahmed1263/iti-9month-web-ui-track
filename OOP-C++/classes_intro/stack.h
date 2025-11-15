#ifndef STACK_H
#define STACK_H

#include <iostream>
using std::cout;
using std::endl;
using std::size_t;

const int DEFAULT_SIZE = 10;

class Stack
{
private:
    int *arr;
    size_t top;
    size_t size;
    static int count;

public:
    Stack() {
        count++;
        arr = new int[DEFAULT_SIZE];
        top = -1;
        size = DEFAULT_SIZE;
    }

    Stack(size_t userSize)
    {
        count++;
        arr = new int[userSize];
        top = -1;
        size = userSize;
    }


    Stack& push(int value)
    {
        if (top == size - 1)
        {
            cout << "Stack Overflow" << endl;
            return *this;
        }
        arr[++top] = value;
        cout << "Pushed " << value << " to stack." << endl;
        return *this;
    }

    Stack& pop()
    {
        if (top == -1)
        {
            cout << "Stack Already Empty" << endl;
            return *this;
        }
        cout << "Popped " << arr[top--] << " from stack." << endl;
        return *this;
    }

    void showStackItems()
    {
        if (top == -1)
        {
            cout << "Stack is Empty" << endl;
            return;
        }
        cout << "Stack elements: ";
        for (int i = 0; i <= top; i++)
        {
            cout << arr[i] << " ";
        }
        cout << endl;
    }

    static void showStacksCount()
    {
        cout << "Number of Stacks: " << count << endl;
    }

    ~Stack()
    {
        count--;
        delete[] arr;
    }
};

#endif