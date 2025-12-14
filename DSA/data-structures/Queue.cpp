#include <iostream>
#include "DoublyLinkedList.h"
#include "Node.h"

class Queue : public DLL
{
public:
    void enqueue(const Employee &emp)
    {
        append(emp);
    }

    Employee dequeue()
    {
        if (head == nullptr)
        {
            throw runtime_error("Queue Underflow: Queue is empty");
        }

        Node *temp = head;
        Employee val = temp->data;
        if (head == tail)
        {
            head = tail = nullptr;
        }

        head = head->next;
        head->prev = nullptr;

        delete temp;
        return val;
    }

    Employee Peek() const
    {
        if (head == nullptr)
        {
            return Employee{-1, "Empty", 0.0};
        }
        return head->data;
    }

    bool isEmpty() const
    {
        return countNodes() == 0;
    }
};