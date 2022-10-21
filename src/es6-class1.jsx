


class Person {
    constructor(name = "anonymous",age = 0){
        this.name = name;
        this.age = age;
    };
    getDescription(){
        return `${this.name} is ${this.age} years old `
    }
    

};

const me = new Person("Ejaz",23);
const us = new Person();
console.log(me.getDescription())
console.log(us.getDescription())

