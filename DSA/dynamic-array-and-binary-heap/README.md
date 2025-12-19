# Dynamic Array and Binary Heap Data Structures

This folder contains implementations of a dynamic array (vector) and a binary heap data structure in C++. The files demonstrate custom implementations of essential data structures with automatic resizing and heap operations.

## File Structure

### 1. MyVector.h
A custom implementation of a dynamic array (similar to `std::vector`) with automatic capacity management.

**Key Components:**
- `data`: Dynamically allocated array to store elements
- `size`: Current number of elements in the vector
- `capacity`: Total allocated capacity

**Core Operations:**

#### `MyVector()`
- Default constructor initializing an empty vector
- **Time Complexity:** $O(1)$
- **Space Complexity:** $O(1)$

#### `push_back(const T &value)`
- Adds an element to the end of the vector
- Automatically doubles capacity when full
- **Time Complexity:** $O(1)$ amortized (due to resizing)
- **Space Complexity:** $O(n)$

#### `pop_back()`
- Removes the last element from the vector
- Throws exception if vector is empty
- **Time Complexity:** $O(1)$

#### `at(int index)`
- Accesses element at specified index
- Throws `std::out_of_range` if index is invalid
- **Time Complexity:** $O(1)$

#### `operator[](int index)`
- Direct access to element at index (no bounds checking)
- **Time Complexity:** $O(1)$

#### `getSize()` / `getCapacity()`
- Returns current size or capacity
- **Time Complexity:** $O(1)$

#### `isEmpty()`
- Checks if the vector contains no elements
- **Time Complexity:** $O(1)$

#### `clear()`
- Removes all elements from the vector
- **Time Complexity:** $O(1)$

#### `resize(int newCapacity)`
- Changes the capacity of the vector
- Copies existing elements to new allocation
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**Space Complexity:** $O(n)$ where $n$ is the capacity

**Use Case:** Dynamic array with automatic memory management, ideal for storing collections of elements with unknown size.

---

### 2. BinaryHeap.cpp
A max-heap implementation using an array-based approach with standard heap operations.

**Key Components:**
- `heap`: Vector to store heap elements
- Parent-child relationships using index calculations:
  - Parent: `(i - 1) / 2`
  - Left child: `2 * i + 1`
  - Right child: `2 * i + 2`

**Core Operations:**

#### `push(const T &value)`
- Adds a new element to the heap
- Maintains heap property by bubbling up (percolate up)
- **Time Complexity:** $O(\log n)$
- **Space Complexity:** $O(1)$

**Process:**
1. Add element at the end
2. Compare with parent and swap if parent is smaller
3. Repeat until heap property is satisfied

#### `pop()`
- Removes the maximum element (root)
- Reorganizes heap by bubbling down (heapify down)
- Throws exception if heap is empty
- **Time Complexity:** $O(\log n)$

**Process:**
1. Swap root with last element
2. Remove last element
3. Heapify down from root to restore heap property

#### `top()`
- Returns the maximum element without removing it
- Throws exception if heap is empty
- **Time Complexity:** $O(1)$

#### `percolateUp(size_t index)`
- Restores heap property by moving element up
- Called after insertion
- Swaps with parent if current element is larger
- **Time Complexity:** $O(\log n)$

#### `heapify(size_t index)`
- Restores heap property by moving element down
- Called after extraction
- Swaps with largest child if necessary
- **Time Complexity:** $O(\log n)$

#### `isEmpty()`
- Checks if heap contains no elements
- **Time Complexity:** $O(1)$

#### `getSize()`
- Returns the number of elements in the heap
- **Time Complexity:** $O(1)$

#### `show()`
- Displays all elements in the heap
- **Time Complexity:** $O(n)$

**Space Complexity:** $O(n)$ where $n$ is the number of elements

**Use Cases:**
- Max-priority queue implementation
- Finding maximum element efficiently
- Heap sort algorithm (descending order)
- Job scheduling (highest priority first)

---

### 3. Main.cpp
Driver program demonstrating the usage of both MyVector and BinaryHeap data structures.

**Demonstrates:**
- Creating and populating a custom vector
- Testing vector operations (push, pop, access, resize)
- Creating a max binary heap
- Inserting elements into the heap
- Extracting maximum elements
- Heap property verification

---

## Building & Running

To compile and test these data structures:

```bash
g++ BinaryHeap.cpp Main.cpp -o main
./main
```

Or using a single command:

```bash
g++ -std=c++11 BinaryHeap.cpp Main.cpp -o main && ./main
```

---

## Complexity Summary

| Data Structure | Operation | Time Complexity | Space Complexity |
|---|---|---|---|
| **MyVector** | Access (`at`, `[]`) | $O(1)$ | $O(n)$ |
| **MyVector** | Insert (`push_back`) | $O(1)$ amortized | $O(n)$ |
| **MyVector** | Remove (`pop_back`) | $O(1)$ | $O(n)$ |
| **MyVector** | Resize | $O(n)$ | $O(n)$ |
| **BinaryHeap** | Insert (`push`) | $O(\log n)$ | $O(n)$ |
| **BinaryHeap** | Extract Max (`pop`) | $O(\log n)$ | $O(n)$ |
| **BinaryHeap** | Get Max (`top`) | $O(1)$ | $O(n)$ |
| **BinaryHeap** | Heapify / Percolate | $O(\log n)$ | $O(n)$ |

---

## Key Concepts

### Dynamic Array (MyVector)
- **Amortized Analysis:** Although resizing takes $O(n)$ time, it happens infrequently enough that the average cost per insertion is $O(1)$
- **Growth Strategy:** Doubling capacity ensures exponential growth, minimizing the number of resize operations
- **Memory Management:** Proper use of dynamic allocation and deallocation prevents memory leaks

### Binary Heap
- **Complete Binary Tree:** All levels are filled except possibly the last, which is filled from left to right
- **Heap Property (Max-Heap):** Every parent node is greater than or equal to its children, ensuring the maximum element is always at the root
- **Array Representation:** Efficient storage without explicit pointers, using index arithmetic for navigation (parent: `(i-1)/2`, left: `2i+1`, right: `2i+2`)
- **Heapify Operations:** Maintain heap invariant after insertions and deletions by percolating up or down
