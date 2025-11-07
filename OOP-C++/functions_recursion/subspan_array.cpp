#include <span>
#include <array>
#include <iostream>
#include <algorithm>

using namespace std;

void modify_span(span<int>);

int main()
{
    int numbers[]{1, 2, 3, 4, 5, 8};
    modify_span(numbers);

    cout << "modified array: [";
    for (auto &ele : numbers) {
        cout << ele;
        if (&ele != &numbers[sizeof(numbers)/sizeof(numbers[0]) - 1]) {
            cout << ", ";
        }
    }
    cout << "]" << endl;
}

void modify_span(span<int> array)
{
    size_t size = array.size();

    size_t first_half_size = (size + 1) / 2;
    size_t second_half_size = size / 2;

    auto first_half = array.subspan(0, first_half_size);
    auto second_half = array.subspan(first_half_size, second_half_size);

    fill(first_half.begin(), first_half.end(), 0);
    fill(second_half.begin(), second_half.end(), 1);
}