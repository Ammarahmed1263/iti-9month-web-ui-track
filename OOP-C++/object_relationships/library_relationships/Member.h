#ifndef MEMBER_H
#define MEMBER_H

#include <iostream>
#include "book.h"
using std::cout;
using std::endl;
using std::string;

class Member
{
public:
    Member() = default;

    Member(string name, int id) : name(name), id(id)
    {
        cout << "Member created." << endl;
    }

    ~Member()
    {
        cout << "Member destroyed." << endl;
    }

    void borrowBook(const Book &book) {
        cout << name << " borrowed " << book.getTitle() << endl;
    }

private:
    string name;
    int id;
};

#endif