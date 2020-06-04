import React from 'react';
import axios from 'axios';
import logo from "../assets/logo.png";
import Toolbar from './sideDrower-Toolbar/toolbar.js'
import SideDrawer from './sideDrower-Toolbar/sideDrawer.js'
import Backdrop from './sideDrower-Toolbar/Backdrop'
import "./NewProduct.css";
// import image from '../assets/hogar.jpg';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faCamera,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";


class NewProduct extends React.Component { //Estado del menu lateral
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

    stateProduct = {
        name:"",
        picture:"",
        description:"",
        price :0,
        category :""
    }

    onSubmit = async e =>{
        e.preventDefault()
        const res =await axios.post('http://localhost:8080/products',{
            name: this.stateProduct.name,
            picture: this.stateProduct.picture,
            description: this.stateProduct.description,
            price: this.stateProduct.price,
            category: this.stateProduct.category
        })
        console.log(res);
    }
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
                    <Link to="/edit"><button className="edit">Editar producto</button></Link>
                    <Link to="/delete"><button className="delete">Eliminar producto</button></Link>
                    <Link to="/create"><button className="create">Nuevo producto</button></Link>
                </div>

                <form>
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

                    <button type="submit" className="create-product">
                      Publicar
                    </button>

                </form>


                <footer className="footer">
                    <img src={logo} className="NavBar-Logo-Home" alt="Logo"></img>
                    <p className="copyright"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> All rights reserved 2020 </p>
                </footer>


            </div>


        )
    }
}
export default NewProduct;
