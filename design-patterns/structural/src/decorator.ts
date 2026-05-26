interface Teacher {
  getDetails(): string;
}

class BaseTeacher implements Teacher {
  constructor(
    private name: string,
    private subject: string,
  ) {}

  getDetails() {
    return `Name: ${this.name}, Subject: ${this.subject}`;
  }
}

/**
 * Decorator base class that implements the Teacher interface and holds a reference to a Teacher object
 * It calls the getDetails method of the Object it decorates and adds additional information to it
 */
class TeacherDecorator implements Teacher {
  constructor(protected teacher: Teacher) {}

  getDetails() {
    return this.teacher.getDetails();
  }
}

class SalaryTeacherDecorator extends TeacherDecorator {
  constructor(
    teacher: Teacher,
    private salary: number,
  ) {
    super(teacher);
  }

  getDetails() {
    return `${super.getDetails()}, Salary: $${this.salary}`;
  }
}

class NationalityTeacherDecorator extends TeacherDecorator {
  constructor(
    teacher: Teacher,
    private nationality: string,
  ) {
    super(teacher);
  }

  getDetails() {
    return `${super.getDetails()}, Nationality: ${this.nationality}`;
  }
}

class StreetTeacherDecorator extends TeacherDecorator {
  constructor(
    teacher: Teacher,
    private street: string,
  ) {
    super(teacher);
  }

  getDetails() {
    return `${super.getDetails()}, Street: ${this.street}`;
  }
}

export {
  BaseTeacher,
  SalaryTeacherDecorator,
  NationalityTeacherDecorator,
  StreetTeacherDecorator,
};
