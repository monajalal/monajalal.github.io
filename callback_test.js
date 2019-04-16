/*function first(){
    // Simulate a code delay
    setTimeout( function(){
        console.log(1);
    }, 500 );
}
function second(){
    console.log(2);
}
first();
second();
*/


function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished(){
    console.log('Finished my homework');
}
doHomework('math', alertFinished);