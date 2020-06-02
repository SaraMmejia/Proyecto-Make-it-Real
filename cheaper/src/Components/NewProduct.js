import React from 'react';
import logo from "../assets/logo.png";
import Toolbar from './sideDrower-Toolbar/toolbar.js'
import SideDrawer from './sideDrower-Toolbar/sideDrawer.js'
import Backdrop from './sideDrower-Toolbar/Backdrop'
import "./NewProduct.css";
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


class NewProduct extends React.Component {
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


                <div className="title">
                    <label htmlFor="">Nombre del producto</label>
                    <input type="text" placeholder="Ingresa el nombre del producto" />
                </div>

                <div class="container-img">
                    <input type="file" className="file-img"></input>
                </div>

                <textarea name="paragraph-description" id="" cols="45" rows="5" placeholder="Descripcion del producto">
                </textarea>

                <div className="description-article  ">
                    <div className="price-gral">
                        <input type="text" className="price" placeholder="$" />
                        <h6>Precio</h6>
                    </div>
                    <div className="cant-gral">
                        <input type="text" className="cant" placeholder="#" />
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
export default NewProduct;