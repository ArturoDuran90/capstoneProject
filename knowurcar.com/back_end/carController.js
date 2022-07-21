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
    sedan: JSON.parse(fs.readFileSync('sedanJSON.json')),

    getVehicles: function() {
        var carPicture = this.vehicle.carPicture;
        var carName = this.vehicle.carName;
        var carMake = this.vehicle.carMake;
        var carModel = this.vehicle.carModel;
        var carYear = this.vehicle.carYear;
        var carBody = this.vehicle.carBody;

        return new Vehicle(carPicture, carName, carMake, carModel, carYear, carBody);
    }
}

{/* <li>BMW</li>
<li>328i</li>
<li>GT</li>
                    <li>Hatchback</li>
                    <li>AWD</li>
                    <li>2016</li>
                    <li>91 Octane</li>
                    <li>3,000 - 5,000 miles</li>
                    <li>Turbocharged 2.0-Liter 4 Cylinder</li>
                    <li>240 hp</li>
                    <li>258lb-ft @ 1,250 - 4,800 rpm</li>
                    <li>8-Speed Automatic</li><br/>
                    <li>22 / 33 / 26</li>
                    <li>15.8 gal</li>
                    <li>190" L x 72" W x 59" H</li>
                    <li>vP225 / 45R18</li> */}