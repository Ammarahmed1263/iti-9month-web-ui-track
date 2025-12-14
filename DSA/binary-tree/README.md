# Binary Search Tree

This assignment demonstrates a Binary Search Tree (BST) data structure with self-balancing capabilities implemented in C++. Below is an explanation of how the BST works based on the code in this repository.

## 1) Node (`Node.h`)
- The building block for the Binary Search Tree.
- Structure:
  - `Employee data`: Stores employee information (id, name, salary).
  - `Node *left`: Pointer to the left child (smaller values).
  - `Node *right`: Pointer to the right child (larger values).
- Constructor: `Node(Employee val)` initializes a node with given employee data and sets both child pointers to `nullptr`.
- Space Complexity: $O(1)$ per node.

## 2) Employee (`Employee.h`)
- A simple struct representing employee data.
- Fields:
  - `int id`: Unique employee identifier (used as the BST key).
  - `string name`: Employee name.
  - `double salary`: Employee salary.
- The `id` field determines the ordering in the BST.

## 3) Binary Search Tree (`BST.cpp`)
A binary tree where each node's left subtree contains only values less than the node's value, and the right subtree contains only values greater than the node's value. This implementation includes automatic self-balancing.

### Core Operations:

#### `insert(Employee emp)`
- Public method to insert a new employee into the BST.
- Logic:
  - Creates a new node with the given employee data.
  - Calls private `insertNode(root, nullptr, newNode)` to recursively find the correct position.
  - After insertion, calls `balanceTree()` to maintain optimal tree height.
- Duplicate IDs are rejected with a message: "Duplicate ID ignored."
- Time Complexity: $O(h)$ where $h$ is the tree height; $O(log n)$ on average for balanced tree.

#### `insertNode(Node *current, Node *parent, Node *newNode)` (Private)
- Recursive insertion helper that maintains BST property.
- Logic:
  - Base case: If tree is empty (`!root`), set `root` to `newNode`.
  - If `current` is `nullptr`, attach `newNode` to appropriate side of `parent`:
    - If `parent->data.id < newNode->data.id`, attach to `parent->right`.
    - Otherwise, attach to `parent->left`.
  - Recursive case:
    - If `current->data.id < newNode->data.id`, recurse right.
    - If `current->data.id > newNode->data.id`, recurse left.
    - If equal, reject duplicate and delete `newNode`.
- Time Complexity: $O(h)$.

#### `deleteNode(int id)`
- Public method to remove a node by employee ID.
- Logic:
  - Calls private `removeNode(root, id)` to perform the deletion.
  - After deletion, calls `balanceTree()` to maintain tree balance.
- Time Complexity: $O(h)$ for deletion plus potential $O(n)$ for rebalancing.

#### `removeNode(Node *&current, int id)` (Private)
- Recursive deletion handling three cases:
  
  **Case 1: Leaf Node (No Children)**
  - Simply delete the node and return `nullptr`.
  
  **Case 2: Node with One Child**
  - Replace the node with its only child (left or right).
  - Delete the node and return the child pointer.
  
  **Case 3: Node with Two Children**
  - Find the in-order successor (smallest value in right subtree) using `findSuccessor(current->right)`.
  - Copy successor's data to current node.
  - Recursively delete the successor from the right subtree.
  
- Search logic:
  - If `id < current->data.id`, recurse left: `current->left = removeNode(current->left, id)`.
  - If `id > current->data.id`, recurse right: `current->right = removeNode(current->right, id)`.
  - If equal, perform deletion based on the three cases above.
- Time Complexity: $O(h)$.

#### `findSuccessor(Node *node)` (Private)
- Finds the in-order successor (smallest node in a subtree).
- Logic:
  - Traverse left children until reaching the leftmost node: `while (node->left) node = node->left`.
  - Returns the leftmost node.
- Used in deletion of nodes with two children.
- Time Complexity: $O(h)$.

#### `traverse(Node *node)` (Private)
- Performs in-order traversal (Left → Root → Right).
- Logic:
  - Recursively traverse left subtree.
  - Print current node's employee data.
  - Recursively traverse right subtree.
- Result: Displays all employees in ascending order by ID.
- Time Complexity: $O(n)$.

#### `displayAll()`
- Public method to display all employees in sorted order.
- Calls `traverse(root)` to perform in-order traversal.
- Time Complexity: $O(n)$.

#### `countNodes(Node *node)` (Private)
- Recursively counts total nodes in the tree.
- Logic:
  - Base case: If `node` is `nullptr`, return `0`.
  - Recursive case: Return `1 + countNodes(node->left) + countNodes(node->right)`.
- Time Complexity: $O(n)$.

#### `countLevels(Node *node)` (Private)
- Recursively calculates the height (number of levels) of the tree.
- Logic:
  - Base case: If `node` is `nullptr`, return `0`.
  - Recursive case: Return `1 + max(countLevels(node->left), countLevels(node->right))`.
- Time Complexity: $O(n)$.

#### `printStats()`
- Displays tree statistics: total nodes and height.
- Calls `countNodes(root)` and `countLevels(root)`.
- Time Complexity: $O(n)$.

### Self-Balancing Mechanism:

#### `balanceTree()`
- Checks if the tree needs rebalancing after insertions or deletions.
- Logic:
  - Skips if tree has fewer than 3 nodes.
  - Calculates current height: `height = countLevels(root)`.
  - Calculates ideal balance factor: `balanceFactor = (int)log2(nodes) + 2`.
    - This allows the tree to be one level taller than the theoretical minimum height.
  - If `height > balanceFactor`, triggers rebalancing with message: ">> Tree Unbalanced! Rebuilding..."
  - Calls `reBalance()` to rebuild the tree.
- Time Complexity: $O(n)$ when rebalancing is triggered.

#### `reBalance()` (Private)
- Rebuilds the entire tree to achieve optimal balance.
- Logic:
  1. Create a vector to store nodes in sorted order.
  2. Call `storeInOrder(root, temp)` to populate the vector with in-order traversal.
  3. Clear all node pointers: `n->left = n->right = nullptr` for each node.
  4. Call `buildTree(temp, 0, temp.size() - 1)` to construct a balanced tree from sorted array.
  5. Set `root` to the newly built tree.
- Time Complexity: $O(n)$.

#### `storeInOrder(Node *node, vector<Node*> &nodes)` (Private)
- Stores all nodes in a vector using in-order traversal.
- Logic:
  - Recursively traverse left subtree.
  - Add current node to vector: `nodes.push_back(node)`.
  - Recursively traverse right subtree.
- Result: Vector contains nodes sorted by ID.
- Time Complexity: $O(n)$.

#### `buildTree(vector<Node*> nodes, int start, int end)` (Private)
- Recursively builds a balanced BST from a sorted array of nodes.
- Logic:
  - Base case: If `start > end`, return `nullptr`.
  - Find middle index: `mid = start + (end - start) / 2`.
  - Use middle node as root of this subtree.
  - Recursively build left subtree: `node->left = buildTree(nodes, start, mid - 1)`.
  - Recursively build right subtree: `node->right = buildTree(nodes, mid + 1, end)`.
  - Return the root node.
- This creates a perfectly balanced tree where height = $⌊log_2(n)⌋ + 1$.
- Time Complexity: $O(n)$.

#### `destroyTree(Node *node)` (Private)
- Post-order traversal to safely delete all nodes.
- Logic:
  - Recursively delete left subtree.
  - Recursively delete right subtree.
  - Delete current node.
- Called by destructor to prevent memory leaks.
- Time Complexity: $O(n)$.

### Complexity Summary:
- **Space Complexity**: $O(n)$ for storing $n$ nodes.
- **Insertion**: $O(log n)$ average (balanced), $O(n)$ worst-case (unbalanced before rebalancing).
- **Deletion**: $O(log n)$ average (balanced), $O(n)$ worst-case.
- **Search/Traversal**: $O(log n)$ for search, $O(n)$ for full traversal.
- **Rebalancing**: $O(n)$ when triggered (occurs automatically to maintain efficiency).

### BST Properties:
- **Left Subtree**: All nodes have values less than parent.
- **Right Subtree**: All nodes have values greater than parent.
- **In-Order Traversal**: Produces sorted output.
- **Auto-Balancing**: Maintains near-optimal height to ensure $O(log n)$ operations.
- **Duplicate Handling**: Rejects duplicate IDs to maintain unique keys.

## Building & Running
Use `g++` to compile and run. Example:

```bash
# Build and run the BST with Main
g++ Main.cpp -o main && ./main
```

The `Main.cpp` includes `BST.cpp` and demonstrates various test cases including insertion, deletion (leaf nodes, nodes with one child, nodes with two children, root deletion), and automatic rebalancing.
