#include <iostream>

int main()
{
    int a, b;

    std::cout << "Enter two numbers: ";
    std::cin >> a >> b;
    std::cout << "sum: " << a + b << std::endl;
    std::cout << "difference: " << a - b << std::endl;
    std::cout << "average: " << (a + b)/ static_cast<float>(2) << std::endl;

    return 0;
}