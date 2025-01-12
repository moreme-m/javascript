// arrow functions
// functions add(x,y){
// return x + y
// }



let add = (x,y) => x + y;

// function greet(){
// console.log("Heloo !!! Happy new year")
// }
let greet = () => console.log("Heloo !!! Happy new year")

// function sub(a,b){
//    return a - b;
// };

let sub = (a,b) => a - b;


function mult(a,b){
    document.write( a * b)
};

document.write("Mariam");

let mult = (a,b) => a * b;
console.log(add(4,5));
greet();

//error handlings =>



try{
    mariam() //what to check for errors
}
catch(error){
    console.log(error.message) // what to do if there's an error
}