#include <iostream>
#include "Algorithms.h"
#include <vector>

using namespace std;

void printVector(const vector<int>& arr);

int main()
{
    vector<int> data = {12, 5, 30, 1, 300, 12};
    vector<int> sortedData = {1, 5, 12, 26, 30};

    // int index = LinearSearch(sortedData, 30);
    // int index = BinarySearchItr(sortedData, 12);
    // int index = BinarySearchRec(sortedData, 0, sortedData.size() - 1, 30);
    // if (index != -1)
    // {
    //     cout << "Element found at index: " << index << endl;
    // }
    // else
    // {
    //     cout << "Element not found!" << endl;
    // }

    // BubbleSort(data);
    // MergeSort(data, 0, data.size() - 1);
    QuickSort(data, 0, data.size() - 1);
    HeapSort(data);


    cout << "Sorted array: ";
    printVector(data);

    return 0;
}

void printVector(const vector<int>& arr) {
    for (const int& num : arr) {
        cout << num << " ";
    }
    cout << endl;
}