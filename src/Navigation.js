import React, { useContext } from "react";
import {Link} from "react-router-dom";
import logo from './public/img/logo.png';
import './public/css/style.css';
import {LoginContext} from "./LoginContext"

const Navigation = () => {
  const [login,setLogin] = useContext(LoginContext)
  console.log(login)
  if(login === true){
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
          </ul>
        </nav>
      </header>
      <br></br><br></br>
      </>
    )
  }
  else{
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
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <br></br><br></br>
      </>
    )
  }
}

export default Navigation