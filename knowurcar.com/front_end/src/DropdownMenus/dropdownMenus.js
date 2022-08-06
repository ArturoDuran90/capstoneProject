// import React from 'react';
// import { useState } from 'react';
// import CarFilter from './DropdownMenus/CarFilter';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/home';
// import VehicleInfo from './pages/vehicleInfo';
// import { NavLink } from "react-router-dom";

// const dropdownMenus = () => {

// 	// let options = {
// 	// 	"url": "urlGoesHere",
// 	// 	"method": "GET",
// 	// 	"processData": false
// 	// }
	
// 	// $.ajax(options).done((response)=>{
// 	// 	console.log(response)
// 	// })

// 	const [val, setVal] = useState('');
	
// return (
// 	<>
// 	<div id='dropdownMenus'>
// 				<div className='box navBar2Text'>
//                     <p className="navBar2Text">Select your vehicle below for more information.</p>
//                 </div>
//                 <div id='navBar2' className='box'>
//                     <div className='box'>
//                         <CarFilter onChange={(value)=> setVal(value)}/>
//                         {/* <div>{val}</div> */}
//                     </div>
//                 </div>
//                 <div id='LookUpDiv'>
//                     <Router >
//                         <NavLink id='lookUpBtn' to={`/vehicleInfo${val}`}>
// 			                Look Up Vehicle
// 		                </NavLink>
// 						<Routes>
// 						    <Route path='/' exact element={<Home/>} />
//                             <Route path={`/vehicleInfo${val}`} element={<VehicleInfo/>} />
// 		    			</Routes>
// 					</Router>
//                 </div>
//                 </div>
// 	</>
// );
// };

// export default dropdownMenus;
