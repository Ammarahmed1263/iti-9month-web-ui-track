#include <iostream>
#include <vector>
#include <list>
#include "MapEntry.h"

template <typename keyType, typename valueType>
class HashTable
{
public:
    explicit HashTable(size_t size = 10) : tableSize(0), table(size) {}

    bool insert(const MapEntry<keyType, valueType> &item)
    {
        if (contains(item.getKey()))
        {
            return false;
        }

        if (getLoadFactor() > 0.75)
        {
            rehash();
        }

        int listIndex = hashFunction(item.getKey());
        table[listIndex].push_back(item);
        tableSize++;

        return true;
    }

    bool remove(const keyType &key)
    {
        if (!contains(key))
        {
            return false;
        }

        int listIndex = hashFunction(key);
        auto &Bucket = table[listIndex];

        for (auto it = Bucket.begin(); it != Bucket.end(); it++)
        {
            if (it->getKey() == key)
            {
                Bucket.erase(it);
                tableSize--;
                return true;
            }
        }

        return false;
    }

    bool contains(const keyType &key) const
    {
        int listIndex = hashFunction(key);

        const auto &Bucket = table[listIndex];

        for (const auto &x : Bucket)
        {
            if (x.getKey() == key)
            {
                return true;
            }
        }

        return false;
    }

    valueType lookup(const keyType &key) const
    {
        int listIndex = hashFunction(key);

        const auto &Bucket = table[listIndex];

        for (const auto &x : Bucket)
        {
            if (x.getKey() == key)
            {
                return x.getValue();
            }
        }

        throw std::runtime_error("Key not found");
    }

    void makeEmpty()
    {
        for (auto &Bucket : table)
        {
            Bucket.clear();
        }
        tableSize = 0;
    }

    double getLoadFactor() const
    {
        return static_cast<double>(tableSize) / table.size();
    }

private:
    std::vector<std::list<MapEntry<keyType, valueType>>> table;
    size_t tableSize;

    int hashFunction(const keyType &key) const
    {
        std::hash<keyType> hashFunc;

        return hashFunc(key) % table.size();
    }

    void rehash()
    {
        std::vector<std::list<MapEntry<keyType, valueType>>> newTable(table.size() * 2);

        for (auto &Bucket : table)
        {
            for (const auto &entry : Bucket)
            {
                int newIndex = std::hash<keyType>{}(entry.getKey()) % newTable.size();
                newTable[newIndex].push_back(entry);
            }
        }

        table = std::move(newTable);
    }
};