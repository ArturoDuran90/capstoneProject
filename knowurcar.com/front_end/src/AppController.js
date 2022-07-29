import './AppController.css';
import React from 'react';
import CarFilter from './DropdownMenus/CarFilter';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import VehicleInfo from './pages/vehicleInfo';
import { NavLink } from "react-router-dom";

function AppController() {
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
                    <Router >
                        <NavLink id='lookUpBtn' to="/vehicleInfo">
			                Look Up Vehicle
		                </NavLink>
						<Routes>
						    <Route path='/' exact element={<Home/>} />
                            <Route path='/vehicleInfo' exact element={<VehicleInfo/>} />
		    			</Routes>
					</Router>
                </div>
                {/* <div id='LookUpDiv'> */}
                    {/* <div id='lookUpBtn' onClick={() => {}}> */}
                        {/* Look up Vehicle */}
                        
                    
                    {/* </div> */}
                    
                {/* </div> */}
                <hr/>
                <br/>
        </div>
    </div>
    )
}

export default AppController;
