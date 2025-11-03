#include <iostream>

int main()
{
    std::string name, city;
    int age;

    std::cout << "Enter your Name, Age and City: ";
    std::cin >> name >> age >> city;
    std::cout << "Name: " << name << std::endl;
    std::cout << "Age: " << age << std::endl;
    std::cout << "City: " << city << std::endl;

    return 0;
}