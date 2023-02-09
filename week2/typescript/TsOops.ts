class Person {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getAge(age: number) {
    console.log("person age:", this.age);
  }
}

class Student extends Person {
  //extends showed inheritance

  constructor(
    protected name: string,
    protected age: number //here protected is used for encapsulation which helps in getter and setter methods
  ) {
    super(name, age); //super shows inheritance
  }

  getAge(
    age: number //here getAge gives another output than Person getAge hence polymorphism
  ) {
    console.log("student age:", this.age);
  }
}

const student1: any = new Student("", 0);
student1.age = 18;
student1.name = "student1";
student1.getAge();
