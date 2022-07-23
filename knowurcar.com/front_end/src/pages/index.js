// import React from 'react';

// const Home = () => {
// return (
// 	<div>
// 	<h1>Welcome to GeeksforGeeks</h1>
// 	</div>
// );
// };

// export default Home;

import '../AppController.css';
import React from 'react';
import LightsTable from '../LightsTable/LightsTable';
import VehicleFav1 from '../VehiclesFav/VehicleFav1';
import VehicleFav2 from '../VehiclesFav/VehicleFav2';
import VehicleFav3 from '../VehiclesFav/VehicleFav3';
import CarFilter from '../DropdownMenus/CarFilter';
// import CarMakes from './DropdownMenus/CarMakes';
// import CarYears from './DropdownMenus/CarYears';
// import CarModels from './DropdownMenus/CarModels';
// import CarTrims from './DropdownMenus/CarTrims';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/about';
import Blogs from '../pages/blogs';
import SignUp from '../pages/signup';
import Contact from '../pages/contact';

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

    const refreshPage = ()=>{
        // window.parent.location = window.parent.location.href;
        window.location.href='/';
    }

    return (
    <div className="App">
        <div id='container' >
                <div id='navBar1' className='box'>
                    <span className="navItem">
                        <img onClick={() => {refreshPage()}} id="navLogo" src="http://localhost:4001/KUCLogo.png" alt="logo"/>
                    </span>
                    <span className="navItem kulightNav">
                        <a href="#lightLink">Info about Dashboard Lights. Click Here!</a>
                    </span>
                </div>
            <div id='insideContainer'>
                <div className='box navBar2Text'>
                    <p className="navBar2Text">Select your vehicle below for more information.</p>
                </div>
                <div id='navBar2' className='box'>
                    <div className='box'>
                        <CarFilter />
                        {/* <input className='box vehicleInput' type='text' placeholder='Vehicle Year'/> */}
                        {/* <CarMakes /> */}
                        {/* <input className='box vehicleInput' type='text' placeholder='Vehicle Make'/> */}
                        {/* <CarYears /> */}
                        {/* <div id='LookUpDiv'> */}
                        {/* <span id='lookUpBtn' onClick={() => {}}>
                            Look up Model & Trim
                        </span> */}
                        {/* </div> */}
                        {/* <input className='box vehicleInput' type='text' placeholder='Vehicle Model'/> */}
                        {/* <br/> */}
                        {/* <CarModels/> */}
                        {/* <input className='box vehicleInput' type='text' placeholder='Vehicle Trim'/> */}
                        {/* <CarTrims/> */}
                    </div>
                </div>
                <div id='LookUpDiv'>
                    {/* <div id='lookUpBtn' onClick={() => {}}>
                        Look up Vehicle
                    </div> */}
                    <Router>
											<Navbar />
											<Routes>
												<Route path='/about' element={<About/>} />
												<Route path='/contact' element={<Contact/>} />
												<Route path='/blogs' element={<Blogs/>} />
												<Route path='/sign-up' element={<SignUp/>} />
											</Routes>
										</Router>
                </div>
                <hr/>
                <br/>
                <div id='vehicleFavContainer' className='box'>
                    <div id='vehicleFav1' className='box'>
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
        </div>
    </div>
    )
}

export default Home;
