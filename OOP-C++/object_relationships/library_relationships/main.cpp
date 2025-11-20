#include <iostream>
#include "author.h"
#include "book.h"
#include "libraryVector.h"
#include "library.h"
#include "member.h"

using namespace std;

int main()
{
    Book book1{"1984", 2011, "George Orwell", "British"};
    Book book2{"To Kill a Mockingbird", 1960, "Harper Lee", "American"};
    Book book3{"Mr.Robot", 2006, "Terry Pratchett", "British"};
    
    Book book4 = book1;
    cout << "book4 title: " << book4.getDetails() << endl;
    book4 = book2;
    cout << "book4 title: " << book4.getDetails() << endl;

    LibraryVector lib;
    Library libArray{10};
    Library lib2{10};
    
    lib.addBook(&book1);
    lib.addBook(&book2);
    lib.addBook(&book3);
    
    lib.listBooks();
    
    libArray.addBook(&book1);
    libArray.addBook(&book2);
    libArray.addBook(&book3);
    
    lib2 = libArray;
    // Library lib2 = libArray;
    lib2.listBooks();

    lib2.addBook(&book4);
    libArray.listBooks();
    lib2.listBooks();

    Member ali{"Ali", 25};
    Member sara{"Sara", 30};

    ali.borrowBook(book3);
    sara.borrowBook(book2);
    return 0;
}