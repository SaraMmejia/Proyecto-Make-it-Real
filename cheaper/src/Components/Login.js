import React from "react";
import logo from "../assets/logo.png";
import "./Login.css";


function Login({
	correo,
	password,
	handleChange,
	handleSubmit,
}) {
	return (
		<div className="App">
			<div className="Login">
				<img src={logo} className="NavBar-Logo"></img>
				<div className="Pagina-Login">
					<h1 className="Bienvenido"> Bienvenido a Cheaper </h1>
					<p className="Frase">Encuentra las opciones más económicas </p>
					<div className="Botones-Login">
						<form onSubmit={handleSubmit}>
						<input className="Input-Correo" type="text" name="correo" placeholder=" Correo" onChange={handleChange} value={correo}></input>
						<input className="Input-Password" type="password" name="password" placeholder=" Constraseña"  onChange={handleChange} value={password}></input>
						<button className="SubmitButton">Iniciar Sesión</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);

}
	

 export default Login;