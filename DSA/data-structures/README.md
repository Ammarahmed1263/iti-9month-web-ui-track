# Data Structures

This assignment demonstrates core data structures implemented in C++. Below is an explanation of how each data structure works based on the code in this repository.

## 1) Node (`Node.h`)
- The fundamental building block for all data structures in this repository.
- Structure:
  - `Employee data`: Stores employee information (id, name, salary).
  - `Node *next`: Pointer to the next node in the list.
  - `Node *prev`: Pointer to the previous node in the list (for doubly-linked structures).
- Constructor: `Node(Employee val)` initializes a node with given employee data and sets both pointers to `nullptr`.
- Space Complexity: $O(1)$ per node.

## 2) Employee (`Employee.h`)
- A simple struct representing employee data.
- Fields:
  - `int id`: Unique employee identifier.
  - `string name`: Employee name.
  - `double salary`: Employee salary.
- Used as the data type stored in all data structures.

## 3) Doubly Linked List (`DoublyLinkedList.h`)
A bidirectional linked list where each node has pointers to both next and previous nodes.

### Core Operations:

#### `append(const Employee &data)`
- Adds a new node at the end of the list.
- Logic:
  - Creates a new node with the given data.
  - If list is empty (`head == nullptr`), sets both `head` and `tail` to the new node.
  - Otherwise, links the new node after `tail`, updates `prev` pointer, and moves `tail` to the new node.
- Time Complexity: $O(1)$.

#### `remove(int id)`
- Removes the first node with matching employee ID.
- Logic:
  - Traverses the list from `head` searching for matching `id`.
  - Updates `prev->next` and `next->prev` pointers to bypass the node.
  - Handles special cases: removing head (update `head`), removing tail (update `tail`).
  - Deletes the node and returns `true`; returns `false` if not found.
- Time Complexity: $O(n)$ where $n$ is the number of nodes.

#### `searchNode(int id)`
- Searches for an employee by ID.
- Logic:
  - Traverses from `head` comparing each node's `data.id` with the target `id`.
  - Returns the `Employee` if found, or a default `Employee{-1, "Not Found", 0.0}` if not found.
- Time Complexity: $O(n)$.

#### `displayNode(int id)`
- Displays details of a specific employee by ID.
- Returns `true` if found and displayed, `false` otherwise.
- Time Complexity: $O(n)$.

#### `displayItems()`
- Prints all employees in the list from head to tail.
- Time Complexity: $O(n)$.

#### `countNodes()`
- Counts and returns the total number of nodes in the list.
- Time Complexity: $O(n)$.

#### `operator[](int index)`
- Provides array-like access to elements by index.
- Throws `out_of_range` exception if index is invalid.
- Time Complexity: $O(n)$.

### Special Members:
- **Copy Constructor & Assignment**: Deep copies all nodes from another list.
- **Move Constructor & Assignment**: Transfers ownership of nodes without copying (noexcept).
- **Destructor**: Traverses the list and deletes all nodes to prevent memory leaks.

### Complexity Summary:
- Space Complexity: $O(n)$ for $n$ nodes.
- Access: $O(n)$; Insertion at end: $O(1)$; Deletion: $O(n)$; Search: $O(n)$.

## 4) Sorted Doubly Linked List (`SortedDLL.cpp`)
An extension of the doubly linked list that maintains elements in sorted order by employee ID.

### Core Operation:

#### `insertNode(const Employee &data)`
- Inserts a new node while maintaining sorted order (ascending by ID).
- Logic:
  - If list is empty, creates the first node.
  - If new ID is smaller than or equal to `head->data.id`, inserts at the beginning.
  - Otherwise, traverses to find the correct position where `temp->data.id` becomes greater than or equal to the new ID.
  - Inserts before `temp` (middle insertion) or at the end if `temp == nullptr`.
  - Updates `next` and `prev` pointers of adjacent nodes accordingly.
- Time Complexity: $O(n)$ for finding insertion position.

