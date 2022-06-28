import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo.svg'; 

//BEM->Block Element Modiefier



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="PROJ1__navbar">
      <div className="PROJ1__navbar-links">
        <div className="PROJ1__navbar-links_logo">
          <img src={logo} alt="logo"/>

        </div>
        <div className="PROJ1__navbar-links_container">
        <p><a href="#home">Home</a></p>
          <p><a href="#wPROJ1">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="PROJ1__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="PROJ1__navbar-menu">
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu &&(
            <div className="PROJ1__navbar-menu_container scale-up-center">
              <din className="PROJ1__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wPROJ1">What is PROJ1</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
              </din>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar