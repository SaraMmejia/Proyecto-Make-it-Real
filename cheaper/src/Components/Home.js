import React from "react";
import "../Components/Home.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Home() {
	return (
		<div className="Home">
			<div class="NavBar-container">
				<nav className="navBar-parts">
					<FontAwesomeIcon icon={faBars} className="navBar-icons" />
					<img src={logo} className="navBar-logo"></img>
					<FontAwesomeIcon icon={faShoppingCart} className="navBar-icons" />
				</nav>
			</div>

			<div className="NavBusqueda">
				<FontAwesomeIcon icon={faSearch} classNAme="NavBusqueda-icon" />
				<input
					type="text"
					placeholder=" Realizar una busqueda."
					className="NavBusqueda-busqueda"
				/>
				<FontAwesomeIcon icon={faCamera} className="NavBusqueda-icon" />
			</div>

			<div classsName="ubicacion">
				<FontAwesomeIcon icon={faMapMarkerAlt} className="ubicacion-icon" />
				<input
					type="text"
					placeholder=" Ubicación."
					className="ubicacion-busqueda"
				/>
			</div>
		</div>
	);
}

export default Home;
