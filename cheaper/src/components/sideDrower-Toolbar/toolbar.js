import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";
import logo from "../../assets/logo.png";
import "./toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <img src={logo} className="toolbar-logo" alt="Logo"></img>
      <div className="shoppingCar-botton">
        <FontAwesomeIcon icon={faShoppingCart} className="NavBar-Icons" />
      </div>
    </nav>
  </header>
=======


const Toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>

            <img src={logo} className="toolbar-logo" alt="Logo"></img>



        </nav>
    </header>
>>>>>>> 9675a783053e31362e04365d8ac7c16d369dfdd2
);

export default Toolbar;
