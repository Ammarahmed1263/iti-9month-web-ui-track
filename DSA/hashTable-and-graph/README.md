# Hash Table and Graph Data Structures

This folder contains implementations of hash tables and graph data structures in C++. The files are organized to show the dependency hierarchy: MapEntry serves as the foundation for the HashTable, while Graph is an independent data structure.

## File Structure

### 1. MapEntry.h
A simple template class that represents a key-value pair used in hash table operations.

**Key Components:**
- `key`: The unique identifier (generic type `K`)
- `value`: The associated value (generic type `V`)

**Methods:**
- `MapEntry(const K &k, const V &v)`: Constructor to create a key-value pair
- `getKey()`: Returns the key
- `getValue()`: Returns the value
- `setValue(const V &v)`: Updates the value

**Space Complexity:** $O(1)$

**Use Case:** Foundation for storing key-value pairs in the HashTable.

---

### 2. HashTable.h
A generic hash table implementation using separate chaining (linked lists) for collision resolution.

**Key Components:**
- `table`: A vector of lists, where each list contains `MapEntry` objects
- `tableSize`: Current number of entries
- `hashFunction()`: Computes the hash index for a given key

**Core Operations:**

#### `insert(const MapEntry<keyType, valueType> &item)`
- Adds a new key-value pair to the hash table
- Automatically rehashes when load factor exceeds 0.75
- Returns `true` on success, `false` if key already exists
- **Time Complexity:** $O(1)$ average case

#### `remove(const keyType &key)`
- Removes an entry by key
- Returns `true` on success, `false` if key not found
- **Time Complexity:** $O(1)$ average case

#### `contains(const keyType &key)`
- Checks if a key exists in the table
- Returns `true` if found, `false` otherwise
- **Time Complexity:** $O(1)$ average case

#### `lookup(const keyType &key)`
- Retrieves the value associated with a key
- Throws `std::runtime_error` if key not found
- **Time Complexity:** $O(1)$ average case

#### `makeEmpty()`
- Clears all entries from the hash table
- **Time Complexity:** $O(n)$

#### `getLoadFactor()`
- Returns the current load factor (entries / table size)
- Triggers rehashing when it exceeds 0.75
- **Time Complexity:** $O(1)$

**Private Methods:**
- `hashFunction()`: Uses `std::hash` to compute index
- `rehash()`: Doubles the table size and redistributes entries

**Space Complexity:** $O(n)$ where $n$ is the number of entries

**Use Case:** Fast key-value storage and retrieval with average $O(1)$ operations.

---

### 3. Graph.h
A weighted, directed graph implementation using an adjacency matrix representation.

**Key Components:**
- `vertexLabels`: Array storing vertex values
- `adjMatrix`: 2D array storing edge weights
- `visitMarks`: Boolean array for marking visited vertices during traversals
- `vertexCount`: Current number of vertices
- `MAX_VERTICES`: Maximum capacity (50 vertices)

**Core Operations:**

#### Vertex Management:
- `addVertex(const VertexType &vertex)`: Adds a new vertex
- `getIndex(const VertexType &vertex)`: Returns the index of a vertex
- `isEmpty()` / `isFull()`: Check graph state
- **Time Complexity:** $O(n)$ for getIndex, $O(n)$ for addVertex

#### Edge Management:
- `addEdge(VertexType from, VertexType to, int weight)`: Adds a weighted edge
- `getEdgeWeight(VertexType from, VertexType to)`: Returns edge weight
- `getAdjVertices(VertexType vertex, queue &neighbors)`: Gets all adjacent vertices
- **Time Complexity:** $O(1)$ for addEdge and getEdgeWeight

#### Marking:
- `markVertex()` / `unmarkVertex()` / `isMarked()`: Manage vertex visit status for traversals
- `clearMarks()`: Reset all marks
- **Time Complexity:** $O(1)$

#### Graph Traversals:

**DFS (Depth-First Search)**
- `DFS(const VertexType &start, const VertexType &end)`
- Explores vertices using a stack
- Visits vertices in depth-first order
- Determines if a path exists from start to end vertex
- **Time Complexity:** $O(V + E)$ where $V$ is vertices and $E$ is edges

**BFS (Breadth-First Search)**
- `BFS(const VertexType &start, const VertexType &end)`
- Explores vertices using a queue
- Visits vertices level-by-level
- Determines if a path exists from start to end vertex
- **Time Complexity:** $O(V + E)$

**Dijkstra's Algorithm**
- `dijkstra(const VertexType &start)`
- Finds shortest paths from a start vertex to all other vertices
- Uses a priority queue for efficient selection of minimum distance vertex
- Outputs shortest distances from start vertex
- **Time Complexity:** $O((V + E) \log V)$ with priority queue

#### Utility:
- `makeEmpty()`: Clears the graph
- **Time Complexity:** $O(V^2)$ due to matrix initialization

**Space Complexity:** $O(V^2)$ for the adjacency matrix

**Use Cases:** 
- Finding paths between vertices (DFS/BFS)
- Computing shortest paths (Dijkstra's)
- Network analysis, route planning, and connected component analysis

---

## Building & Running

To compile and test these data structures:

```bash
g++ main.cpp -o main
./main
```

Ensure `main.cpp` includes the necessary header files and demonstrates the usage of MapEntry, HashTable, and Graph classes.

## Complexity Summary

| Data Structure | Insert | Search | Delete | Space |
|---|---|---|---|---|
| **HashTable** | $O(1)$ avg | $O(1)$ avg | $O(1)$ avg | $O(n)$ |
| **Graph (DFS)** | - | $O(V+E)$ | - | $O(V^2)$ |
| **Graph (BFS)** | - | $O(V+E)$ | - | $O(V^2)$ |
| **Graph (Dijkstra)** | - | $O((V+E)\log V)$ | - | $O(V^2)$ |
