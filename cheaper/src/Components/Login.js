import React from "react";
import logo from "../assets/logo.png";
import "./Login.css";
import {Link} from "react-router-dom";

function Login({
	email,
	password,
	handleChange,
	handleSubmit,
}) {
	return (
		<div className="App">
			<div className="Login">
				<img src={logo} className="NavBar-Logo" alt="Logo"></img>
				<div className="Pagina-Login">
					<h1 className="Bienvenido"> Bienvenido a Cheaper </h1>
					<p className="Frase">Encuentra las opciones más económicas </p>
					<div className="Botones-Login">

						<form onSubmit={handleSubmit}>
<<<<<<< HEAD
						<input className="Input-Correo" type="text" name="correo" placeholder=" Correo" onChange={handleChange} value={correo}></input>
						<input className="Input-Password" type="password" name="password" placeholder=" Constraseña"  onChange={handleChange} value={password}></input>
						<Link to="/Home" className="SubmitButton">Iniciar Sesión</Link>
=======
						<input className="Input-Correo"
						type="text"
						name="email"
						placeholder=" Correo"
						onChange={handleChange}
						value={email}></input>
						
						<input className="Input-Password"
						type="password"
						name="password"
						placeholder=" Constraseña"
						onChange={handleChange}
						value={password}></input>
						<button className="SubmitButton" type="submit">Iniciar Sesión</button>
>>>>>>> e289d797e71621d153de269f910b6fd1716dfa10
						</form>
					</div>
				</div>
			</div>
		</div>
	);

}


 export default Login;
