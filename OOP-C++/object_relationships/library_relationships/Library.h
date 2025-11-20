#ifndef Library_H
#define Library_H

#include <iostream>
#include <vector>
#include <algorithm>
#include "staticbook.h"
using std::cout;
using std::endl;
using std::find;
using std::vector;

class Library
{
public:
    Library(size_t capacity = 10)
        : books(new Book *[capacity]), top(-1), capacity(capacity)
    {
        cout << "Library created." << endl;
    }

    ~Library()
    {
        cout << "Library destroyed." << endl;
    }

    Library(const Library &other)
    {
        top = other.top;
        capacity = other.capacity;
        books = new Book *[capacity];

        for (int i = 0; i <= top; ++i)
        {
            books[i] = other.books[i];
        }
    };

    Library &operator=(const Library &other)
    {
        if (this != &other)
        {
            delete[] books;
            top = other.top;
            capacity = other.capacity;
            books = new Book *[capacity];

            for (int i = 0; i <= top; ++i)
            {
                books[i] = other.books[i];
            }
        }
        return *this;
    };

    void addBook(Book *book)
    {
        if (top < static_cast<int>(capacity) - 1)
        {
            books[++top] = book;
            cout << "Book added to Library." << endl;
        }
    }

    void removeBook(Book *book)
    {
        for (int i = 0; i <= top; ++i)
        {
            if (books[i] == book)
            {
                for (int j = i; j < top; ++j)
                {
                    books[j] = books[j + 1];
                }
                --top;
                cout << "Book removed from Library." << endl;
                return;
            }
        }
    }

    void listBooks() const
    {
        cout << "\nListing books in Library:" << endl;
        for (int i = 0; i <= top; ++i)
        {
            cout << "- " << books[i]->getTitle() << " authored by: " << books[i]->getAuthorName()
                 << " in " << books[i]->getPublishYear() << endl;
        }
        cout << endl;
    }

private:
    Book **books;
    int top;
    size_t capacity;
};

#endif