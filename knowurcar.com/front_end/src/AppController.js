import './App.css';
import LightsTable from './LightsTable';
import VehicleFav1 from './VehiclesFav/vehicleFav1';
import VehicleFav2 from './VehiclesFav/vehicleFav2';
import VehicleFav3 from './VehiclesFav/vehicleFav3';
import car1 from './images/car1.jpg';
import car2 from './images/car2.jpg';
import car3 from './images/car3.jpg';

const refreshPage = ()=>{
    window.parent.location = window.parent.location.href;
}

function AppController() {
    return (
    <div className="App">
        <div id='container' >
            <div id='titleBox'>
                <img onClick={() => {refreshPage()}} id="pageLogo" src="KUClogo.png" alt="logo"/>
                {/* <h1 id="title">.com</h1> */}
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

            <div id='LookUpDiv'>
                <div id='lookUpBtn'>
                    Look up Vehicle
                </div>
            </div>

            <div id='vehicleFavContainer' className='box'>
                <div id='vehicleFav1' className='box'>
                    <div className='box'>
                        <img className="imgCar" src={car1} alt='Vehicle Poster'/>
                        <br/>
                    </div>
                    <br/>
                    <h3 className='box'>BMW 328i xDrive GT</h3>
                    <VehicleFav1/>
                </div>
                <div id='vehicleFav2Box'className='box'>
                    <div id="personalFav" className='box'>Our Personal Favorites</div>
                    <div id='vehicleFav2' className='box'>
                        <div className='box'>
                            <img className="imgCar" src={car2} alt='Vehicle Poster'/>
                        </div>
                        <h3 className='box'>Kia K5 GT-Line</h3>
                        <VehicleFav2/>
                    </div>
                </div>
                <div id='vehicleFav3' className='box'>
                    <div className='box'>
                        <img className="imgCar" src={car3} alt='Vehicle Poster'/>
                    </div>
                    <h3 className='box'>Honda Civic Type R</h3>
                    <VehicleFav3/>
                </div>
            </div>
            
            <hr/>
            <br/>
            <div id='lightsDiv' className='box'>
                <div id= 'innerMenu1' className='box'>KnowUrLights</div>
            </div>
            <LightsTable /> 
            <footer>
                Website by Arturo Duran &copy;
            </footer>
            <br/>
        </div>
        </div>
    </div>
    )
}

export default AppController;
