#include <vector>
using namespace std;

void BubbleSort(vector<int>& arr) {
    int size = arr.size();
    bool swapped;

    for (int i = 0; i < size - 1; i++) {
        swapped = false;
        for (int j = 0; j < size - i - 1; j++) {
            if (arr.at(j) > arr.at(j + 1)) {
                swap(arr.at(j), arr.at(j + 1));
                swapped = true;
            }
        }

        // array became sorted
        if (!swapped) {
            break;
        }
    }
}
