import React from 'react';
import logo from "../assets/logo.png";
import './SearchProducts.css';
import Toolbar from './sideDrower-Toolbar/toolbar.js'
import SideDrawer from './sideDrower-Toolbar/sideDrawer.js'
import Backdrop from './sideDrower-Toolbar/Backdrop'
import productList from "./dummyList";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faShoppingCart,
    faSearch,
    faCamera,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";


class SearchProducts extends React.Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    };
    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        return (
            <div className="ProductSearch">

                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}

                <div className="NavBusqueda">
                    <FontAwesomeIcon icon={faSearch} className="NavBusqueda-Icon" />
                    <input
                        type="text"
                        placeholder=" Realizar una busqueda."
                        className="NavBusqueda-Busqueda"
                    />
                    <FontAwesomeIcon icon={faCamera} className="NavBusqueda-Icon" />
                </div>

                <div className="Ubicacion">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="Ubicacion-Icon" />
                    <input
                        type="text"
                        placeholder=" Ubicación."
                        className="Ubicacion-Busqueda"
                    />
                </div>


                <h5 className="title-search">Te damos las mejores opciones</h5>
                <div className="list">
                    {productList.map((el) => {
                        return (
                            <div className="row-search">
                                <div className="cards" key={el.id}>
                                    <img src={el.image} className={el.name} className="Imagenes" alt={el.name} />
                                    <h3 className="H3-Productos">{el.name}</h3>
                                    <p className="p-Productos">{el.description}</p>
                                    <button className="VerMas">Ver más</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <footer className="footer">
                    <img src={logo} className="NavBar-Logo-Home"></img>
                    <p className="copyright"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> All rights reserved 2020 </p>
                </footer>

            </div>

        )

    }

}

export default SearchProducts;