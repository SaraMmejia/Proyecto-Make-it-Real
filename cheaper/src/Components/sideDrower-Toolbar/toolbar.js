import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import logo from "../../assets/logo.png";
import './toolbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faShoppingCart

} from "@fortawesome/free-solid-svg-icons";


const Toolbar = props =>(
    
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
    
            <img src={logo}  className="toolbar-logo"></img> 
            <FontAwesomeIcon icon={faShoppingCart} className="NavBar-Icons" />
            

        </nav>
    </header>
    );


export default Toolbar;