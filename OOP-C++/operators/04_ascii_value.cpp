#include <iostream>

int main()
{
    char c;
    std::cout << "Enter char here: ";
    std::cin >> c;
    std::cout << "ASCII: " << static_cast<int>(c) << std::endl;

    return 0;
}