#### `remove(int id)`
- Enhanced removal with early termination optimization.
- Logic:
  - Traverses the list in sorted order.
  - If `trav->data.id > id`, breaks early since remaining IDs will be larger (optimization for sorted list).
  - Removes node if found, updating pointers as in standard DLL removal.
- Time Complexity: $O(n)$ worst-case, but can terminate early in best case.

#### `searchNode(int id)`
- Optimized search leveraging sorted property.
- Logic:
  - Traverses from head; if `trav->data.id > id`, breaks early (target cannot exist further).
  - Returns employee if found, or `Employee{-1, "Not Found", 0.0}` otherwise.
- Time Complexity: $O(n)$ worst-case, but can terminate early.

### Inherited Methods:
- Inherits `displayNode()`, `displayItems()`, `countNodes()`, and `operator[]` from base implementation.
- Also includes copy/move constructors and assignment operators.

### Complexity Summary:
- Space Complexity: $O(n)$.
- Insertion: $O(n)$ (must find position); Search: $O(n)$ with early termination; Deletion: $O(n)$.

## 5) Stack (`Stack.cpp`)
A Last-In-First-Out (LIFO) data structure implemented by inheriting from `DLL`.

### Operations:

#### `push(const Employee &emp)`
- Adds an element to the top of the stack.
- Implementation: Calls `append(emp)` to add at the tail (which represents the top).
- Time Complexity: $O(1)$.

#### `pop()`
- Removes and returns the top element.
- Logic:
  - Throws `runtime_error("Stack Underflow")` if stack is empty.
  - Saves the tail's data, then adjusts pointers:
    - If only one element exists, sets `head` and `tail` to `nullptr`.
    - Otherwise, moves `tail` to `tail->prev` and sets `tail->next` to `nullptr`.
  - Deletes the old tail node and returns the saved data.
- Time Complexity: $O(1)$.

#### `Peak()`
- Returns the top element without removing it.
- Returns `Employee{-1, "Empty", 0.0}` if stack is empty.
- Time Complexity: $O(1)$.

#### `isEmpty()`
- Checks if the stack is empty by calling `countNodes() == 0`.
- Time Complexity: $O(n)$ (due to countNodes traversal).

### Complexity Summary:
- Space Complexity: $O(n)$.
- Push: $O(1)$; Pop: $O(1)$; Peak: $O(1)$; isEmpty: $O(n)$.

## 6) Queue (`Queue.cpp`)
A First-In-First-Out (FIFO) data structure implemented by inheriting from `DLL`.

### Operations:

#### `enqueue(const Employee &emp)`
- Adds an element to the rear of the queue.
- Implementation: Calls `append(emp)` to add at the tail.
- Time Complexity: $O(1)$.

#### `dequeue()`
- Removes and returns the front element.
- Logic:
  - Throws `runtime_error("Queue Underflow")` if queue is empty.
  - Saves the head's data, then adjusts pointers:
    - If only one element exists, sets `head` and `tail` to `nullptr`.
    - Otherwise, moves `head` to `head->next` and sets `head->prev` to `nullptr`.
  - Deletes the old head node and returns the saved data.
- Time Complexity: $O(1)$.

#### `Peek()`
- Returns the front element without removing it.
- Returns `Employee{-1, "Empty", 0.0}` if queue is empty.
- Time Complexity: $O(1)$.

#### `isEmpty()`
- Checks if the queue is empty by calling `countNodes() == 0`.
- Time Complexity: $O(n)$ (due to countNodes traversal).

### Complexity Summary:
- Space Complexity: $O(n)$.
- Enqueue: $O(1)$; Dequeue: $O(1)$; Peek: $O(1)$; isEmpty: $O(n)$.

## Building & Running
Use `g++` to compile and run. Example:

```bash
# Build and run with all data structures
g++ Main.cpp -o main && ./main
```

Note: The `Stack.cpp`, `Queue.cpp`, and `SortedDLL.cpp` are included in `Main.cpp` and contain class definitions (not just implementations), so they don't need to be compiled separately.
