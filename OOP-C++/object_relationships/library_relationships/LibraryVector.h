#ifndef LIBRARYVECTOR_H
#define LIBRARYVECTOR_H

#include <iostream>
#include <vector>
#include <algorithm>
#include "book.h"
using std::cout;
using std::endl;
using std::find;
using std::vector;

class LibraryVector
{
public:
    LibraryVector()
    {
        cout << "LibraryVector created." << endl;
    }

    ~LibraryVector()
    {
        cout << "LibraryVector destroyed." << endl;
    }

    void addBook(Book *book)
    {
        books.push_back(book);
        cout << "Book added to LibraryVector." << endl;
    }

    void removeBook(Book *book)
    {
        auto it = find(books.begin(), books.end(), book);
        if (it != books.end())
        {
            books.erase(it);
            cout << "Book removed from LibraryVector." << endl;
        }
    }

    void listBooks() const
    {
        cout << "\nListing books in LibraryVector:" << endl;
        for (const auto &book : books)
        {
            cout << "- " << book->getTitle() << " authored by: " << book->getAuthorName()
                 << " in " << book->getPublishYear() << endl;
        }
        cout << endl;
    }

private:
    vector<Book *> books;
};

#endif