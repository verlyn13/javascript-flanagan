function abs(x) {
    if (x >=0) {
        return x;
    }
    else {
        return -x;
    }
}

function factorial(n) {
    var product = 1;
    while(n>1) {
        product *= n;
        n--;
    }
    return product;
}

function factorial2(n) {
    var i, product = 1;
    for(i=2; i<=n; i++) {
        product *= i;
    }
    return product;
}

function factorial3(n) {
    if(n===0) {
        return 1;
    }
    else {
        return n*factorial3(n-1);
    }
}

console.log(factorial3(5))