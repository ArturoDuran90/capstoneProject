import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
return (
		<NavLink id='lookUpBtn' to="/vehicleInfo">
			Look Up Vehicle
		</NavLink>
	);
};

export default Navbar;
