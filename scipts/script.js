// Necesito una funcion que reciba los numeros
// NEcesito una funcion que almaece los numeros y los guarde en el localstorage 
// una funcion que imprima el array 
// una funcion que sume los numeros y les del promedio
// Una funcion que imprima el resultado del promedio

const form = document.querySelector('.form');
const startGameBtn = document.querySelector('.promedy-result');
const restartGameBtn = document.querySelector('.restart-game');
const arrayPrintedList = document.querySelector('.array-list')
const averageList = document.querySelector('.average-list')
let numbersArray = []; 


/**
 * Esta función añade el nuevo número al array. Los añade uno a uno de acuerdo al evento del botón, sin limites. Aunque aun no se solucionar el null.
 */
function addNumber(number){
    let newNumber = number;
    numbersArray.push(newNumber);
    console.log(numbersArray);
}

/**
 * ESta función imprime el array en el documento.
 */
function printArray() {
    let joinNumbersArray = numbersArray.join(' - ')
    arrayPrintedList.innerHTML = `${joinNumbersArray}`;
}

/**
 * ESta función realiza la operación de promedio y genera el hmtl
 */
function operators(){
    const average = numbersArray.reduce((a, b) => a + b / numbersArray.length);
    averageList.innerHTML = `${average}`
}

/**
 * Este evento genera el evento del boton submit del formulario para obtener el número ingresado.
 */
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const number = parseInt(data.get('numbers'));
    addNumber(number);
    form.reset();
})

/**
 * Este evento ejecuta las funciones de operaciones
 */
startGameBtn.addEventListener('click', () => {
    printArray();
    operators()
})

