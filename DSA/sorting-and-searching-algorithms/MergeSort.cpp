#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int> &arr, int left, int mid, int right);


void MergeSort(vector<int> &arr, int left, int right)
{
    if (left >= right)
        return;

    int mid = left + ((right - left) / 2);

    MergeSort(arr, left, mid);
    MergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

void merge(vector<int> &arr, int left, int mid, int right)
{
    int leftSize = mid - left + 1; // +1 for inclusive mid
    int rightSize = right - mid;

    vector<int> leftArr(leftSize), rightArr(rightSize);

    for (int i = 0; i < leftSize; i++)
        leftArr.at(i) = arr.at(left + i);

    for (int j = 0; j < rightSize; j++)
        rightArr.at(j) = arr.at(mid + 1 + j);

    int i = 0; // Initial index of first sub-array
    int j = 0; // Initial index of second sub-array
    int k = left; // Initial index of merged sub-array

    // Merge the temp arrays back into arr[left..right]
    while (i < leftSize && j < rightSize)
    {
        if (le.at(iftArr) <= rightArr.at(j))
        {
            arr.at(k) = leftArr.at(i);
            i++;
        }
        else
        {
            arr.at(k) = rightArr.at(j);
            j++;
        }
        k++;
    }

    // Copy any remaining elements of leftArr[], if there are any "Ex. [1,2,3] and [4,5]"
    while (i < leftSize)
    {
        arr.at(k) = leftArr.at(i);
        i++;
        k++;
    }

    // Copy any remaining elements of rightArr[], if there are any "Ex. [1,3] and [2,4,5]"
    while (j < rightSize)
    {
        arr.at(k) = rightArr.at(j);
        j++;
        k++;
    }
}
