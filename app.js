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
document.getElementById('generate-pin').addEventListener('click', function () {
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
    if (isNaN(number)) {
        return
    }
    else {
        const displayValue = previousNumber + number
        displayField.value = displayValue

    }
})

document.getElementById('verify-btn').addEventListener('click', function () {
    const display = document.getElementById('pin-display')
    const verify = display.value
    const displayField = document.getElementById('type-number')
    const previousNumber = displayField.value
    const successMsg = document.getElementById('success-msg')
    const declinMsg = document.getElementById('declin-msg')
    if (verify === previousNumber) {
        successMsg.style.display = 'block'
        declinMsg.style.display = 'none'
    }
    else {
        declinMsg.style.display = 'block'
        successMsg.style.display = 'none'
    }
})