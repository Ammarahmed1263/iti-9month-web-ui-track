#include <iostream>
#include <vector>
using namespace std;

int LinearSearch(vector<int> &arr, int target)
{
    for (size_t i = 0; i < arr.size(); i++)
    {
        if (arr.at(i) > target)
        {
            break;
        }

        if (arr.at(i) == target)
        {
            return static_cast<int>(i);
        }

    }

    return -1;
}
