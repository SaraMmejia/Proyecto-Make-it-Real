import React from 'react';
import logo from "../assets/logo.png";
import Toolbar from './sideDrower-Toolbar/toolbar.js'
import SideDrawer from './sideDrower-Toolbar/sideDrawer.js'
import Backdrop from './sideDrower-Toolbar/Backdrop'
import "./productDescription.css";
import image from '../assets/hogar.jpg';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faShoppingCart,
    faSearch,
    faCamera,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

class ProductDescription extends React.Component {
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
            <div className="ProductDescription">

                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}

                <div className="NavBusqueda">
                    <FontAwesomeIcon icon={faSearch} classNAme="NavBusqueda-Icon" />
                    <input
                        type="text"
                        placeholder=" Realizar una busqueda."
                        className="NavBusqueda-Busqueda"
                    />
                    <FontAwesomeIcon icon={faCamera} className="NavBusqueda-Icon" />
                </div>

                <div classsName="Ubicacion">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="Ubicacion-Icon" />
                    <input
                        type="text"
                        placeholder=" Ubicación."
                        className="Ubicacion-Busqueda"
                    />
                </div>

                <div className="buttons">
                    <Link to="/"><button className="edit">Editar producto</button></Link>
                    <Link to="/"><button className="delete">Eliminar producto</button></Link>
                    <Link to="/"><button className="create">Nuevo producto</button></Link>
                </div>

                <h4 className="description-title">Cubre lecho italiano</h4>

                <div class="container-img">
                    <img class="img" src={image} alt="hogar" />
                </div>

                <p className="paragraph-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc finibus mauris sed maximus convallis.
                    Nullam vulputate tempor nunc, ut sodales tellus rhoncus ac.
                    Praesent id hendrerit orci. In ornare hendrerit lacus, vitae maximus lectus bibendum eu.
                    Pellentesque quis sodales magna, vel placerat nisl.
                </p>

                <div className="description-article  ">
                    <div className="price-gral">
                        <h5>Precio</h5>
                        <h6 className="price">$300.000</h6>
                    </div>
                    <div className="cant-gral">
                        <h5 className="cant">1</h5>
                        <h6>Cantidad</h6>
                    </div>
                </div>
                
                <footer className="footer">
                    <img src={logo} className="NavBar-Logo-Home"></img>
                    <p className="copyright"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> All rights reserved 2020 </p>
                </footer>
            </div>
        )
    }
}
export default ProductDescription;