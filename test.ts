// tests go here; this will not be compiled when this package is used as a library
let lux: number = 0;
let colorTemp: number = 0;
let r: number;
let g: number;
let b: number;
let c: number;
let err_code: number;
err_code =  TCS34725_I2C.init_TCS34725();
serial.writeValue("err_code", err_code);
basic.forever(() => {
    TCS34725_I2C.getRawData();
    r=TCS34725_I2C.get_r_data();
    g=TCS34725_I2C.get_g_data();
    b=TCS34725_I2C.get_b_data();
    serial.writeValue("r", r);
    serial.writeValue("g", g);
    serial.writeValue("b", b);
    colorTemp = TCS34725_I2C.calculateColorTemperature();
    serial.writeValue("colorTemp", colorTemp);
    lux = TCS34725_I2C.calculateLux();
    serial.writeValue("lux", lux);
    basic.pause(2000);
})
