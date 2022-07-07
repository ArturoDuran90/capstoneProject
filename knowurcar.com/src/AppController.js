import './App.css';

function AppController() {
    return (
    <div className="App">
        <div id='container' class='box'>
            <div id='titleBox' class='box'>
                <img id="pageLogo" src="KnowUrCarLogoSVG5.png" alt="logo"/>
            </div>
        
            <div id='box2' class='box'>
                <div id= 'innerMenu1' class='box'>Year</div>
                <div id= 'innerMenu2' class='box'>Make</div>
                <div id= 'innerMenu3' class='box'>Model</div>
                <div id= 'innerMenu4' class='box'>Trim</div>
            </div>

            <div id='box5' class='box'>
                <div id= 'innerMenu1' class='box'>Look up Car</div>
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
                <div id= 'vehicleFav3' class='box'>Car 3</div>
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

            <div id='box3' class='box'>
                <div id= 'vehicleLight1' class='box'>

                </div>
                <div id='vehicleLight2' class='box'>
                    
                </div>
            </div>

        </div>
    </div>
    )
}

export default AppController;
