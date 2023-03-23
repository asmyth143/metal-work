radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.South)
    } else if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.West)
    } else if (receivedNumber == 3) {
        basic.showArrow(ArrowNames.East)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    kitronik_klip_motor.servoTurn(kitronik_klip_motor.Servos.pin0, 0)
    radio.sendNumber(2)
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.LogoUp, function () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 50)
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.South)
})
input.onButtonPressed(Button.B, function () {
    kitronik_klip_motor.servoTurn(kitronik_klip_motor.Servos.pin0, 180)
    radio.sendNumber(3)
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.LogoDown, function () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 50)
    radio.sendNumber(0)
    basic.showArrow(ArrowNames.North)
})
basic.forever(function () {
	
})
