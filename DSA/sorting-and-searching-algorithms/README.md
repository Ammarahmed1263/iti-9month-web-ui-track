# Sorting & Searching Algorithms

This assignment demonstrates core searching and sorting algorithms implemented in C++. Below is an explanation of how each algorithm works based on the code in this repository, ordered as requested.

## 1) Linear Search (`LinearSearch`)
- Input: a sorted `vector<int>` and a `target` value.
- Logic in code (`linearSearch.cpp`):
  - Iterates from the beginning to the end using an index `i` and checks `arr.at(i)`.
  - Early exit: if `arr.at(i) > target`, it breaks the loop because the array is sorted and all subsequent values will be larger (the target can no longer appear).
  - If `arr.at(i) == target`, returns the index `i`.
  - If the loop finishes without finding the target, returns `-1`.
- Time Complexity: Worst-case $O(n)$; best-case $O(1)$.
- Space Complexity: $O(1)$.

## 2) Binary Search (`BinarySearchItr` and `BinarySearchRec`)
Binary Search requires a sorted array and repeatedly halves the search range.

### Iterative (`BinarySearchItr.cpp`)
- Maintains two bounds: `left` and `right`.
- Computes `mid = left + ((right - left) / 2)` to avoid overflow.
- Compares `arr.at(mid)` to `target`:
  - If equal, returns `mid`.
  - If `arr.at(mid) > target`, shifts `right = mid - 1`.
  - Else shifts `left = mid + 1`.
- Loop continues while `left <= right`; if not found, returns `-1`.
- Time Complexity: $O(log n)$; Space Complexity: $O(1)$.

### Recursive (`BinarySearchREC.cpp`)
- Base case: if `left > right`, returns `-1`.
- Computes `mid` the same way.
- If `arr.at(mid) == target`, returns `mid`.
- If `arr.at(mid) > target`, recursively searches the left half: `BinarySearchRec(arr, left, mid - 1, target)`.
- Otherwise, searches the right half: `BinarySearchRec(arr, mid + 1, right, target)`.
- Time Complexity: $O(log n)$; Space Complexity: $O(log n)$ due to recursion depth.

## 3) Bubble Sort (`BubbleSort`)
- Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
- Code details (`bubbleSort.cpp`):
  - Outer loop runs `size - 1` passes.
  - Inner loop compares `arr.at(j)` with `arr.at(j + 1)` and uses `swap` when needed.
  - Tracks `swapped` to detect an already sorted array; if no swaps occur in a pass, breaks early.
- Time Complexity: Worst-case $O(n^2)$; best-case $O(n)$ with early exit.
- Space Complexity: $O(1)$.

## 4) Merge Sort (`MergeSort`)
- Divide-and-conquer stable sort.
- Code structure (`MergeSort.cpp`):
  - `MergeSort(arr, left, right)` recursively splits the array until subarrays of size 1.
  - `merge(arr, left, mid, right)` merges two sorted halves:
    - Creates temporary arrays `leftArr` and `rightArr`.
    - Uses three indices (`i`, `j`, `k`) to merge elements back into `arr[left..right]` in sorted order.
    - Copies any remaining elements from either half.
- Time Complexity: $O(n log n)$.
- Space Complexity: $O(n)$ due to temporary arrays.

## 5) Quick Sort (`QuickSort`)
- In-place divide-and-conquer sort using partitioning.
- Code details (`QuickSort.cpp`):
  - Public entry: `QuickSort(arr, left, right)` with base case `if (left >= right) return;`.
  - `partition(arr, left, right)` chooses the rightmost element as pivot and reorders so that elements `<= pivot` end up left of the pivot and elements `> pivot` to its right.
  - Partition logic:
    - `pivot = arr.at(right)`; `i = left - 1` tracks boundary of smaller elements.
    - For `j` from `left` to `right - 1`, if `arr.at(j) <= pivot`, increment `i` and swap `arr.at(i)` with `arr.at(j)`.
    - Finally swap `arr.at(i + 1)` with `arr.at(right)`; return `i + 1` as the pivot’s final index.
  - Recursive steps: sort left part `QuickSort(arr, left, pivotIndex - 1)` and right part `QuickSort(arr, pivotIndex + 1, right)`.
- Time Complexity: Average $O(n log n)$; Worst-case $O(n^2)$ when pivot choices are poor (e.g., already sorted with naive pivot).
- Space Complexity: $O(log n)$ due to recursion.

## 6) Heap Sort (`HeapSort`)
- Comparison-based in-place sort using a max-heap.
- Code details (`HeapSort.cpp`):
  - Two phases:
    1. Build a max-heap: for `i` from `size/2 - 1` downto `0`, call `heapify(arr, size, i)` to ensure each subtree rooted at `i` satisfies parent >= children.
    2. Repeatedly extract max: for `i` from `size - 1` downto `1`, swap `arr.at(0)` (current max) with `arr.at(i)`, then `heapify(arr, i, 0)` to restore the heap property in the reduced heap.
  - `heapify(arr, size, i)`:
    - Computes children indices `left = 2*i + 1`, `right = 2*i + 2`.
    - Finds `largest` among `i`, `left`, and `right` within bounds.
    - If `largest != i`, swaps `arr.at(largest)` and `arr.at(i)` and recursively heapifies the affected subtree.
- Time Complexity: $O(n log n)$ (heap build is $O(n)$, each extract-max is $O(log n)$ repeated $n$ times).
- Space Complexity: $O(1)$ additional space (in-place); recursion depth for `heapify` is bounded by tree height $O(log n)$.

## Building & Running
Use `g++` to compile and run specific combinations. Example (as used during testing):

```bash
# Build and run MergeSort + Main
g++ Main.cpp MergeSort.cpp -o main && ./main
```

Adjust the compile command to include the files you want to test (e.g., add `bubbleSort.cpp`, `BinarySearchITR.cpp`, `BinarySearchREC.cpp`, etc.).