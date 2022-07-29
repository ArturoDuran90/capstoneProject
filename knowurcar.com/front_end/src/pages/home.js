import '../AppController.css';
import React from 'react';
import LightsTable from '../LightsTable/LightsTable';
import VehicleFav1 from '../VehiclesFav/VehicleFav1';
import VehicleFav2 from '../VehiclesFav/VehicleFav2';
import VehicleFav3 from '../VehiclesFav/VehicleFav3';
import { useEffect, useState } from 'react';

const Home = () => {
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

return (
	<div id='insideContainer'>
  <br/>
                <div id='vehicleFavContainer' className='box'>
                    <div id='vehicleFav1' className='box'>
                    <br/>
                    {
                        favCars.car1?.map((car, index) => (
                        <div className='box' id='car1'> 
                            { car.carImage != 'N/A'?       
                                <div>
                                    <a>
                                        <img className="imgCar" src={car.carImage} alt='Vehicle Poster'/>
                                    </a>
                                </div> : ''
                            }
                        </div>
                    ))
                    }

                        <br/>
                        <h3 className='box'>BMW 328i xDrive GT</h3>
                        <VehicleFav1/>
                        <div>
                            {
                                favCars.car1?.map((car, index) => (
                                <div className='box' id='car1'> 
                                    { car.carPDF != 'N/A'?       
                                        <div>
                                            <a href={car.carPDF} target="_blank">
                                                <img src="http://localhost:4001/PdfImg.png" alt='PdfLogo'/>
                                            </a>
                                        </div> : ''
                                    }
                                </div>
                                ))
                            }

                        </div>
                    </div>
                    <div id='vehicleFav2Box'className='box'>
                        <div id="personalFav" className='box'>Our Personal Favorites</div>
                        <div id='vehicleFav2' className='box'>
                            {
                                favCars.car2?.map((car, index) => (
                                <div className='box' id='car2'> 
                                    { car.carImage != 'N/A'?       
                                        <div className='box'>
                                            <a>
                                                <img className="imgCar" src={car.carImage} alt='Vehicle Poster'/>
                                            </a>
                                        </div> : ''
                                    }
                                </div>
                                ))
                            }


                            <h3 className='box'>Kia K5 GT-Line</h3>
                            <VehicleFav2/>
                            <div>
                                {
                                    favCars.car2?.map((car, index) => (
                                    <div className='box' id='car2'> 
                                        { car.carPDF != 'N/A'?       
                                            <div>
                                                <a href={car.carPDF} target="_blank">
                                                    <img src="http://localhost:4001/PdfImg.png" alt='PdfLogo'/>
                                                </a>
                                            </div> : ''
                                        }
                                    </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    <div id='vehicleFav3' className='box'>
                        {
                            favCars.car3?.map((car, index) => (
                            <div className='box' id='car3'> 
                                { car.carImage != 'N/A'?       
                                    <div className='box'>
                                        <a>
                                            <img className="imgCar" src={car.carImage} alt='Vehicle Poster'/>
                                        </a>
                                    </div> : ''
                                }
                            </div>
                            ))
                        }

                        <h3 className='box'>Honda Civic Type R</h3>
                        <VehicleFav3/>
                        <div>
                                {
                                    favCars.car3?.map((car, index) => (
                                    <div className='box' id='car3'> 
                                        { car.carPDF != 'N/A'?       
                                            <div>
                                                <a href={car.carPDF} target="_blank">
                                                    <img src="http://localhost:4001/PdfImg.png" alt='PdfLogo'/>
                                                </a>
                                            </div> : ''
                                        }
                                    </div>
                                    ))
                                }
                            </div>
                        
                        <div id='lightLink'></div>
                    </div>
                </div>
                <hr/>
                <br/>
                <div id='lightsDiv' className='box'>
                    <div id='innerMenu1' className='box'>KnowUrLights</div>
                </div>
                <LightsTable /> 
                <footer>
                    Website by Arturo Duran &copy;
                </footer>
                <br/>
            </div>
);
};

export default Home;
