let fruits = ["apple", "cherry", "banana", "pitanga", "blackberry", "zalzalak"]

// console.log(fruits)
// console.log(fruits.sort())
// console.log(fruits.reverse())

let numbers = [1,34,5,23,6,80,100,65]

function ascending(a,b){
    return a - b
}

function descending(a,b){
    return a - b
}

document.write(numbers.sort(ascending))
document.write("<br>")
document.write(numbers.sort(descending))
document.write("<br>")
document.write(numbers.sort(function(a,b) {return a -b}))

// document.write(numbers.sort((a,b) => a -b))
// document.write(numbers.sort(descending))

function double(number){
    return number * 2
}

let doublednumbers = numbers.map(double)
document.write("<br>")
document.write(doublednumbers)

//eval
document.write(eval("7 + 3"))


