#include <iostream>
#include "DoublyLinkedList.h"
#include "Node.h"
#include "Employee.h"
#include "Stack.cpp"
#include "Queue.cpp"
#include "SortedDLL.cpp"

using namespace std;

int main()
{
    DLL list = {Employee{5, "Mohamed", 1400}};
    DLL list2 = list; // copy ctr

    list2.displayItems();
    cout << "--------------------------------" << endl;

    DLL list3{Employee{1, "Ali", 8000}};

    cout << "number of nodes: " << list3.countNodes() << endl;
    list3.append(Employee{4, "kamal", 4000});
    list3.append(Employee{12, "Alaa", 60000});
    cout << "remove state: " << list3.remove(4) << endl;
    cout << "number of nodes: " << list3.countNodes();

    list3.displayItems();
    cout << "name: " << list3.searchNode(2).name << endl;
    cout << "name: " << list3.searchNode(4).name << endl;
    cout << "name: " << list3.searchNode(1).name << endl;
    int nodeFound = list3.displayNode(4);
    cout << "node found: " << nodeFound << endl;
    cout << "item here: " << list3[0].name << endl;

    cout << "--------------------------------" << endl;
    list2 = list3; // copy assignment
    list3.displayItems();

    Stack myStack;
    myStack.push({101, "Alice", 5000});
    myStack.push({102, "Bob", 6000});

    Employee popped = myStack.pop();
    cout << "Popped: " << popped.name << endl;

    Queue myQueue;
    myQueue.enqueue({201, "Charlie", 7000});
    myQueue.enqueue({202, "Diana", 8000});

    Employee dequeued = myQueue.dequeue();
    cout << "Dequeued: " << dequeued.name << endl;

    SortedDLL sorted;
    sorted.insertNode(Employee{5, "Zyad", 2000});
    sorted.insertNode(Employee{1, "Alaa", 10000});
    sorted.insertNode(Employee{3, "Belal", 7000});
    sorted.remove(3);
    sorted.displayItems();

    return 0;
}