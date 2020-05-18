import React from "react";
import "../Components/newProviderForm.css";
import "./newProviderForm.css";
import logo from "../assets/logo.png";

function ProviderForm({
	name,
	lastname,
	providerEmail,
	nit,
	company,
	branchName,
	branchAdress,
	username,
	password,
	passwordTwo,
	handleChange,
	handleSubmit,
}) {
	return (
		<div className="formContainer">
			<img src={logo} className="logo" alt="Cheaper" />
			<h1 className="titleH1Form">Nuevo proveedor</h1>
			<form className="supliersForm" onSubmit={handleSubmit}>
				<label htmlFor="name">Nombre:</label>
				<input
					type="text"
					name="name"
					id="name"
					onChange={handleChange}
					value={name}
				/>
				<label htmlFor="lastname">Apellido:</label>
				<input
					type="text"
					name="lastname"
					id="lastname"
					onChange={handleChange}
					value={lastname}
				/>
				<label htmlFor="providerEmail">Email:</label>
				<input
					type="email"
					name="providerEmail"
					id="providerEmail"
					onChange={handleChange}
					value={providerEmail}
				/>
				<label htmlFor="nit">Nit:</label>
				<input
					type="number"
					name="nit"
					id="nit"
					onChange={handleChange}
					value={nit}
				/>
				<label htmlFor="company">Compañía:</label>
				<input
					type="text"
					name="company"
					id="company"
					onChange={handleChange}
					value={company}
				/>
				<label htmlFor="branchName">Nombre de sucursal:</label>
				<input
					type="text"
					name="branchName"
					id="branchName"
					onChange={handleChange}
					value={branchName}
				/>
				<label htmlFor="location">Ubicación:</label>
				<select name="location" id="location">
					<option value="Bogotá">Bogotá</option>
					<option value="Cali">Cali</option>
					<option value="Medellín">Medellín</option>
				</select>

				<label htmlFor="branchAdress">Dirección:</label>
				<input
					type="text"
					name="branchAdress"
					id="branchAdress"
					onChange={handleChange}
					value={branchAdress}
				/>

				<label htmlFor="username">Nombre de usuario:</label>
				<input
					type="text"
					name="username"
					id="username"
					onChange={handleChange}
					value={username}
				/>
				<label htmlFor="password">Contraseña:</label>
				<input
					type="password"
					name="password"
					id="password"
					onChange={handleChange}
					value={password}
				/>
				<label htmlFor="passwordTwo">Confirmar contraseña:</label>
				<input
					type="password"
					name="passwordTwo"
					id="passwordTwo"
					onChange={handleChange}
					value={passwordTwo}
				/>
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

export default ProviderForm;
