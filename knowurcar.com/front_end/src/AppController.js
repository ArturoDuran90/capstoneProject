import './AppController.css';
import React from 'react';
import CarFilter from './DropdownMenus/CarFilter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import VehicleInfo from './pages/vehicleInfo';
import { NavLink } from "react-router-dom";

function AppController() {
    const refreshPage = ()=>{
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
                <hr/>
                <br/>
        </div>
    </div>
    )
}

export default AppController;
