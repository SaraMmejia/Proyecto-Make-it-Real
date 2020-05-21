import React from "react";
import logo from "../assets/logo.png";
import "./Registry.css";
import {Link} from "react-router-dom"



class Registry extends React.Component {
	

	render (){
		return (
			<div className="App">
				<div className="PaginadeRegistro">
					<img src={logo} className="NavBar-Logo"></img>
					<div className="PaginaDeRegistro-Formurlario">
						<h1 className="Bienvenido"> Bienvenido a Cheaper </h1>
						<p className="Frase">Encuentra las opciones más económicas </p>
						<div className="Botones-Ingreso">
							<Link to="/login" className ="Boton-IniciarSesion" >Iniciar Sesión</Link>
							<Link to="/FormClient" className="Boton-Registrarse">Registrarse</Link>
							<Link to="/NewProviderFormCreate"className="Boton-CrearEmpresa" >
								Crear una cuenta de empresa
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}

export default Registry;
