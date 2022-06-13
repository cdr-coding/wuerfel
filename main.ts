let zahl = 0
input.onGesture(Gesture.Shake, function () {
    zahl = randint(0, 6)
    basic.showNumber(zahl)
    basic.pause(100)
    basic.clearScreen()
})
