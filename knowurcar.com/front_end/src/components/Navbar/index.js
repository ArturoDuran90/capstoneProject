import React from "react";
// import { Nav, NavLink, NavMenu }
// 	from "./NavbarElements";
import { NavLink } from "react-router-dom";

const Navbar = () => {
return (
		<NavLink id='lookUpBtn' to="/vehicleInfo">
			Look Up Vehicle
		</NavLink>
	);
};

export default Navbar;
