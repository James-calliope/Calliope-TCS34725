// tests go here; this will not be compiled when this package is used as a library
let r =0;
let g =0;
let b =0;
let c =0;
let colorTemp:number =0;
let lux =0;
let err_code = TCS34725_I2C.init_TCS34725();
basic.forever(() => {
    TCS34725_I2C.getRawData();
    colorTemp = TCS34725_I2C.calculateColorTemperature();
    serial.writeValue("colorTemp",colorTemp);
    lux = TCS34725_I2C.calculateLux();
    serial.writeValue("lux",lux)
    basic.pause(1000)
})