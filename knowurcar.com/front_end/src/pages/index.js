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
import Home from '../pages/home';
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
      
        </div>
    </div>
    )
}

export default Home;
