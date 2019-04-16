function power(base, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        console.log(i, "hi");
        result = result * base;
    }
    return result;
}



console.log(power(2,0))



str = "Mona studies computer science";

sub = str.substring(2, 0);

console.log(sub);


weekdays = "monday, tuesday, wednesday, thursday, friday";

console.log(weekdays.length);

console.log(weekdays.search('wednesday'));

arr = weekdays.split(',');

console.log(arr);

arr1 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log('\n')

for (let element of arr1) {
    console.log(element);

}

console.log('\n')
arr2 = ['today', 3, 8.6, 'h', [1, 3, ['hi']]]

for (let el of arr2) {
    console.log(el);

}
