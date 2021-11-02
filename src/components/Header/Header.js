import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header position-relative">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand fs-3 p-2" >Nexus Clinic</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/home" className="nav-link active fs-4 p-2" aria-current="page" >Home</Link>
                </li>
  
  
                <li className="nav-item">
                  <Link to="/blog" className="nav-link active fs-4 p-2" >Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link active fs-4 p-2 ">Contact </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link active fs-4 p-2 ">Register </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link active fs-4 p-2 ">Login </Link>
                  </li>
  
  
  
              </ul>
            </div>
          </div>
        </nav>
       
      </div>
    );
  };

export default Header;