import "./App.css";
import LightsTable from "./LightsTable";
import VehicleFav1 from "./VehiclesFav/vehicleFav1";
import VehicleFav2 from "./VehiclesFav/vehicleFav2";
import VehicleFav3 from "./VehiclesFav/vehicleFav3";
import CarMakes from "./DropdownMenus/CarMakes";
import CarYears from "./DropdownMenus/CarYears";
import CarModels from "./DropdownMenus/CarModels";
import CarTrims from "./DropdownMenus/CarTrims";
import car1 from "./images/car1.jpg";
import car2 from "./images/car2.jpg";
import car3 from "./images/car3.jpg";
import { useEffect, useState } from "react";

function AppController() {
  const [sedans, setSedan] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var url = `http://localhost:4001/api/sedan`;
    fetch(url)
      .then((r) => r.json(0))
      .then((data) => {
        setSedan(data.results);
      })
      .catch((e) => console.log(e));
  };

  const refreshPage = () => {
    // window.parent.location = window.parent.location.href;
    window.location.href = "/";
  };

  return (
    <div className="App">
      <div id="container">
        <div id="navBar1" className="box">
          <span className="navItem">
            <img
              onClick={() => {
                refreshPage();
              }}
              id="navLogo"
              src="KUClogo.png"
              alt="logo"
            />
          </span>
          <span className="navItem kulightNav">
            <a href="#lightLink">Info about Dashboard Lights. Click Here!</a>
          </span>
        </div>
        <div id="insideContainer">
          <div className="box navBar2Text">
            <p className="navBar2Text">
              Select your vehicle below for more information.
            </p>
          </div>
          <div id="navBar2" className="box">
            <div className="box">
              {/* <input className='box vehicleInput' type='text' placeholder='Vehicle Year'/> */}
              <CarMakes />
              {/* <input className='box vehicleInput' type='text' placeholder='Vehicle Make'/> */}
              <CarYears />
              {/* <div id='LookUpDiv'> */}
              {/* <span id='lookUpBtn' onClick={() => {}}>
                            Look up Model & Trim
                        </span> */}
              {/* </div> */}
              {/* <input className='box vehicleInput' type='text' placeholder='Vehicle Model'/> */}
              {/* <br/> */}
              <CarModels />
              {/* <input className='box vehicleInput' type='text' placeholder='Vehicle Trim'/> */}
              <CarTrims />
            </div>
          </div>
          <div id="LookUpDiv">
            <div id="lookUpBtn" onClick={() => {}}>
              Look up Vehicle
            </div>
          </div>
          <hr />
          <br />
          <div id="vehicleFavContainer" className="box">
            <div id="vehicleFav1" className="box">
              <div className="box">
                <img className="imgCar" src={car1} alt="Vehicle Poster" />
                <br />
              </div>
              <br />
              <h3 className="box">BMW 328i xDrive GT</h3>
              <VehicleFav1 />
              <div>
                <a href="https://carmanuals2.com/d/91794" download>
                  <img src=".//PdfImg.png" alt="PdfLogo" />
                </a>
                {/* {
                            sedans?.map((sedan, index) => (
                                <div className='userBox' id='car1'> 
                                    { sedan.carImage != 'N/A'?       
                                        <div className='movieImage'>
                                            <a href={sedan.carImage} target="_blank">
                                                <img src=".//PdfImg.png" alt='Vehicle Poster'/>
                                            </a>
                                        </div> : ''
                                    }   
                                </div>
                            ))
                            } */}
              </div>
            </div>
            <div id="vehicleFav2Box" className="box">
              <div id="personalFav" className="box">
                Our Personal Favorites
              </div>
              <div id="vehicleFav2" className="box">
                <div className="box">
                  <img className="imgCar" src={car2} alt="Vehicle Poster" />
                </div>
                <h3 className="box">Kia K5 GT-Line</h3>
                <VehicleFav2 />
                <div>
                  <a
                    href="https://ownersman.com/manuals/19adbc80-e819-11ea-9ef8-49e1fe0d1a24/download"
                    download
                  >
                    <img src=".//PdfImg.png" alt="PdfLogo" />
                  </a>
                </div>
              </div>
            </div>
            <div id="vehicleFav3" className="box">
              <div className="box">
                <img className="imgCar" src={car3} alt="Vehicle Poster" />
              </div>
              <h3 className="box">Honda Civic Type R</h3>
              <VehicleFav3 />
              <div>
                <a
                  href="http://techinfo.honda.com/rjanisis/pubs/OM/AH/ATGG2121OM/enu/ATGG2121OM.PDF"
                  download
                >
                  <img src=".//PdfImg.png" alt="PdfLogo" />
                </a>
              </div>
              <div id="lightLink"></div>
            </div>
          </div>
          <hr />
          <br />
          <div id="lightsDiv" className="box">
            <div id="innerMenu1" className="box">
              KnowUrLights
            </div>
          </div>
          <LightsTable />
          <footer>Website by Arturo Duran &copy;</footer>
          <br />
        </div>
      </div>
    </div>
  );
}

export default AppController;
