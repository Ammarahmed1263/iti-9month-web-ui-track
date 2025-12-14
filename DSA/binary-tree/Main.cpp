#include <iostream>
#include <vector>
#include "BST.cpp"
#include "Employee.h"

using namespace std;
int main() {
    BST tree;
    
    // ==========================================
    // PHASE 1: INSERTION TESTS
    // ==========================================
    cout << "\n=== PHASE 1: BUILDING THE TREE ===" << endl;
    
    // We will build a perfect 3-level tree to start
    //        50
    //      /    \
    //    30      70
    //   /  \    /  \
    //  20  40  60  80

    cout << "1. Inserting 50, 30, 70, 20, 40, 60, 80..." << endl;
    tree.insert(Employee{50, "Root", 100});
    tree.insert(Employee{30, "L", 100});
    tree.insert(Employee{70, "R", 100});
    tree.insert(Employee{20, "LL", 100});
    tree.insert(Employee{40, "LR", 100});
    tree.insert(Employee{60, "RL", 100});
    tree.insert(Employee{80, "RR", 100});
    
    tree.displayAll();
    tree.printStats(); // Expected: Nodes: 7 | Height: 3

    // TEST: DUPLICATE HANDLING
    cout << "\n2. Testing Duplicate Insert (Inserting 50 again)..." << endl;
    tree.insert(Employee{50, "Duplicate", 0}); // Should print "Duplicate ID ignored"
    
    // ==========================================
    // PHASE 2: DELETION CASES
    // ==========================================
    cout << "\n=== PHASE 2: DELETION CASES ===" << endl;

    // CASE 1: DELETING A LEAF NODE (No Children)
    // Target: 20 (Bottom Left)
    //        50
    //      /    \
    //    30      70
    //      \    /  \
    //      40  60  80
    cout << "\n[Case 1] Deleting Leaf Node (ID: 20)..." << endl;
    tree.deleteNode(20); 
    tree.displayAll();
    // Verification: 20 should be gone. 30's left child is now null.

    // CASE 2: DELETING A NODE WITH ONE CHILD
    // First, let's create a "One Child" scenario.
    // Insert 35. It will go to the left of 40.
    // Structure at 30:  30 -> right is 40 -> left is 35.
    cout << "\n[Setup] Inserting 35 to create a 'One Child' scenario..." << endl;
    tree.insert(Employee{35, "Temp", 100});
    
    // Now delete 40. It has one child (35).
    // Expected: 30 should now point directly to 35.
    cout << "[Case 2] Deleting Node with One Child (ID: 40)..." << endl;
    tree.deleteNode(40);
    tree.displayAll();
    // Verification: 40 gone. 35 remains.

    // CASE 3: DELETING A NODE WITH TWO CHILDREN
    // Target: 70 (Has children 60 and 80)
    // Logic: Should replace 70 with Successor (smallest in right subtree -> 80)
    //        (Wait, 80 is the successor of 70? No, 70->right is 80. 
    //         80 has no left child, so 80 is the successor).
    // Let's make it more interesting. Insert 65 so 70 has a real left-most successor.
    cout << "\n[Setup] Inserting 65..." << endl;
    tree.insert(Employee{65, "Succ", 100});
    // Subtree 70: Left=60, Right=80. 60 has Right=65? No.
    // 60 < 65 < 70. 
    // Insert 65: 50->R(70)->L(60)->R(65).
    
    // Delete 70. Successor logic:
    // 1. Go Right to 80.
    // 2. Go Left... 80 has no left. So 80 is successor.
    cout << "[Case 3] Deleting Node with Two Children (ID: 70)..." << endl;
    tree.deleteNode(70);
    tree.displayAll();
    // Verification: 70 is gone. 80 should be the new parent of 60.

    // CASE 4: DELETING THE ROOT
    // Current Root: 50.
    // It has two children (30 and 80).
    cout << "\n[Case 4] Deleting The Root (ID: 50)..." << endl;
    tree.deleteNode(50);
    tree.displayAll();
    // Verification: 50 is gone. The new root should be the successor of 50.
    // (Likely 60 or 50's immediate right child depending on current shape).

    // ==========================================
    // PHASE 3: REBALANCING TEST
    // ==========================================
    cout << "\n=== PHASE 3: FORCING IMBALANCE ===" << endl;
    cout << "Current Tree Stats: "; 
    tree.printStats();

    cout << "Inserting sorted sequence to force skew: 200, 210, 220, 230..." << endl;
    tree.insert(Employee{200, "A", 1}); 
    tree.insert(Employee{210, "B", 1});
    tree.insert(Employee{220, "C", 1});
    tree.insert(Employee{230, "D", 1});
    
    cout << "Final Tree Stats (Should be balanced automatically):" << endl;
    tree.printStats();
    
    return 0;
}