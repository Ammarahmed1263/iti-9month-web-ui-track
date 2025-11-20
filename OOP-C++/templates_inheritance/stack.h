#ifndef STACK_H
#define STACK_H

#include <iostream>
#include <stdexcept>

using std::cout;
using std::endl;
using std::out_of_range;
using std::size_t;

const int DEFAULT_SIZE = 10;

template <class T>
class Stack
{
public:
    Stack(size_t capacity = 5) : arr(new T[capacity]),
                                 top(-1),
                                 size(capacity)
    {
        count++;
    }

    ~Stack()
    {
        delete[] arr;
        count--;
        // cout << "Stack destroyed." << endl;
    }

    Stack(const Stack &other) : arr(new T[other.size]),
                                top(other.top),
                                size(other.size)
    {
        // cout << "stack copy constructor called" << endl;
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
        // cout << "stack move constructor called" << endl;
        other.arr = nullptr;
        other.top = -1;
        other.size = 0;
        count++;
    };

    Stack &operator=(const Stack &other) // copy assignment operator
    {
        // cout << "Copy Assignment operator called." << endl;

        if (this != &other)
        {
            delete[] arr;
            size = other.size;
            top = other.top;
            arr = new T[size];

            for (int i = 0; i <= top; i++)
            {
                arr[i] = other.arr[i];
            }
        }

        return *this;
    }

    Stack &operator=(Stack &&other) // move assignment operator
    {
        // cout << "Move Assignment operator called." << endl;
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

    T &operator[](size_t index);

    Stack &push(T value)
    {
        if (isFull())
        {
            cout << "Stack Overflow" << endl;
            return *this;
        }
        arr[++top] = value;
        // cout << "Pushed " << value << " to stack." << endl;
        return *this;
    }

    Stack &pop()
    {
        if (isEmpty())
        {
            cout << "Stack Already Empty" << endl;
            return *this;
        }
        cout << "Popped " << arr[top--] << " from stack." << endl;
        return *this;
    }

    bool isEmpty() const
    {
        return top == -1;
    }

    bool isFull() const
    {
        return top == static_cast<int>(size) - 1;
    }

    void showStackItems()
    {
        if (isEmpty())
        {
            cout << "Stack is Empty" << endl;
            return;
        }
        cout << "Stack elements: [";
        for (int i = 0; i <= top; i++)
        {
            if (i == top)
            {
                cout << arr[i];
                break;
            }
            cout << arr[i] << ", ";
        }
        cout << "]" << endl;
    }

    static void showStacksCount()
    {
        cout << "Number of Stacks: " << count << endl;
    }

private:
    T *arr;
    int top;
    size_t size;
    static inline int count = 0;
};

template <class T>
T &Stack<T>::operator[](size_t index)
{
    if (index > static_cast<size_t>(top))
    {
        throw out_of_range("Stack index out of bounds");
    }
    return arr[index];
}

#endif