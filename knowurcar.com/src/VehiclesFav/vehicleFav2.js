import '..//App.css';

function vehicleFav2() {
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
                <ul>
                    <li>Kia</li>
                    <li>K5</li>
                    <li>GT-Line</li>
                    <li>Fastback</li>
                    <li>FWD</li>
                    <li>2021</li>
                    <li>91 Octane</li>
                    <li>3,000 - 5,000 miles</li>
                    <li>Turbocharged 1.6-Liter 4 Cylinder</li>
                    <li>180 hp</li>
                    <li>195lb-ft @ 1,500 - 4,500 rpm</li>
                    <li>8-Speed Automatic</li><br/>
                    <li>27 / 37 / 31</li>
                    <li>15.8 gal</li>
                    <li>193" L x 73" W x 56" H</li>
                    <li>vP235 / 45R18</li>
                </ul>
            </div>
        </div>
    )
}

export default vehicleFav2;