const n = parseInt(prompt('Enter number'));
while (n < 1) {
    alert('Please enter positive number');
    n = parseInt(prompt('Enter number'));
}

const resultA = fibonacciNumber(n);
alert('Fibonacci number with array and loop is ' + resultA);

const resultB = fibonacciLoop(n);
alert('Fibonacci number with loop is ' + resultB);

const resultC = fibonacciRec(n);
alert('Fibonacci number with recursion is ' + resultC);

function fibonacciNumber(n) {
    let fibonacci = [1, 1];
    let first = 1;
    let second = 1;
    for( let i = 3; i <= n; i++ ) {
        let next =  first + second;
        first = second;
        second = next;
        fibonacci.push(next);
    }
    return fibonacci[fibonacci.length -1];
}


function fibonacciLoop(n) {
    let next = 1;
    let first = 1;
    let second = 1;
    for( let i = 3; i <= n; i++ ) {
        next =  first + second;
        first = second;
        second = next;
    }
    return next;
}


function fibonacciRec(n) {
    if(n<=1){
        return n;
    }
    return fibonacciRec(n-1) +fibonacciRec(n-2)
}