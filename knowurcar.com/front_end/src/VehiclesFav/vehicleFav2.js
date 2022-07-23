import '..//AppController.css';
import React from "react";
import { useEffect, useState } from 'react';

function VehicleFav2() {
    const [favCars, setFavCars] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        var url = `http://localhost:4001/api/favCars`
        fetch(url)
        .then(r => r.json(0))
        .then(data => {
            setFavCars(data);
        }).catch(e => console.log(e));
    }

    return(
        <div className='box vehiclesInfo'>
            <div className='box vehiclesInfoLeft'>
                <ul>
                    <li><label>Make:</label></li>
                    <li><label>Model:</label></li>
                    <li><label>Trim:</label></li>
                    <li><label>Body Type:</label></li>
                    <li><label>Drivetrain:</label></li>
                    <li><label>Year:</label></li>
                    <li><label>Gas Type:</label></li>
                    <li><label>Oil Change Interval:</label></li>
                    <li><label>Engine Type:</label></li>
                    <li><label>Engine Horsepower:</label></li>
                    <li><label>Engine Torque:</label></li>
                    <li><label>Transmition:</label></li>
                    <li><label>Fuel Economy (City/Highway/Combined):</label></li>
                    <li><label>Fuel Tank Capacity:</label></li>
                    <li><label>Dimensions:</label></li>
                    <li><label>Tire Size:</label></li>
                </ul>
            </div>
            <div className='box vehiclesInfoRight'>
                {
                favCars.car2?.map((car, index) => (
                    <ul>
                        <li>{car.carMake}</li>
                        <li>{car.carModel}</li>
                        <li>{car.carTrim}</li>
                        <li>{car.carBody}</li>
                        <li>{car.carDrivetrain}</li>
                        <li>{car.carYear}</li>
                        <li>{car.carGasType}</li>
                        <li>{car.carOilChange}</li>
                        <li>{car.carEngineType}</li>
                        <li>{car.carEngineHorsPow}</li>
                        <li>{car.carEngineTorq}</li>
                        <li>{car.carTransmit}</li>
                        <li>{car.carFuelEcon}</li>
                        <li>{car.carFuelTankCap}</li>
                        <li>{car.carDimensions}</li>
                        <li>{car.carTireSize}</li>
                    </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default VehicleFav2;