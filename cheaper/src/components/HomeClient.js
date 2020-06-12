import React from "react";
import "./Home.css";
import Slider from "../components/slider";
import ProductListHomeClient from "../components/productListHomeClient.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideDrawerClient from "./sideDrower-Toolbar/sideDrawerClient.js";
import Backdrop from "./sideDrower-Toolbar/Backdrop";
import Toolbar from "./sideDrower-Toolbar/toolbar.js";
import {
  faSearch,
  faCamera,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

class HomeClient extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="Home">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawerClient show={this.state.sideDrawerOpen} />
        {backdrop}

        <div className="NavBusqueda-Home">
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
        <Slider />
        <ProductListHomeClient />
      </div>
    );
  }
}

export default HomeClient;
