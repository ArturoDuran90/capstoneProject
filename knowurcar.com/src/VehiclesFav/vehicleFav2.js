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
                    <li><label>Engine Type:</label></li><br/>
                    <li><label>Engine Horsepower:</label></li>
                    <li><label>Engine Torque:</label></li>
                    <li><label>Fuel Economy (City/Highway/Combined):</label></li>
                    <li><label>Fuel Tank Capacity:</label></li>
                    <li><label>Dimensions:</label></li>
                    <li><label>Tire Size:</label></li>
                </ul>
            </div>
            <div className='box vehiclesInfoRight'>
                <ul>
                    <li>BMW</li>
                    <li>328i</li>
                    <li>GT</li>
                    <li>Hatchback</li>
                    <li>AWD</li>
                    <li>2016</li>
                    <li>91 Octane</li>
                    <li>3,000 - 5,000 miles</li>
                    <li>Turbocharged 2.0-Liter 4 Cylinder</li>
                    <li>240 hp</li>
                    <li>258lb-ft @ 1,250 - 4,800 rpm</li><br/>
                    <li>22 / 33 / 26</li>
                    <li>15.8 gal</li>
                    <li>190" L x 72" W x 59" H</li>
                    <li>vP225 / 45R18</li>
                </ul>
            </div>
        </div>
    )
}

export default vehicleFav2;