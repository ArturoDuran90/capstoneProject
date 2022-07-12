import './App.css';
import LightsTable from './LightsTable';

const refreshPage = ()=>{
    window.location.reload();
}

function AppController() {
    return (
    <div className="App">
        <div id='container' class='box'>
            <div id='titleBox' class='box'>
                <img onClick={() => {refreshPage()}} id="pageLogo" src="KUClogo.png" alt="logo"/>
            </div>
        
            <div id='box2' class='box'>
                <div class='box'>
                    <input class='box' type='text' placeholder='Vehicle Year'/>
                    {/* <a href={carWebsite(sedan.carModel)} target="_blank">
                        <img src={sedan.carImage} alt='Vehicle Poster'/>
                    </a> */}
                </div>
                <div class='box'>
                    <input class='box' type='text' placeholder='Vehicle Make'/>
                </div>
                <div class='box'>
                    <input class='box' type='text' placeholder='Vehicle Model'/>
                </div>
                <div class='box'>
                    <input class='box' type='text' placeholder='Vehicle Trim'/>
                </div>
            </div>

            <div id='box5' class='box'>
                <div id='lookUpBtn'>
                    Look up Vehicle
                    {/* <input class='box' type='button' placeholder='Look up Vehicle'/> */}
                </div>
            </div>

            <div id='box3' class='box'>
                <div id= 'vehicleFav1' class='box'>
                    Car 1
                </div>   
                
                <div class='box'>
                    <div id="personalFav" class='box'>Our Personal Favorites</div>
                    
                    <div id='vehicleFav2' class='box'>
                        Car 2
                    </div>
                </div>
                <div id='vehicleFav3' class='box'>Car 3</div>
            </div>
            
            <div id='box5' class='box'>
                <div id= 'innerMenu1' class='box'>KnowUrLights</div>
            </div>

            {/* <table class="box">
                <tr>
                    <td class="box">Img</td>
                    <td class="box">This light means...</td>
                    <td class="box">Img</td>
                    <td class="box">This light means...</td>
                </tr>
                <tr>
                    <td class="box">Img</td>
                    <td class="box">This light means...</td>
                    <td class="box">Img</td>
                    <td class="box">This light means...</td>
                </tr>
                <tr>
                    <td class="box">Img</td>
                    <td class="box">This light means...</td>
                    <td class="box">Img</td>
                    <td class="box">This light means...</td>
                </tr>
            </table> */}

            {/* <div id='box3' class='box'>
                <div id= 'vehicleLight1' class='box'>
                        Vehicle Light 1
                    <div id= 'vehicleLight1' class='box'>
                        Vehicle Light 1
                    </div>
                </div>
                <div id='vehicleLight2' class='box'>
                    Vehicle Light 2
                </div>
            </div> */}

            <LightsTable /> 
            

        </div>
    </div>
    )
}

export default AppController;
