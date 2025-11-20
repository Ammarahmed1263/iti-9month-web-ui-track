#ifndef AUTHOR_H
#define AUTHOR_H

#include <iostream>
using std::cout;
using std::endl;
using std::string;

class Author
{
public:
    Author(string name, string nationality) : name(name), nationality(nationality)
    {
        cout << "Author created." << endl;
    }

    ~Author()
    {
        cout << "Author destroyed." << endl;
    }

    string getName() const
    {
        return name;
    }

    string getNationality() const
    {
        return nationality;
    }

private:
    string name;
    string nationality;
};

#endif