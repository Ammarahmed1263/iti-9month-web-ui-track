template <typename K, typename V>
class MapEntry {
private:
    K key;
    V value;
public:
    MapEntry(const K &k, const V &v) : key(k), value(v) {}

    K getKey() const {
        return key;
    }

    V getValue() const {
        return value;
    }

    void setValue(const V &v) {
        value = v;
    }
};