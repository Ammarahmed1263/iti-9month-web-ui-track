#ifndef STATICBOOK_H
#define STATICBOOK_H

#include <iostream>
#include <string>
#include "author.h"
using std::cout;
using std::endl;
using std::string;
using std::to_string;

class StaticBook
{
public:
    StaticBook(string title, int publish_year, string author_name, string author_nationality)
        : title(title),
          publish_year(publish_year),
          author(author_name, author_nationality)
    {
        cout << "StaticBook created." << endl;
    }

    ~StaticBook()
    {
        cout << "StaticBook destroyed." << endl;
    }

    bool operator==(const StaticBook &other) const
    {
        return title == other.title &&
               publish_year == other.publish_year &&
               author.getName() == other.author.getName() &&
               author.getNationality() == other.author.getNationality();
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
        return author.getNationality();
    }

    string getAuthorName() const
    {
        return author.getName();
    }

    string getDetails() const
    {
        return title + " by " + author.getName() + " (" + to_string(publish_year) + ")";
    }

private:
    string title;
    int publish_year;
    Author author;
};

#endif