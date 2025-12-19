#pragma once
#include <iostream>

template <typename T>
class MyVector
{
private:
    T *arr;
    size_t capacity;
    size_t size;

    void reallocate(size_t new_capacity)
    {
        T *new_block = new T[new_capacity];

        if (new_capacity < size)
        {
            size = new_capacity;
        }

        for (int i = 0; i < size; i++)
        {
            new_block[i] = arr[i];
        }

        delete[] arr;

        capacity = new_capacity;
        arr = new_block;
    }

public:
    MyVector() : arr(new T[4]), capacity(4), size(0) {}

    ~MyVector()
    {
        delete[] arr;
    }

    MyVector(const MyVector &other)
    {
        capacity = other.capacity;
        size = other.size;
        arr = new T[capacity];

        for (size_t i = 0; i < size; i++)
        {
            arr[i] = other.arr[i];
        }
    }

    MyVector &operator=(const MyVector &other)
    {
        if (this != &other)
        {
            delete[] arr;

            capacity = other.capacity;
            size = other.size;
            arr = new T[capacity];

            for (size_t i = 0; i < size; i++)
            {
                arr[i] = other.arr[i];
            }
        }

        return *this;
    }

    MyVector(MyVector &&other) noexcept
    {
        arr = other.arr;
        size = other.size;
        capacity = other.capacity;

        other.arr = nullptr;
        other.size = 0;
        other.capacity = 0;
    }

    MyVector &operator=(MyVector &&other) noexcept
    {
        if (this != &other)
        {
            delete[] arr;

            other.arr = nullptr;
            other.size = 0;
            other.capacity = 0;
        }

        return *this;
    }

    T &operator[](size_t index)
    {
        if (index >= size)
            throw std::out_of_range("Index out of range");

        return arr[index];
    }

    const T &operator[](size_t index) const
    {
        if (index >= size)
            throw std::out_of_range("Index out of range");

        return arr[index];
    }

    size_t getSize() const
    {
        return size;
    }

    size_t getCapacity() const
    {
        return capacity;
    }

    void push_back(T &&value)
    {
        if (size == capacity)
        {
            size_t new_capacity = (capacity == 0) ? 4 : capacity * 2;
            reallocate(new_capacity);
        }

        arr[size] = std::move(value);
        size++;
    }

    void push_back(const T &value)
    {
        if (size == capacity)
        {
            size_t new_capacity = (capacity == 0) ? 4 : capacity * 2;
            reallocate(new_capacity);
        }

        arr[size] = value;
        size++;
    }

    void pop_back()
    {
        if (size == 0)
        {
            throw std::out_of_range("vector is already empty");
        }

        size--;
    }

    void remove(T value)
    {
        for (size_t i = 0; i < size; i++)
        {
            if (arr[i] == value)
            {
                removeAt(i);
                return;
            }
        }
    }

    bool removeAt(int index)
    {
        if (index < 0 || static_cast<size_t>(index) >= size)
            return false;

        for (size_t i = index; i < size - 1; i++)
        {
            arr[i] = std::move(arr[i + 1]);
        }

        size--;
        return true;
    }

    void clear()
    {
        size = 0;
    }

    void shrink_to_fit()
    {
        if (size == capacity)
            return;

        if (size == 0) {
            delete[] arr;
            arr = nullptr;
            capacity = 0;
            return;
        }

        reallocate(size);
    }

    void show()
    {
        std::cout << "[";

        for (size_t i = 0; i < size; i++)
        {
            std::cout << arr[i] << (i < size - 1 ? ", " : "");
        }

        std::cout << "]" << std::endl;
    }

    T *begin()
    {

        return arr;
    }

    T *end()
    {
        return arr + size;
    }
};