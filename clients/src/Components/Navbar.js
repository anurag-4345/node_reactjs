import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
function Navbar() {

return(
        <div className="container">
        <nav  className="navbar navbar-expand navbar-dark  bg-success">
<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
  
      <li className="nav-item">
        <NavLink className="nav-link" to="/"> Home</NavLink>
      </li>
    
      <li className="nav-item">
        <NavLink className="nav-link" to="/about"> About </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact"> Contact us</NavLink>
      </li>
    </ul>
  </div>
</nav>

</div>
  )
}

export default withRouter(Navbar);
