import React from 'react'
import { Link } from 'react-router-dom'
import { IoFastFoodOutline } from "react-icons/io5";





const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <Link className="navbar-brand" href="#">  Navbar</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  style={{fontSize:"20px", fontWeight:"500px", }} className="nav-link active" aria-current="page" to={'/'}> <IoFastFoodOutline  /> Recipe website</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link " to={'/login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to={'/signup'}>Sign-up</Link>
        </li> */}
    
      </ul>
   
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
