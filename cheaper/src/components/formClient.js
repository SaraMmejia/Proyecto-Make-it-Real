import React from 'react';
import logo from '../images/cheaper.png';
import './formClient.css';


  function FormClient({name, lastname, clientEmail, doc, bornDate, adress, username, password, passwordTwo, handleChange}) {
    
    return (

      <div className="formContainer">

        <img src={logo} className="logo" alt="Cheaper" />


        <h1 className="titleForm">Ingresa tus datos</h1>

        <form className="clientForm">
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
          <label htmlFor="clientEmail">Email:</label>
          <input
            type="email"
            name="clientEmail"
            id="clientEmail"
            onChange={handleChange}
            value={clientEmail}
          />


          <label htmlFor="docType">Tipo de documento:</label>
          <select name="docType" id="docType">
            <option value="Bogotá">Cédula de ciudadanía</option>
            <option value="Cali">Cédula de extrnjería</option>
            <option value="Medellín">Pasaporte</option>
          </select>


          <label htmlFor="doc"># de documento</label>
          <input
            type="number"
            name="doc"
            id="doc"
            nonChange={handleChange}
            value={doc}
          />
          <label htmlFor="bornDate">Fecha de nacimiento</label>
          <input
            type="date"
            name="bornDate"
            id="bornDate"
             onChange={handleChange}
             value={bornDate}
          />

          <label htmlFor="location">Ubicación:</label>
          <select name="location" id="location">
            <option value="Bogotá">Bogotá</option>
            <option value="Cali">Cali</option>
            <option value="Medellín">Medellín</option>
          </select>

          <label htmlFor="adress">Dirección:</label>
          <input
            type="text"
            name="adress"
            id="adress"
            onChange={handleChange}
            value={adress}
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


export default FormClient;
