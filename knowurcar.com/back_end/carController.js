const fs = require("fs");
const { get } = require("http");

class Vehicle {
    constructor(carPicture, carName, carMake, carModel, carYear, carBody){
        this.carPicture = carPicture;
        this.carName = carName;
        this.carMake = carMake;
        this.carModel = carModel;
        this.carYear = carYear;
        this.carBody = carBody;
    }
}

exports.generator = {
    // sedan: JSON.parse(fs.readFileSync('sedanJSON.json')),

    // getVehicles: function() {
    //     var carPicture = this.vehicle.carPicture;
    //     var carName = this.vehicle.carName;
    //     var carMake = this.vehicle.carMake;
    //     var carModel = this.vehicle.carModel;
    //     var carYear = this.vehicle.carYear;
    //     var carBody = this.vehicle.carBody;

    //     return new Vehicle(carPicture, carName, carMake, carModel, carYear, carBody);
    // },

    // suv: JSON.parse(fs.readFileSync('suvJSON.json')),

    // getVehicles: function() {
    //     var carPicture = this.vehicle.carPicture;
    //     var carName = this.vehicle.carName;
    //     var carMake = this.vehicle.carMake;
    //     var carModel = this.vehicle.carModel;
    //     var carYear = this.vehicle.carYear;
    //     var carBody = this.vehicle.carBody;

    //     return new Vehicle(carPicture, carName, carMake, carModel, carYear, carBody);
    // }
}