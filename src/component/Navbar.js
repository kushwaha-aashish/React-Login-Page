import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";


function Navbar() {
    const auth = useAuth()
 return <nav className="nav-primary">
 <NavLink to={"/"}>Home</NavLink>
 <NavLink to={"/about"}>About</NavLink>
 <NavLink to={"/products"}>Products</NavLink>
 <NavLink to={"/profile"}>Profile</NavLink>
 {!auth.user && (<NavLink to={"/login"}>Login</NavLink>)}
 </nav>
}

export default Navbar;