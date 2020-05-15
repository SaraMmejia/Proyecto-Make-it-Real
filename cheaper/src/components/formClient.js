import React from 'react';
import logo from '../images/cheaper.png';
import './formClient.css';

class FormClient extends React.Component {

  render() {
    return (

      <div className="formContainer">

        <img src={logo} className="logo" alt="Cheaper" />


        <h1>Ingresa tus datos</h1>

        <form className="supliersForm">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            id="name"
          //onChange={handleChange}
          //value={name}
          />
          <label htmlFor="lastname">Apellido:</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
          // onChange={handleChange}
          // value={lastname}
          />
          <label htmlFor="providerEmail">Email:</label>
          <input
            type="email"
            name="providerEmail"
            id="providerEmail"
          // onChange={handleChange}
          // value={lastname}
          />


          <label htmlFor="location">Tipo de documento:</label>
          <select name="location" id="location">
            <option value="Bogotá">Cédula de ciudadanía</option>
            <option value="Cali">Cédula de extrnjería</option>
            <option value="Medellín">Pasaporte</option>
          </select>


          <label htmlFor="nit"># de documento</label>
          <input
            type="number"
            name="nit"
            id="nit"
          // onChange={handleChange}
          // value={nit}
          />
          <label htmlFor="company">Fecha de nacimiento</label>
          <input
            type="date"
            name="company"
            id="company"
          // onChange={handleChange}
          // value={company}
          />

          <label htmlFor="location">Ubicación:</label>
          <select name="location" id="location">
            <option value="Bogotá">Bogotá</option>
            <option value="Cali">Cali</option>
            <option value="Medellín">Medellín</option>
          </select>

          <label htmlFor="BranchAdress">Dirección:</label>
          <input
            type="text"
            name="BranchAdress"
            id="BranchAdress"
          // onChange={handleChange}
          // value={adress}
          />

          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            id="username"
          // onChange={handleChange}
          // value={username}
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
          // onChange={handleChange}
          // value={password}
          />
          <label htmlFor="passwordTwo">Confirmar contraseña:</label>
          <input
            type="password"
            name="passwordTwo"
            id="passwordTwo"
          // onChange={handleChange}
          // value={password}
          />
          <button type="submit">Enviar</button>
        </form>
        
      </div>


    );
  }
}

export default FormClient;

