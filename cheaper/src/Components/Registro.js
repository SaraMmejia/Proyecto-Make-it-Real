import React from "react";
import logo from "../assets/logo.png";
import "./Registro.css";

function Registro() {
	return (
		<div className="App">
			<div className="PaginadeRegistro">
				<img src={logo} className="NavBar-Logo"></img>
				<div className="PaginaDeRegistro-Formurlario">
					<h1 className="Bienvenido"> Bienvenido a Cheaper </h1>
					<p className="Frase">Encuentra las opcioness más económicas </p>
					<div className="Botones-Ingreso">
						<button className="Boton-IniciarSesion">Iniciar Sesión </button>
						<button className="Boton-Registrarse">Registrarse</button>
						<button className="Boton-CrearEmpresa">
							Crear una cuenta de empresa
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Registro;
