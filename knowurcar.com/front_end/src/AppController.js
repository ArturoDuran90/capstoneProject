import './AppController.css';
import React from 'react';
import { useState } from 'react';
import CarFilter from './DropdownMenus/CarFilter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import VehicleInfo from './pages/vehicleInfo';
import { NavLink } from "react-router-dom";

function AppController() {
    const refreshPage = ()=>{
		window.location.href='/';
	}

    // const [carImages, setCarImages] = useState('');
    // var carImagesURL = `https://api.carsxe.com/images?key=e8kazl88v_mbh876r64_w6ouszltm&year=${year}&make=${makeSelect}&model=${modelSelect}&trim=${vehTrimSelect}&format=json`;

    const [val, setVal] = useState('');

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
                <div id='dropdownMenus'>
				<div className='box navBar2Text'>
                    <p className="navBar2Text">Select your vehicle below for more information.</p>
                </div>
                <div id='navBar2' className='box'>
                    <div className='box'>
                        <CarFilter onChange={(props)=> setVal(props)}/>
                    </div>
                </div>
                <div id='LookUpDiv'>
                    <Router >
                        <NavLink id='lookUpBtn' to={`/vehicleInfo${val}`}>
			                Look Up Vehicle
		                </NavLink>
						<Routes>
						    <Route path='/' exact element={<Home/>} />
                            <Route path={`/vehicleInfo${val}`} element={<VehicleInfo/>} />
		    			</Routes>
					</Router>
                </div>
                </div>
                <hr/>
                <br/>
        </div>
    </div>
    )
}

export default AppController;
