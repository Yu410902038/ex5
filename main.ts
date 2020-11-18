input.onButtonPressed(Button.A, function () {
    radio.sendString("A win!")
    music.playMelody("- - C D - - - - ", 120)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B win!")
    music.playMelody("- - A - - F - - ", 120)
})
radio.setGroup(39)
basic.forever(function () {
	
})
