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
