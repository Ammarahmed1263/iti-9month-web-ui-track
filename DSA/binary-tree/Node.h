#pragma once
#include <string>
#include "Employee.h"

using namespace std;

class Node
{
public:
    Employee data;
    Node *left;
    Node *right;

    Node(Employee val) : data(val), left(nullptr), right(nullptr) {}
};