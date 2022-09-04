import {harmonization,subtraction,multiplication,division} from './operation.js'

const buttons = document.querySelector('.button')
const display = document.querySelector('.display')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')

let result = []
let numbers = ''
let operator = ''

const clearNumber = () =>{
    display.innerText = '0'
    numbers = ''
    operator = ''
    result.length = 0
}

const calculate = () => {
    result.push(parseInt(numbers))
    numbers = ''
    switch(operator){
        case '+':
            display.textContent = harmonization(result);
            break
        case '-':
            display.innerText = subtraction(result);
            break
        case 'x':
            display.innerText = multiplication(result);
            break
        case '/':
            display.innerText = division(result);
            break
    }
}

const choiceNumbers = (item) =>{
    if(item.target.classList.contains('button__number')){
        numbers += item.target.dataset.type
        display.innerText = numbers
        return
    }
    if(item.target.classList.contains('operator')){
        display.innerText = item.target.dataset.type
        operator = item.target.dataset.type
        result.push(parseInt(numbers))
        numbers = ''
        return
    }  
}

buttons.addEventListener('click', item => choiceNumbers(item))
clear.addEventListener('click', clearNumber)
equals.addEventListener('click',calculate)