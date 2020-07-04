import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideDrawer from "./sideDrower-Toolbar/sideDrawer.js";
import Backdrop from "./sideDrower-Toolbar/Backdrop.js";
import Toolbar from "./sideDrower-Toolbar/toolbar.js";
import { Link } from "react-router-dom";
import {
  faSearch,
  faCamera,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

class NavBar extends React.Component {
  state = {
    name: "",
    sideDrawerOpen: false,
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { sideDrawerOpen, ...data } = this.state; //Excluimos sideDrawerOpen
    console.log(data);
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
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <div className="NavBusqueda-Home">
          <form onSubmit={this.handleSubmit}>
            <input
              className="NavBusqueda-Busqueda"
              type="text"
              placeholder=" Realizar una busqueda."
              name="name"
              value={this.state.name}
            />

            <Link to={`/providers/search/${this.state.name}`}>
              <FontAwesomeIcon icon={faSearch} className="NavBusqueda-Icon" />
            </Link>
          </form>
        </div>

        <div className="Ubicacion">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="Ubicacion-Icon" />
          <input
            type="text"
            placeholder=" Ubicación."
            className="Ubicacion-Busqueda"
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
