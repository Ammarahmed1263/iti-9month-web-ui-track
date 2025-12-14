#include <vector>
using namespace std;

void heapify(vector<int> &arr, int n, int i);

void HeapSort(vector<int> &arr)
{
    /* steps to do
        1- imagine array as binary tree
        2- heapify starting from last non-leaf node
        3- first element will be the largest
        4- move first element to the back of array and consider array size to be size - 1
        5- heapify the shorter array
    */
    int size = arr.size();

    for (int i = size / 2 - 1; i >= 0; i--)
        heapify(arr, size, i);

    for (int i = size - 1; i > 0; i--) {
        swap(arr.at(0), arr.at(i));

        heapify(arr, i, 0);
    }
}

// building max heap "heap that have parent node > child node"
void heapify(vector<int> &arr, int size, int i)
{
    
    /*
        1- if root isn't larger than its children then swap it with greater child
        2- If a swap happened, call heapify again recursively on the child position that was swapped
    */
    int largest = i;
    int leftChildIndex = (2 * i) + 1;
    int rightChildIndex = (2 * i) + 2;

    if (size > leftChildIndex && arr.at(largest) < arr.at(leftChildIndex)) largest = leftChildIndex;


    if (size > rightChildIndex && arr.at(largest) < arr.at(rightChildIndex)) largest = rightChildIndex;

    if (largest != i) {
        swap(arr.at(largest), arr.at(i));
        heapify(arr, size, largest);
    }
}

/*
In a Binary Heap array representation, for any node at index i:
    - The Left Child is at 2i + 1
    - The Right Child is at 2i + 2
    - The Parent of any node k is at (k - 1) / 2 (integer division).
The last non-leaf node is simply the parent of the very last element in the array.
Since the last element is at index n - 1, we just plug that into the parent formula:
    parent = ((n - 1) - 1) / 2 = (n - 2) / 2 = n / 2 - 1
*/