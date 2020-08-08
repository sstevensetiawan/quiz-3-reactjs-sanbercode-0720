import React from "react";
import {Link} from "react-router-dom";
import logo from './public/img/logo.png';
import './public/css/style.css';

const Navigation = () => {
  return (
    <>
    <header>
      <img src={logo} alt="logo" style={{width: '150px'}}/>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/MovieListEditor">Movie List Editor</Link>
          </li>
          <li>
            <Link to="/LoginForm">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
    <br></br><br></br>
    </>
  )
}

export default Navigation