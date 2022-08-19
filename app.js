// function for generating 5 digit number
function generateNumber() {
    const number = Math.round(Math.random() * 100000)
    return number
}
function getPin() {
    const generatedPin = generateNumber() + ''
    if (generatedPin.length === 5) {
        return generatedPin
    }
    else {
       return getPin()
    }
}

// console.log(getPin())
document.getElementById('get-pin').addEventListener('click', function () {
    const pinNumber = getPin()
    const display = document.getElementById('pin-display')
    display.value = pinNumber
})

// event listener for keypad
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText
    const displayField = document.getElementById('type-number')
    const previousNumber = displayField.value
    if (number === 'C') {
        displayField.value = ''
    } 
    else if (number === '<') {
        const digits = previousNumber.split('')
        digits.pop()
        const escape = digits.join('')
        displayField.value = escape
    }
    else {
        const displayValue = previousNumber + number
        displayField.value = displayValue

    }
})