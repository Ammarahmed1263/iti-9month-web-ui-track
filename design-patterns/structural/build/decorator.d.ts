interface Teacher {
    getDetails(): string;
}
declare class BaseTeacher implements Teacher {
    private name;
    private subject;
    constructor(name: string, subject: string);
    getDetails(): string;
}
/**
 * Decorator base class that implements the Teacher interface and holds a reference to a Teacher object
 * It calls the getDetails method of the Object it decorates and adds additional information to it
 */
declare class TeacherDecorator implements Teacher {
    protected teacher: Teacher;
    constructor(teacher: Teacher);
    getDetails(): string;
}
declare class SalaryTeacherDecorator extends TeacherDecorator {
    private salary;
    constructor(teacher: Teacher, salary: number);
    getDetails(): string;
}
declare class NationalityTeacherDecorator extends TeacherDecorator {
    private nationality;
    constructor(teacher: Teacher, nationality: string);
    getDetails(): string;
}
declare class StreetTeacherDecorator extends TeacherDecorator {
    private street;
    constructor(teacher: Teacher, street: string);
    getDetails(): string;
}
export { BaseTeacher, SalaryTeacherDecorator, NationalityTeacherDecorator, StreetTeacherDecorator, };
//# sourceMappingURL=decorator.d.ts.map