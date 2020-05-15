import React from 'react';
import './newProviderForm.css';
import logo from '../assets/logo.png';



class NewProviderForm extends React.Component{

  render(){
    return (

    <div className="formContainer">

      <img src={logo} className="logo" alt="Cheaper"/>

      <h1>Nuevo proveedor</h1>

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
        <label htmlFor="nit">Nit:</label>
        <input
        type="number"
        name="nit"
        id="nit"
        // onChange={handleChange}
        // value={nit}
        />
        <label htmlFor="company">Compañía:</label>
        <input
        type="text"
        name="company"
        id="company"
        // onChange={handleChange}
        // value={company}
        />
        <label htmlFor="branchName">Nombre de sucursal:</label>
        <input
        type="text"
        name="branchName"
        id="branchName"
        // onChange={handleChange}
        // value={branch}
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

export default NewProviderForm;
