var x = -10.599   //Number
var y = "Mariam"  //string
var a = null  //null
var b; //undefined

var c = true //boolean

var student = {'key':'value'}  //object
var fruits = ['cherry','watermelon']



document.write(typeof(x))
document.write(typeof(y))
document.write(typeof(a))
document.write(typeof(b))
document.write(typeof(c))
document.write(typeof(student))
document.write(typeof(fruits))

var age = 10

if (age >= 18){
    document.write("You are old enough")
}

else{
    document.write("You are young")
}



//white loop
let i = 1 //initialize the counter available
while(i <=10){  //the condition to run the loop
    document.write(i)  //print the current number
    i++; //increment the counter available
}