import React from "react";
import './App.css';
import ProductListHome from "./components/productListHome.js";
import Home from "./Components/Home";
import NewProviderFormCreate from "./pages/NewProviderFormCreate";

function App() {
	return (
		<div className="App">
			<ProductListHome />
			<Home />
			<NewProviderFormCreate />
		</div>
	);
}

//En esta sesión del código sólo se está renderizando el encabezado del home, falta anexarle todo lo de las rutas.

export default App;
