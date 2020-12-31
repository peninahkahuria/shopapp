import React from 'react';
import { NavLink } from "react-router-dom";
function Header() {
    return(
        <div class="topnav">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/Converse">Converse</NavLink>
  <NavLink to="/Jordans">Jordans</NavLink>
  <NavLink to="/Footer">Contact</NavLink>
  <NavLink className="fancy-button" to="/Login">
      <i className="material-icons"></i>Login
    </NavLink>
  <input type="text" placeholder="Search.."></input>
  {/* <button type="submit"><i class="fa fa-search"></i></button> */}
  <h1>SHOE GAME STORE</h1>
</div>
    )
}
export default Header
