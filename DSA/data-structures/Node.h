#pragma once
#include <string>
#include "Employee.h"

using namespace std;

class Node
{
public:
    Employee data;
    Node *next;
    Node *prev;

    Node(Employee val) : data(val), next(nullptr), prev(nullptr) {}
};