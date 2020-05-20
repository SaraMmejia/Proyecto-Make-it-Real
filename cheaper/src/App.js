import React from 'react';
import './App.css';
import Slider from './Components/slider';
import FormClient from "./Components/formClient.js";
import NewProviderFormCreate from "./Components/newProviderForm.js";
import ProductListHome from "./Components/productListHome.js";
import Home from "./Components/Home.js";
import NavBar from "./Components/NavBar.js"

function App() {
	return (
	<div className="App">
		<NavBar/>
		<Home /> 
		<Slider/>
		<FormClient />
		<NewProviderFormCreate />
		<ProductListHome />
		</div>
	);
}

//En esta sesión del código sólo se está renderizando el encabezado del home, falta anexarle todo lo de las rutas.

export default App;