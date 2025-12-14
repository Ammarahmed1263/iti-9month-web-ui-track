#include <vector>
using namespace std;


int partition(vector<int> &arr, int left, int right);

void QuickSort(vector<int> &arr, int left, int right)
{
    if (left >= right)
    return;
    
    int pivot = partition(arr, left, right);
    
    QuickSort(arr, left, pivot - 1);
    QuickSort(arr, pivot + 1, right);
}

int partition(vector<int> &arr, int left, int right) {
    int pivot = arr.at(right); // Choosing the rightmost element as pivot
    int i = left - 1; // haven't found small numbers yet

    for (int j = left; j < right; j++) {
        if (arr.at(j) <= pivot) {
            i++;
            swap(arr.at(i), arr.at(j));
        }
    }
    
    swap(arr.at(i + 1), arr.at(right));
    return i + 1;
}