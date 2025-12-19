#include <iostream>
#include "MyVector.h"
#include "BinaryHeap.cpp"

using namespace std;
int main()
{
    try
    {
        std::cout << "--- TEST 1: Construction & Push Back ---" << std::endl;
        MyVector<int> v1;
        v1.push_back(10);
        v1.push_back(20);
        v1.push_back(30);
        v1.push_back(40);
        v1.push_back(50); // Triggers reallocation (4 -> 8)
        v1.show(); // Expected: [ 10, 20, 30, 40, 50 ] Cap: 8

        std::cout << "\n--- TEST 2: Access & Out of Range ---" << std::endl;
        std::cout << "Element at 2: " << v1[2] << std::endl;
        try
        {
            std::cout << v1[100] << std::endl; // Should throw
        }
        catch (const std::exception &e)
        {
            std::cout << "Caught expected error: " << e.what() << std::endl;
        }

        std::cout << "\n--- TEST 3: Pop Back & Edge Case ---" << std::endl;
        v1.pop_back();
        v1.show(); // Expected: 10, 20, 30, 40

        // Edge case: Pop until empty + 1
        MyVector<int> vEmpty;
        try
        {
            vEmpty.pop_back();
        }
        catch (const std::exception &e)
        {
            std::cout << "Caught expected error on empty pop: " << e.what() << std::endl;
        }

        std::cout << "\n--- TEST 4: Copy Semantics (Deep Copy) ---" << std::endl;
        MyVector<int> v2 = v1; // Copy Constructor
        v1[0] = 999;           // Modify v1
        std::cout << "v1 (Modified): ";
        v1.show();
        std::cout << "v2 (Original): ";
        v2.show(); // Should NOT have 999

        std::cout << "\n--- TEST 5: Move Semantics ---" << std::endl;
        MyVector<int> v3 = std::move(v1); // Move Constructor
        std::cout << "v3 (Stolen from v1): ";
        v3.show();
        std::cout << "v1 (After move): ";
        v1.show(); // Should be empty/null

        std::cout << "\n--- TEST 6: Remove & RemoveAt ---" << std::endl;
        // v3 is [999, 20, 30, 40]
        v3.removeAt(1); // Remove 20
        std::cout << "After removeAt(1): ";
        v3.show(); // [999, 30, 40]

        v3.remove(999); // Remove value 999
        std::cout << "After remove(999): ";
        v3.show(); // [30, 40]

        std::cout << "\n--- TEST 7: Shrink to Fit ---" << std::endl;
        v3.shrink_to_fit();
        std::cout << "After shrink: ";
        v3.show(); // Cap should equal Size (2)

        // Edge Case: Shrink empty vector
        v3.clear();
        v3.shrink_to_fit();
        std::cout << "Empty Shrink: ";
        v3.show(); // Cap should be 0

        std::cout << "\n--- TEST 8: Re-growing from Empty/Zero Capacity ---" << std::endl;
        v3.push_back(100); // Should handle capacity 0 -> 4
        v3.show();

        std::cout << "\n--- TEST 9: Iterator Functionality ---" << std::endl;
        for (int* it = v2.begin(); it != v2.end(); ++it) {
        std::cout << *it << " "; // Dereference pointer to get value
    }
    }
    catch (const std::exception &e)
    {
        std::cerr << "Unexpected Crash: " << e.what() << '\n';
    }

    try {
        std::cout << "=== TEST 1: Basic Push & Max-Heap Property ===\n";
        BinaryHeap<int> heap;
        
        // Push in random order
        heap.push(10);
        heap.push(50);
        heap.push(20);
        heap.push(60); 
        heap.push(40);

        // Max Heap Logic:
        // 60 should bubble to top.
        // Structure roughly: [60, 50, 20, 10, 40]
        std::cout << "Internal Array: ";
        heap.show(); 
        
        std::cout << "Top element is (Expect 60): " << heap.top() << "\n";

        if (heap.top() == 60) std::cout << "[PASS]\n";
        else std::cout << "[FAIL]\n";


        std::cout << "\n=== TEST 2: Pop (Heap Sort) ===\n";
        // If we pop repeatedly, numbers should come out: 60, 50, 40, 20, 10
        int expected[] = {60, 50, 40, 20, 10};
        bool pass = true;

        for (int val : expected) {
            if (heap.top() != val) {
                pass = false;
                std::cout << "Error: Expected " << val << " got " << heap.top() << "\n";
            }
            std::cout << "Popped: " << heap.top() << "\n";
            heap.pop();
        }
        
        if (pass && heap.isEmpty()) std::cout << "[PASS]\n";
        else std::cout << "[FAIL]\n";


        std::cout << "\n=== TEST 3: Edge Case - Pop Empty ===\n";
        try {
            heap.pop(); // Should throw
            std::cout << "[FAIL] Did not throw exception\n";
        } catch (const std::out_of_range& e) {
            std::cout << "[PASS] Caught expected error: " << e.what() << "\n";
        }


        std::cout << "\n=== TEST 4: Edge Case - Single Element ===\n";
        heap.push(999);
        std::cout << "Pushed 999. Top is: " << heap.top() << "\n";
        heap.pop();
        if (heap.isEmpty()) std::cout << "[PASS] Heap is empty after popping single element.\n";
        else std::cout << "[FAIL] Heap not empty.\n";


        std::cout << "\n=== TEST 5: Duplicates ===\n";
        heap.push(5);
        heap.push(5);
        heap.push(5);
        
        int count = 0;
        while (!heap.isEmpty()) {
            if (heap.top() == 5) count++;
            heap.pop();
        }
        
        if (count == 3) std::cout << "[PASS] Handled duplicates correctly.\n";
        else std::cout << "[FAIL] Lost duplicates.\n";

    } catch (const std::exception& e) {
        std::cerr << "CRITICAL FAILURE: " << e.what() << std::endl;
    }


    return 0;
}