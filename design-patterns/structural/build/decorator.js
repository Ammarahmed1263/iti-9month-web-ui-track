class BaseTeacher {
    name;
    subject;
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    getDetails() {
        return `Name: ${this.name}, Subject: ${this.subject}`;
    }
}
/**
 * Decorator base class that implements the Teacher interface and holds a reference to a Teacher object
 * It calls the getDetails method of the Object it decorates and adds additional information to it
 */
class TeacherDecorator {
    teacher;
    constructor(teacher) {
        this.teacher = teacher;
    }
    getDetails() {
        return this.teacher.getDetails();
    }
}
class SalaryTeacherDecorator extends TeacherDecorator {
    salary;
    constructor(teacher, salary) {
        super(teacher);
        this.salary = salary;
    }
    getDetails() {
        return `${super.getDetails()}, Salary: $${this.salary}`;
    }
}
class NationalityTeacherDecorator extends TeacherDecorator {
    nationality;
    constructor(teacher, nationality) {
        super(teacher);
        this.nationality = nationality;
    }
    getDetails() {
        return `${super.getDetails()}, Nationality: ${this.nationality}`;
    }
}
class StreetTeacherDecorator extends TeacherDecorator {
    street;
    constructor(teacher, street) {
        super(teacher);
        this.street = street;
    }
    getDetails() {
        return `${super.getDetails()}, Street: ${this.street}`;
    }
}
export { BaseTeacher, SalaryTeacherDecorator, NationalityTeacherDecorator, StreetTeacherDecorator, };
//# sourceMappingURL=decorator.js.map