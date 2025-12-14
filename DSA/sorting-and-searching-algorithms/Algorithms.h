#ifndef ALGORITHMS_H
#define ALGORITHMS_H

#include <vector>
using namespace std;

int LinearSearch(vector<int> &arr, int target);
int BinarySearchItr(vector<int> &arr, int target);
int BinarySearchRec(vector<int> &arr, int left, int right, int target);

void BubbleSort(vector<int> &arr);
void MergeSort(vector<int> &arr, int left, int right);
void QuickSort(vector<int> &arr, int left, int right);
void HeapSort(vector<int> &arr);

#endif