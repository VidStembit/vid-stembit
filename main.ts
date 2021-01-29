basic.forever(function () {
    if (StemBit_Car.Avoid_Sensor(StemBit_Car.enAvoidState.OBSTACLE)) {
        StemBit_Car.CarCtrl(StemBit_Car.CarState.Car_Back)
        basic.pause(1000)
        StemBit_Car.CarCtrl(StemBit_Car.CarState.Car_Right)
        basic.pause(1000)
    } else {
        StemBit_Car.CarCtrl(StemBit_Car.CarState.Car_Run)
        basic.pause(1000)
    }
})
