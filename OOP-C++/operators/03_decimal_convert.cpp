#include <iostream>

int main()
{
    int number;

    std::cout << "Insert number in Decimal: ";
    std::cin >> number;
    std::cout << "Hex: " << std::hex << number << std::endl;
    std::cout << "Hex: " << std::hex << number << std::endl;
    std::cout << "Octal: " << std::oct << number << std::endl;

    return 0;
}