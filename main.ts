input.onButtonPressed(Button.A, function () {
    Dave += 1
    basic.showString("Point Dave!")
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Tie += 1
    basic.showString("Tie")
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Larry += 1
    basic.showString("Point Larry!")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Dave")
    basic.showNumber(Dave)
    basic.showString("Larry")
    basic.showNumber(Larry)
    basic.showString("Ties")
    basic.showNumber(Tie)
    basic.pause(1000)
    basic.clearScreen()
})
let Dave = 0
let Larry = 0
let Tie = 0
Tie = 0
Larry = 0
Dave = 0
