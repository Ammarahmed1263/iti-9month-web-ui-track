#pragma once
#include <iostream>
#include "Node.h"

using namespace std;

class DLL
{
protected:
    Node *head;
    Node *tail;

public:
    DLL() : head(nullptr), tail(nullptr) {}

    DLL(Employee data) : head(nullptr), tail(nullptr)
    {
        append(data);
    }

    ~DLL()
    {
        Node *current = head;
        while (current != nullptr)
        {
            Node *nextNode = current->next;
            delete current;
            current = nextNode;
        }
    }

    // copy ctr
    DLL(const DLL &other)
    {
        head = tail = nullptr;

        Node *trav = other.head;
        while (trav != nullptr)
        {
            append(trav->data);
            trav = trav->next;
        }
    }

    // move ctr
    DLL(DLL &&other) noexcept
    {
        head = other.head;
        tail = other.tail;

        other.head = nullptr;
        other.tail = nullptr;
    }

    DLL &operator=(const DLL &other)
    {
        if (this != &other)
        {
            this->~DLL();
            head = tail = nullptr;

            Node *trav = other.head;
            while (trav != nullptr)
            {
                append(trav->data);
                trav = trav->next;
            }
        }
        return *this;
    }

    DLL &operator=(DLL &&other)
    {
        if (this != &other)
        {
            this->~DLL();
            head = tail = nullptr;

            head = other.head;
            tail = other.tail;

            other.head = nullptr;
            other.tail = nullptr;
        }
        return *this;
    }

    const Employee &operator[](int index)
    {
        Node *trav = head;
        int count = 0;
        while (trav != nullptr)
        {
            if (count == index)
            {
                return trav->data;
            }
            count++;
            trav = trav->next;
        }
        throw out_of_range("Index out of bounds");
    }

    void append(const Employee &data)
    {
        Node *newNode = new Node(data);
        if (head == nullptr)
        {
            head = tail = newNode;
        }
        else
        {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
    }

    bool remove(int id)
    {
        if (head == nullptr)
            return false;

        Node *trav = head;
        while (trav != nullptr)
        {
            if (trav->data.id == id)
            {
                if (trav->prev != nullptr)
                {
                    trav->prev->next = trav->next;
                }
                else
                {
                    head = trav->next;
                }

                if (trav->next != nullptr)
                {
                    trav->next->prev = trav->prev;
                }
                else
                {
                    tail = trav->prev;
                }

                delete trav;
                return true;
            }
            trav = trav->next;
        }
        return false;
    }

    Employee searchNode(int id) const
    {
        Node *trav = head;
        while (trav != nullptr)
        {
            if (trav->data.id == id)
            {
                return trav->data;
            }
            trav = trav->next;
        }
        return Employee{-1, "Not Found", 0.0};
    }

    bool displayNode(int id) const
    {
        Node *trav = head;
        while (trav != nullptr)
        {
            if (trav->data.id == id)
            {
                cout << "ID: " << trav->data.id
                     << ", Name: " << trav->data.name
                     << ", Salary: " << trav->data.salary << endl;
                return true;
            }
            trav = trav->next;
        }
        return false;
    }

    void displayItems() const
    {
        Node *current = head;
        while (current != nullptr)
        {
            cout << "\nID: " << current->data.id
                 << ", Name: " << current->data.name
                 << ", Salary: " << current->data.salary << endl;
            current = current->next;
        }
    }

    int countNodes() const
    {
        int count = 0;
        Node *trav = head;
        while (trav != nullptr)
        {
            count++;
            trav = trav->next;
        }
        return count;
    }
};