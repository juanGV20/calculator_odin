let number_A = '';
let number_B = '';
let operator = '';
let display = ''; 
const botones = document.querySelectorAll(".calculator-button");

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
    number_a = parseFloat(number_a); 
    number_b = parseFloat(number_b);
    switch(operator){
        case '+':
            result = add(number_a, number_b);
        break;
        
        case '-':
            result = subtract(number_a, number_b);
        break;
        
        case 'x': 
            result = multiply(number_a, number_b);
        break;
        
        case '÷':
            result = divide(number_a, number_b);
        break;
        
        default:
            console.log('Operador todavia no disponible');
    }
    createHistory(number_a, operator, number_b);
    return result;
}

function updateDisplay(value){
    const display = document.querySelector('.result');
    display.textContent = value;
}
function createHistory(number_a, operator, number_b){
    const display = document.querySelector('.calculator-section-results');
    const result = document.querySelector('.result');
    const newHistory = document.createElement('div');
    newHistory.textContent = number_a + operator + number_b;
    display.insertBefore(newHistory,result)
}

botones.forEach(boton => { 
    boton.addEventListener("click", (e) => { 
        const clickedButton = e.target;
        const value = clickedButton.textContent; // Mostrar en pantalla 
        display += value; 
        updateDisplay(display); 
        if (clickedButton.classList.contains("buttons-operations")) { 
                operator = value; 
            } else if (value === "=") {
                const result = operate(number_A, number_B, operator); 
                updateDisplay(result); // Reiniciar estado 
                number_A = result.toString(); // el resultado pasa a ser el nuevo primer número 
                number_B = ""; 
                operator = ""; 
                display = result.toString(); // el display se queda con el resultado
            } else if(value === 'AC'){
                display = ""; 
                number_A = ""; 
                number_B = ""; 
                operator = ""; 
                updateDisplay(display); 
                return; 
            } else { // Si no es operador ni "=", es número 
                if (operator === "") { 
                        number_A += value; // construye el primer número 
                } else { 
                        number_B += value; // construye el segundo número 
                    } 
                }
    }); 
});

