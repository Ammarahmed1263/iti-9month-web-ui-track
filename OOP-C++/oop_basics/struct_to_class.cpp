#include <iostream>

using namespace std;

struct Animal {
    string name;
    int age;

    void makeSound() {
        cout << "Animal " << name << " makes a sound!" << endl;
    }
};

class AnimalClass {
    public:
        string name;
        int age;

        void makeSound() {
            cout << "Animal " << name << " makes a sound!" << endl;
        }
};

int main() {
    Animal dog;
    dog.name = "Buddy";
    dog.age = 3;
    dog.makeSound();

    AnimalClass cat;
    cat.name = "Whiskers";
    cat.age = 2;
    cat.makeSound();

    return 0;
}