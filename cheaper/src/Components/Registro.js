import React from "react";
import logo from "../assets/logo.png";
import "./Registro.css";

class Registro extends React.Component {
	
	handleClick = (e) => {
	this.props.history.push("/FormClient")
	}

	handleOnClick = (e) => {
		this.props.history.push("/NewProvider")

	}

	render (){
		return (
			<div className="App">
				<div className="PaginadeRegistro">
					<img src={logo} className="NavBar-Logo"></img>
					<div className="PaginaDeRegistro-Formurlario">
						<h1 className="Bienvenido"> Bienvenido a Cheaper </h1>
						<p className="Frase">Encuentra las opciones más económicas </p>
						<div className="Botones-Ingreso">
							<button className="Boton-IniciarSesion">Iniciar Sesión </button>
							<button className="Boton-Registrarse" onClick={this.handleClick}>Registrarse</button>
							<button className="Boton-CrearEmpresa" onClick={this.handleOnClick}>
								Crear una cuenta de empresa
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}

export default Registro;
