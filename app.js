let number_A;
let number_B;
let operator;

function add (number_a, number_b){
    return number_a + number_b;
}

function subtract (number_a, number_b) {
    return number_a - number_b;
}

function multiply (number_a , number_b){
    return number_a * number_b;
} 

function divide (number_a, number_b){
    return number_a / number_b;
}

function operate (number_a, number_b, operator) {
    let result = 0;
    switch(operator){
        case '+':
            result = add(number_a, number_b);
        break;
        
        case '-':
            result = subtract(number_a, number_b);
        break;
        
        case '*': 
            result = multiply(number_a, number_b);
        break;
        
        case '/':
            result = divide(number_a, number_b);
        break;
        
        default:
            console.log('Operador todavia no disponible');
    }
    return result;
}

console.log(operate(3,2,'*'));