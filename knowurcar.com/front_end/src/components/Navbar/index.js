import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activestyle>
			About
		</NavLink>
		<NavLink to="/contact" activestyle>
			Contact Us
		</NavLink>
		<NavLink to="/blogs" activestyle>
			Blogs
		</NavLink>
		<NavLink to="/sign-up" activestyle>
			Sign Up
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
