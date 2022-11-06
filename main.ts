input.onButtonPressed(Button.A, function () {
    basic.showString("" + (randint(1, 6)))
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("" + (randint(1, 4)))
})
input.onSound(DetectedSound.Loud, function () {
    basic.showString("" + (randint(1, 20)))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (randint(1, 10)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (randint(1, 8)))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (randint(1, 12)))
})
basic.forever(function () {
    let DND = 0
    if (DND == 0) {
        basic.showString("DND")
    }
})
