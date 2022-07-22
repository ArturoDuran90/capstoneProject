const fs = require("fs");
const { get } = require("http");

class Vehicle {
    constructor(carImage, carMake, carModel, carTrim, carBody, carDrivetrain, carYear, carGasType, carOilChange, carEngineType, carEngineHorsPow, carEngineTorq, carTransmit, 
        carFuelEcon, carFuelTankCap, carDimensions, carTireSize){
        this.carImage = carImage;
        this.carMake = carMake;
        this.carModel = carModel;
        this.carTrim = carTrim;
        this.carBody = carBody;
        this.carDrivetrain = carDrivetrain;
        this.carYear = carYear;
        this.carGasType = carGasType;
        this.carOilChange = carOilChange;
        this.carEngineType = carEngineType;
        this.carEngineHorsPow = carEngineHorsPow;
        this.carEngineTorq = carEngineTorq;
        this.carTransmit = carTransmit;
        this.carFuelEcon = carFuelEcon;
        this.carFuelTankCap = carFuelTankCap;
        this.carDimensions = carDimensions;
        this.carTireSize = carTireSize;
    }
}

exports.generator = {
    favCars: JSON.parse(fs.readFileSync('favCarsJSON.json')),

    getVehicles: function() {
        var carImage = carImage;
        var carMake = carMake;
        var carModel = carModel;
        var carTrim = carTrim;
        var carBody = carBody;
        var carDrivetrain = carDrivetrain;
        var carYear = carYear;
        var carGasType = carGasType;
        var carOilChange = carOilChange;
        var carEngineType = carEngineType;
        var carEngineHorsPow = carEngineHorsPow;
        var carEngineTorq = carEngineTorq;
        var carTransmit = carTransmit;
        var carFuelEcon = carFuelEcon;
        var carFuelTankCap = carFuelTankCap;
        var carDimensions = carDimensions;
        var carTireSize = carTireSize;

        return new Vehicle(carImage, carMake, carModel, carTrim, carBody, carDrivetrain, carYear, carGasType, carOilChange, carEngineType, carEngineHorsPow, carEngineTorq,
            carTransmit, carFuelEcon, carFuelTankCap, carDimensions, carTireSize);
    }
}