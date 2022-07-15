import '..//App.css';

function vehicleFav3() {
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
                    <li><label>Engine Type:</label></li><br/>
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
                    <li>Honda</li>
                    <li>Civic Type R</li>
                    <li>Touring</li>
                    <li>Hatchback</li>
                    <li>FWD</li>
                    <li>2021</li>
                    <li>91 Octane</li>
                    <li>3,000 - 5,000 miles</li>
                    <li>Turbocharged 2.0-Liter VTEC 4 Cylinder</li>
                    <li>306 hp</li>
                    <li>295lb-ft @ 2,500 rpm</li>
                    <li>6-speed Manual</li><br/>
                    <li>22 / 28 / 25</li>
                    <li>12.4 gal</li>
                    <li>180" L x 74" W x 57" H</li>
                    <li>vP245 / 30R20</li>
                </ul>
            </div>
        </div>
    )
}

export default vehicleFav3;