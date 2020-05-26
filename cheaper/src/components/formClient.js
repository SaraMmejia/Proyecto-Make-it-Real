import React from 'react';
import logo from '../assets/logo.png';
import "./formClient.css";

class FormClient extends React.Component {

  render() {
    return (
		<div clasName="App">	
			<div className="FormContainer">
				<img src={logo} className="NavBar-Logo"></img>
				<div className="PaginaNew-Client">
					<h1 className="TitleForm">Ingresa tus datos</h1>
					<div className="InputsNew-Client">
						<form className="ClientForm">
							<input className="Name" 
								type="text" 
								name="name"
								placeholder=" Nombre">  
							</input>
							<input className="LastName" 
								type="text"
								 name="lastname"
								placeholder=" Apellidos">  
						  	</input>
							  <input className="Correo" 
								type="text"
								 name="correo"
								placeholder=" Correo">  
						  	</input>
							<input className="Password" 
								type="password"
								 name="pasword"
								placeholder="Contraseña">  
						  	</input>
							<button className="SubmitClient" type="Submit">Enviar</button>
						</form>
					</div>
				</div>	
			</div>	
		</div>


    );
  }
}

export default FormClient;