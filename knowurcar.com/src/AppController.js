import './App.css';
import LightsTable from './LightsTable';
import car1 from './images/car1.jpg';
import car2 from './images/car2.jpg';
import car3 from './images/car3.jpg';

const refreshPage = ()=>{
    window.location.reload();
}

function AppController() {
    return (
    <div className="App">
        <div id='container' >
            <div id='titleBox'>
                <img onClick={() => {refreshPage()}} id="pageLogo" src="KUClogo.png" alt="logo"/>
            </div>
        
        <div id='insideContainer'>
            <div id='navBar' className='box'>
                <div className='box'>
                    <input className='box vehicleInput' type='text' placeholder='Vehicle Year'/>
                </div>
                <div className='box'>
                    <input className='box vehicleInput' type='text' placeholder='Vehicle Make'/>
                </div>
                <div className='box'>
                    <input className='box vehicleInput' type='text' placeholder='Vehicle Model'/>
                </div>
                <div className='box'>
                    <input className='box vehicleInput' type='text' placeholder='Vehicle Trim'/>
                </div>
            </div>

            <div id='box5'>
                <div id='lookUpBtn'>
                    Look up Vehicle
                </div>
            </div>

            <div id='vehicleFavContainer' className='box'>
                <div id='vehicleFav1' className='box'>
                    <div className='box'>
                        <img className="imgCar" src={car1} alt='Vehicle Poster'/>
                    </div>
                    <h2>BMW 328i xDrive GT</h2>
                    <div className="vehiclesInfo">
                        carType: "Mid-Size Sedan", "\n"
                        "carDrivetrain": "AWD",
                        "carPrice": "$43,000"
                    </div>
                </div>
                <div id='vehicleFav2Box'className='box'>
                    <div id="personalFav" className='box'>Our Personal Favorites</div>
                    
                    <div id='vehicleFav2' className='box'>
                        <div className='box'>
                            <img className="imgCar" src={car2} alt='Vehicle Poster'/>
                        </div>
                        <h2>Kia K5 GT-Line</h2>
                    </div>
                </div>
                <div id='vehicleFav3' className='box'>
                    <div className='box'>
                        <img className="imgCar" src={car3} alt='Vehicle Poster'/>
                    </div>
                    <h2>Honda Civic Type R</h2>
                </div>
            </div>
            
            <hr/>
            <div id='box5' className='box'>
                <div id= 'innerMenu1' className='box'>KnowUrLights</div>
            </div>
            <LightsTable /> 
            <footer>
                Website by Arturo Duran &copy;
            </footer>
        </div>
        </div>
    </div>
    )
}

export default AppController;
