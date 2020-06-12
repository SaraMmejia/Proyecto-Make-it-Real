import React from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import Toolbar from "./sideDrower-Toolbar/toolbar.js";
import SideDrawerClient from "./sideDrower-Toolbar/sideDrawerClient.js";
import Backdrop from "./sideDrower-Toolbar/Backdrop";
import "./productDescription.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCamera,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
// import productList from './dummyList';

class ProductDescriptionClient extends React.Component {
  state = {
    sideDrawerOpen: false,
    name: "",
    description: "",
    price: 0,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentDidMount() {
    console.log(this.props);
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/products/show/${this.props.match.params.id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        this.setState(response.data);
      })
      .catch((error) => {
        localStorage.removeItem("token");
        // history.push('/');
      });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="ProductDescription">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawerClient show={this.state.sideDrawerOpen} />
        {backdrop}

        <div className="NavBusqueda-ProductDescription">
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

        <div className="buttons">
          <Link to={"/"}>
            <button className="agregar">Agregar a lista de compras</button>
          </Link>
        </div>

        <div className="ProductDescription-Card" key={this.state._id}>
          <h4 className="description-title">{this.state.name}</h4>

          <div className="container-img">
            <img
              className="img"
              src={this.state.picture}
              alt={this.state.picture}
            />
          </div>

          <p className="paragraph-description">{this.state.description}</p>

          <div className="description-article  ">
            <div className="price-gral">
              <h5>Precio</h5>
              <h6 className="price">{this.state.price}</h6>
            </div>
            <div className="cant-gral">
              <h5 className="cant">1</h5>
              <h6>Cantidad</h6>
            </div>
          </div>
        </div>
        <footer className="footer">
          <img src={logo} className="NavBar-Logo-Home" alt="Logo"></img>
          <p className="copyright">
            {" "}
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> All rights
            reserved 2020{" "}
          </p>
        </footer>
      </div>
    );
  }
}
export default ProductDescriptionClient;
