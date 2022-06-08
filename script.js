

function add(a, b){
    let result = a + b;
    console.log(result)
}

function subtract(a, b){
    let result = a - b;
    console.log(result)
}

function multiply(a, b){
    let result = a * b;
    console.log(result)
}

function divide(a, b){
    let result = a / b;
    console.log(result)
}

function operate(operator, x, z){
    switch(operator) {
        case operator = '+':
            add(x, z);
            break;
        case operator = '-':
            subtract(x, z);
            break;
        case operator = '*':
            multiply(x, z);
            break;
        case operator = '/':
            divide(x, z);
            break;
      }
}