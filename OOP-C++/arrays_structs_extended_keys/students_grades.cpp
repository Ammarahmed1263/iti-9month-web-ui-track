#include <iostream>
#include <array>

using namespace std;

const int NUM_STUDENTS = 5;
const int NUM_SUBJECTS = 3;

struct Subject
{
    string name;
    int grade;
};

struct Student
{
    string name;
    array<Subject, NUM_SUBJECTS> subjects;
};
int main()
{
    array<Student, NUM_STUDENTS> students = {{{"Alice", {{{"Math", 90}, {"Chemistry", 80}, {"English", 95}}}},
                                              {"Bob", {{{"Math", 85}, {"Chemistry", 88}, {"English", 90}}}},
                                              {"Charlie", {{{"Math", 78}, {"Chemistry", 82}, {"English", 80}}}},
                                              {"David", {{{"Math", 92}, {"Chemistry", 85}, {"English", 88}}}},
                                              {"Eve", {{{"Math", 80}, {"Chemistry", 75}, {"English", 78}}}}}};

    float student_grades = 0;
    for (int i = 0; i < NUM_STUDENTS; i++)
    {
        for (int j = 0; j < NUM_SUBJECTS; j++)
        {
            student_grades += students.at(i).subjects.at(j).grade;
        }
        cout << students.at(i).name << " grades are: " << student_grades << endl;
        student_grades = 0;
    }

    cout << "---------------------------------------" << endl;

    float subject_average = 0;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            subject_average += students.at(j).subjects.at(i).grade;
        }
        cout << students.at(0).subjects.at(i).name << " average is: " << subject_average / 5 << endl;
        subject_average = 0;
    }
    return 0;
}