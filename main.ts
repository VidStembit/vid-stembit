basic.forever(function () {
    if (StemBit_Car.Avoid_Sensor(StemBit_Car.enAvoidState.OBSTACLE)) {
        StemBit_Car.CarCtrl(StemBit_Car.CarState.Car_Back)
        basic.pause(1000)
        StemBit_Car.CarCtrl(StemBit_Car.CarState.Car_Right)
        StemBit_Music.Buzzer(DigitalPin.P0, StemBit_Music.enBuzzer.Beep)
        basic.pause(1000)
    } else {
        StemBit_Car.Music_Car(StemBit_Car.enMusic.wedding)
        StemBit_Car.CarCtrl(StemBit_Car.CarState.Car_Run)
        StemBit_Display.RGB(
        AnalogPin.P0,
        AnalogPin.P5,
        AnalogPin.P3,
        255,
        0,
        255
        )
        basic.pause(1000)
    }
})
