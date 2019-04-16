let isItOdd = function(theNumber) { 
    let remainder = theNumber % 2;  return (remainder == 1);
}
let someNumber = 146;
if (isItOdd(someNumber)) {
    console.log(someNumber + ' is odd');  }
else {
    console.log(someNumber + ' is even');
}


let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1; }
console.log(total);

//console.log(sum(range(1, 10)));


// 0! = 1, 1! = 1, 2! = 2*1! = 2, 3! = 3*2! = 3*2=6
// factorial(n) = n! = n*factorial(n-1)!
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}
console.log(factorial(8));

console.log("five" * 2)

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}


for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break; }
}


console.log("My name is Mona")
console.log("My"+" "+"name"+" "+"is"+" "-"Mona")

console.log("sum of 2+3 is: "+ (2+3))
console.log("sum of 2+3 is: "+ 2+3)


