#include <iostream>
#include "DoublyLinkedList.h"
#include "Node.h"

class Stack : public DLL
{
public:
    void push(const Employee &emp)
    {
        append(emp);
    }

    Employee pop()
    {
        if (head == nullptr)
        {
            throw runtime_error("Stack Underflow: Stack is empty");
        }

        Node *temp = tail;
        Employee val = temp->data;
        if (head == tail) // only one element
        {
            head = tail = nullptr;
        }
        else
        {
            tail = tail->prev;
            tail->next = nullptr;
        }

        delete temp;
        return val;
    }

    Employee Peak() const
    {
        if (tail == nullptr)
        {
            return Employee{-1, "Empty", 0.0};
        }

        return tail->data;
    }

    bool isEmpty() const
    {
        return countNodes() == 0;
    }
};