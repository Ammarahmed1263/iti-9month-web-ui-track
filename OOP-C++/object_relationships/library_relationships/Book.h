#ifndef BOOK_H
#define BOOK_H

#include <iostream>
#include <string>
#include "author.h"
using std::cout;
using std::endl;
using std::string;
using std::to_string;

class Book
{
public:
    Book(string title, int publish_year, string author_name, string author_nationality)
        : title(title),
          publish_year(publish_year),
          author(new Author(author_name, author_nationality))
    {
        cout << "Book created." << endl;
    }

    ~Book()
    {
        delete author;
        cout << "Book destroyed." << endl;
    }

    Book(Book const &other)
        : title(other.title),
          publish_year(other.publish_year),
          author(new Author(other.author->getName(), other.author->getNationality()))
    {
        cout << "Book copied." << endl;
    }

    Book &operator=(const Book &other)
    {
        if (this != &other)
        {
            title = other.title;
            publish_year = other.publish_year;
            delete author;
            author = new Author(other.author->getName(), other.author->getNationality());
        }
        cout << "Book assigned." << endl;
        return *this;
    }

    bool operator==(const Book &other) const
    {
        return title == other.title &&
               publish_year == other.publish_year &&
               author->getName() == other.author->getName() &&
               author->getNationality() == other.author->getNationality();
    }

    string getTitle() const
    {
        return title;
    }

    int getPublishYear() const
    {
        return publish_year;
    }

    string getAuthorNationality() const
    {
        return author->getNationality();
    }

    string getAuthorName() const
    {
        return (*author).getName();
    }

    string getDetails() const
    {
        return title + " by " + author->getName() + " (" + to_string(publish_year) + ")";
    }

private:
    string title;
    int publish_year;
    Author *author;
};

#endif