// classes in javascript ==> a blueprint/template for creating objects
// object => a variable that contains key value pairs

let student1 = {
    name: "Mariam",
    age: 13,
    hobbies: ["parachuting", "coding"]
}

class student {
    constructor(name, age, hobby, color){
        this.name = name
        this.age = age
         this.hobby = hobby
         this.color = color
    }  
}

let student2 = new student("Victor", 19, "dancing", "red")
let student3 = new student("Devi", 16, "eating", "orange")

document.write("My name is ", student2.name, " and I am ", student2.age, " years old. I love ",student2.hobby, ". My favourite color is ", student2.color)
document.write("<br>")
document.write("My name is ", student3.name, " and I am ", student3.age, " years old. I love ", student3.hobby, ". My favourite color is ", student3.color)