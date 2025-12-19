#include <iostream>
#include "hashtable.h"
#include "graph.h"

using namespace std;

int main()
{
    HashTable<int, std::string> myMap(5);

    std::cout << "Adding items to the Hash Table..." << std::endl;

    // 1. Test Insertion
    myMap.insert(MapEntry<int, std::string>(1, "Alice"));
    myMap.insert(MapEntry<int, std::string>(2, "Bob"));
    myMap.insert(MapEntry<int, std::string>(3, "Charlie"));

    std::cout << "Current Load Factor: " << myMap.getLoadFactor() << std::endl;

    // 2. Trigger Rehash
    // Adding the 4th item to a size 5 table makes load 0.8 (> 0.7)
    myMap.insert(MapEntry<int, std::string>(4, "David"));
    myMap.insert(MapEntry<int, std::string>(5, "Eve"));

    std::cout << "Load Factor after rehash: " << myMap.getLoadFactor() << std::endl;

    // 3. Test Lookup
    try
    {
        std::cout << "Lookup ID 3: " << myMap.lookup(3) << std::endl;
        std::cout << "Lookup ID 5: " << myMap.lookup(5) << std::endl;
    }
    catch (const std::exception &e)
    {
        std::cerr << e.what() << std::endl;
    }

    // 4. Test Contains
    if (myMap.contains(2))
    {
        std::cout << "ID 2 exists in the table." << std::endl;
    }

    // 5. Test Removal
    std::cout << "Removing ID 2..." << std::endl;
    myMap.remove(2);

    if (!myMap.contains(2))
    {
        std::cout << "ID 2 successfully removed." << std::endl;
    }

    // 6. Test Duplicate Insertion
    if (!myMap.insert(MapEntry<int, std::string>(1, "Duplicate Alice")))
    {
        std::cout << "Correctly blocked duplicate key: 1" << std::endl;
    }

    Graph<std::string> travelGraph;

    // 1. Test isEmpty() initially
    std::cout << "--- Initial State ---" << std::endl;
    std::cout << "Is graph empty? " << (travelGraph.isEmpty() ? "Yes" : "No") << std::endl;

    // 2. Test addVertex()
    std::cout << "\n--- Adding Vertices ---" << std::endl;
    travelGraph.addVertex("Cairo");
    travelGraph.addVertex("Alexandria");
    travelGraph.addVertex("Giza");
    travelGraph.addVertex("Aswan");

    std::cout << "Is graph empty now? " << (travelGraph.isEmpty() ? "Yes" : "No") << std::endl;
    std::cout << "Index of Cairo: " << travelGraph.getIndex("Cairo") << std::endl;
    std::cout << "Index of Aswan: " << travelGraph.getIndex("Aswan") << std::endl;

    // 3. Test addEdge() and getEdgeWeight()
    std::cout << "\n--- Adding Edges ---" << std::endl;
    travelGraph.addEdge("Cairo", "Alexandria", 220); // Cairo -> Alex: 220km
    travelGraph.addEdge("Cairo", "Giza", 20);        // Cairo -> Giza: 20km
    travelGraph.addEdge("Giza", "Aswan", 850);       // Giza -> Aswan: 850km

    std::cout << "Weight Cairo -> Alex: " << travelGraph.getEdgeWeight("Cairo", "Alexandria") << std::endl;
    std::cout << "Weight Giza -> Aswan: " << travelGraph.getEdgeWeight("Giza", "Aswan") << std::endl;
    std::cout << "Weight Alex -> Aswan (no edge): " << travelGraph.getEdgeWeight("Alexandria", "Aswan") << std::endl;

    // 4. Test getAdjVertices()
    std::cout << "\n--- Testing Neighbors (getAdjVertices) ---" << std::endl;
    std::queue<std::string> neighbors;
    travelGraph.getAdjVertices("Cairo", neighbors);

    std::cout << "Neighbors of Cairo: ";
    while (!neighbors.empty())
    {
        std::cout << "[" << neighbors.front() << "] ";
        neighbors.pop();
    }
    std::cout << std::endl;

    // 5. Test Marking System
    std::cout << "\n--- Testing Marking System ---" << std::endl;
    std::cout << "Is Giza marked? " << (travelGraph.isMarked("Giza") ? "Yes" : "No") << std::endl;
    travelGraph.markVertex("Giza");
    std::cout << "After marking, is Giza marked? " << (travelGraph.isMarked("Giza") ? "Yes" : "No") << std::endl;

    travelGraph.clearMarks();
    std::cout << "After clearMarks(), is Giza marked? " << (travelGraph.isMarked("Giza") ? "Yes" : "No") << std::endl;

    // 6. Test makeEmpty()
    std::cout << "\n--- Resetting Graph ---" << std::endl;
    travelGraph.makeEmpty();
    std::cout << "After makeEmpty(), is graph empty? " << (travelGraph.isEmpty() ? "Yes" : "No") << std::endl;
    std::cout << "Index of Cairo (should be -1): " << travelGraph.getIndex("Cairo") << std::endl;

    Graph<std::string> g;

    // 1. Setup Vertices
    g.addVertex("A");
    g.addVertex("B");
    g.addVertex("C");
    g.addVertex("D");
    g.addVertex("E");
    g.addVertex("F");

    // 2. Setup Edges (Creating a path: A -> B -> D -> F)
    // We also add a "dead end": A -> C -> E
    g.addEdge("A", "B", 1);
    g.addEdge("B", "D", 1);
    g.addEdge("D", "F", 1);

    g.addEdge("A", "C", 1);
    g.addEdge("C", "E", 1);

    std::cout << "--- Graph Algorithm Testing ---" << std::endl;

    // 3. Test DFS
    std::cout << "\nTesting DFS (Searching for path from A to F):" << std::endl;
    g.DFS("A", "F");

    // 4. Test BFS
    std::cout << "\nTesting BFS (Searching for path from A to F):" << std::endl;
    g.BFS("A", "F");





    Graph<std::string> g2;

    g2.addVertex("A");
    g2.addVertex("B");
    g2.addVertex("C");
    g2.addVertex("D");
    g2.addVertex("E");
    g2.addVertex("F");
    g2.addVertex("G");

    // From Start (A)
    g2.addEdge("A", "C", 3);
    g2.addEdge("A", "F", 2);

    // From C
    g2.addEdge("C", "F", 2);
    g2.addEdge("C", "E", 1);
    g2.addEdge("C", "D", 4);

    // From F
    g2.addEdge("F", "E", 3);
    g2.addEdge("F", "B", 6);
    g2.addEdge("F", "G", 5);

    // From D
    g2.addEdge("D", "B", 1);

    // From E
    g2.addEdge("E", "B", 2);

    // From B (Outgoing)
    g2.addEdge("B", "G", 2);

    // 3. Test Dijkstra
    // Expectation: A -> C (3) -> E (1) -> B (2) = Total Cost 6
    std::cout << "\nTesting Dijkstra (Shortest path from A):" << std::endl;
    g2.dijkstra("A");

    return 0;
}