import React from "react";
import "./Home.css";
import logo from "../assets/logo.png";
import Slider from "../components/slider";
import ProductListHome from "../components/productListHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faShoppingCart,
	faSearch,
	faCamera,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";



function HomeClient() {
	return (
		<div className="Home">
			<div className="NavBar-Container">
				<nav className="NavBar-Parts">
					<FontAwesomeIcon icon={faBars} className="NavBar-Icons" />
					<img src={logo} className="NavBar-Logo-Home" alt="Logo"></img>
					<FontAwesomeIcon icon={faShoppingCart} className="NavBar-Icons" />
				</nav>
			</div>
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
			<Slider/>
			<ProductListHome/>

		</div>
	);
}

export default HomeClient;