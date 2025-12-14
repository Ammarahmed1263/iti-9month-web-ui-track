#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>
#include "Node.h"
#include "Employee.h"

class BST
{
public:
    BST() : root(nullptr) {}

    BST(Employee val)
    {
        root = new Node(val);
    }

    // BST(Employee temp1, Employee temp2, Employee temp3, Employee temp4, Employee temp5, Employee temp6)
    // {
    //     root = new Node(temp2);
    //     root->left = new Node(temp1);
    //     root->right = new Node(temp4);
    //     root->right->left = new Node(temp3);
    //     root->right->right = new Node(temp5);
    // }

    void insert(Employee emp)
    {
        Node *newNode = new Node(emp);
        insertNode(root, nullptr, newNode);
        // insertNode(root, newNode);

        balanceTree();
    };

    void deleteNode(int id)
    {
        removeNode(root, id);
        balanceTree();
    };

    void printStats()
    {
        cout << "Nodes: " << countNodes(root)
             << " | Height: " << countLevels(root) << endl;
    }

    void displayAll()
    {
        traverse(root);
    }

    void balanceTree()
    {
        int nodes = countNodes(root);
        if (nodes < 3)
            return;

        int height = countLevels(root);

        int balanceFactor = (int)log2(nodes) + 2; // h(7) --> ideal 3 --> tolerate once then rebalance

        if (height > balanceFactor)
        {
            cout << ">> Tree Unbalanced! Rebuilding..." << endl;
            reBalance();
        }
    }

    void reBalance()
    {
        vector<Node *> temp;
        storeInOrder(root, temp);

        for (Node *n : temp)
        {
            n->left = n->right = nullptr;
        }

        root = buildTree(temp, 0, temp.size() - 1);
    }

    ~BST()
    {
        destroyTree(root);
    }

private:
    Node *root;

    void insertNode(Node *&node, Node *newNode)
    {
        if (!node)
        {
            node = newNode;
            return;
        }

        if (node->data.id < newNode->data.id)
            insertNode(node->right, newNode);
        else if (node->data.id > newNode->data.id)
            insertNode(node->left, newNode);
        else
            cout << "Duplicate ID " << newNode->data.id << "ignored." << endl;
    }

    void insertNode(Node *current, Node *parent, Node *newNode)
    {
        if (!root)
        {
            root = newNode;
            return;
        }

        if (!current)
        {
            if (parent->data.id < newNode->data.id)
                parent->right = newNode;
            else
                parent->left = newNode;
            return;
        }

        if (current->data.id < newNode->data.id)
            insertNode(current->right, current, newNode);
        else if (current->data.id > newNode->data.id)
            insertNode(current->left, current, newNode);
        else
        {
            cout << "Duplicate iD " << newNode->data.id << " ignored." << endl;
            delete newNode;
        }
    }

    int countNodes(Node *node)
    {
        if (!node)
            return 0;

        return 1 + countNodes(node->left) + countNodes(node->right);
    }

    int countLevels(Node *node)
    {
        if (!node)
            return 0;

        return 1 + max(countLevels(node->left), countLevels(node->right));
    }
    
    // successor is the smallest value in the right subtree
    Node *findSuccessor (Node *node) {
        while (node->left) node = node->left;

        return node;
    }

    Node *removeNode(Node *& current, int id) {
        if (!current) return nullptr;

        if (id < current->data.id) {
            current->left = removeNode(current->left, id);
        } else if (id > current->data.id) {
            current->right = removeNode(current->right, id);
        } else {
            if (!current->left && !current->right) {
                delete current;
                return nullptr;
            } else if (!current->left) {
                Node *temp = current->right;
                delete current;
                return temp;
            } else if (!current->right) {
                Node *temp = current->left;
                delete current;
                return temp;
            } else {
                Node *successor = findSuccessor(current->right);

                current->data = successor->data;

                current->right = removeNode(current->right, successor->data.id);
            }
        }
        return current;
    }

    void destroyTree(Node *node)
    { // post-order deletion
        if (node)
        {
            destroyTree(node->left);
            destroyTree(node->right);
            delete node;
        }
    }

    void traverse(Node *node) // In-Order Traversal
    {
        if (node)
        {
            traverse(node->left);
            std::cout << "ID: " << node->data.id << ", Name: " << node->data.name << ", Salary: " << node->data.salary << std::endl;
            traverse(node->right);
        }
    }

    void storeInOrder(Node *node, vector<Node *> &nodes)
    {
        if (!node)
            return;
        storeInOrder(node->left, nodes);
        nodes.push_back(node);
        storeInOrder(node->right, nodes);
    }

    Node *buildTree(vector<Node *> nodes, int start, int end)
    { // 1 2 3 4 5
        if (start > end)
            return nullptr;

        int mid = start + (end - start) / 2;
        Node *node = nodes[mid];

        node->left = buildTree(nodes, start, mid - 1);
        node->right = buildTree(nodes, mid + 1, end);

        return node;
    }
};