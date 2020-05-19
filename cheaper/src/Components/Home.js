import React from "react";
import "../Components/Home.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faShoppingCart,
	faSearch,
	faCamera,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
	return (
		<div className="Home">
			<div class="NavBar-Container">
				<nav className="NavBar-Parts">
					<FontAwesomeIcon icon={faBars} className="NavBar-Icons" />
					<img src={logo} className="NavBar-Logo"></img>
					<FontAwesomeIcon icon={faShoppingCart} className="NavBar-Icons" />
				</nav>
			</div>

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
		</div>
	);
}

export default Home;