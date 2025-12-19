#include <iostream>
#include "MyVector.h"

template <typename T>
class BinaryHeap
{
private:
    MyVector<T> arr;

    void heapify(size_t index)
    {
        size_t largest = index;
        size_t leftChildIndex = getLeftChild(index);
        size_t rightChildIndex = getRightChild(index);

        if (arr.getSize() > leftChildIndex && arr[leftChildIndex] > arr[largest])
            largest = leftChildIndex;

        if (arr.getSize() > rightChildIndex && arr[rightChildIndex] > arr[largest])
            largest = rightChildIndex;

        if (largest != index)
        {
            std::swap(arr[index], arr[largest]);
            heapify(largest);
        }
    }

    void percolateUp(size_t index)
    {

        while (index > 0)
        {
            size_t parentIndex = getParent(index);

            if (arr[parentIndex] < arr[index])
            {
                std::swap(arr[parentIndex], arr[index]);
                index = parentIndex;
            }
            else
            {
                break;
            }
        }
    }

    size_t getParent(size_t index) const
    {
        return (index - 1) / 2;
    }

    size_t getLeftChild(size_t index) const
    {
        return 2 * index + 1;
    }

    size_t getRightChild(size_t index) const
    {
        return 2 * index + 2;
    }

public:
    T &operator[](size_t index)
    {
        return arr[index];
    }

    const T &operator[](size_t index) const
    {
        return arr[index];
    }

    void push(const T &value)
    {
        arr.push_back(value);

        percolateUp(arr.getSize() - 1);
    }

    void pop()
    {
        if (isEmpty())
        {
            throw std::out_of_range("Heap is empty");
        }

        size_t lastIndex = arr.getSize() - 1;
        std::swap(arr[lastIndex], arr[0]);

        arr.pop_back();

        if (!isEmpty())
        {
            heapify(0);
        }
    }

    bool isEmpty() const
    {
        return arr.getSize() == 0;
    }

    size_t getSize() const
    {
        return arr.getSize();
    }

    const T &top() const
    {
        if (isEmpty())
            throw std::out_of_range("Heap is empty");

        return arr[0];
    }

    void show()
    {
        arr.show();
    }
};