#ifndef STACK_H
#define STACK_H

#include <iostream>
#include <stdexcept>

using std::cout;
using std::endl;
using std::out_of_range;
using std::size_t;

const int DEFAULT_SIZE = 10;

class Stack
{
public:
    Stack(size_t capacity = 5) : arr(new int[capacity]),
                                 top(-1),
                                 size(capacity)
    {
        count++;
    }

    Stack(const Stack &other) : arr(new int[other.size]),
                                top(other.top),
                                size(other.size)
    {
        cout << "stack copy constructor called" << endl;
        for (int i = 0; i <= top; i++)
        {
            arr[i] = other.arr[i];
        }
        count++;
    };

    Stack(Stack &&other) : arr(other.arr),
                           top(other.top),
                           size(other.size)
    {
        cout << "stack move constructor called" << endl;
        other.arr = nullptr;
        other.top = -1;
        other.size = 0;
        count++;
    };

    ~Stack()
    {
        delete[] arr;
        count--;
        cout << "Stack destroyed." << endl;
    }

    Stack &push(int value)
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

    Stack &pop()
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

    Stack &operator=(const Stack &other) // copy assignment operator
    {
        cout << "Copy Assignment operator called." << endl;

        if (this != &other)
        {
            delete[] arr;
            size = other.size;
            top = other.top;
            arr = new int[size];

            for (int i = 0; i <= top; i++)
            {
                arr[i] = other.arr[i];
            }
        }

        return *this;
    }

    Stack &operator=(Stack &&other) // move assignment operator
    {
        cout << "Move Assignment operator called." << endl;
        if (this != &other)
        {
            delete[] arr;

            arr = other.arr;
            top = other.top;
            size = other.size;

            other.arr = nullptr;
            other.top = -1;
            other.size = 0;
        }

        return *this;
    }

    int &operator[](size_t index)
    {
        if (index > static_cast<size_t>(top))
        {
            throw out_of_range("Stack index out of bounds");
        }
        return arr[index];
    }

private:
    int *arr;
    int top;
    size_t size;
    static int count;

    // Stack() = delete; i can't disable default constructor while parameterized one has optional parameter
};

#endif