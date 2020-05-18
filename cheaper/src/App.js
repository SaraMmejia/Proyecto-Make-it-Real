import React from "react";
import "./App.css";
import Home from "./Components/Home";
import NewProviderFormCreate from "./pages/NewProviderFormCreate";
import ProductListHome from "../src/Components/productListHome";

function App() {
	return (
		<div className="App">
			<NewProviderFormCreate />
			<Home />
			<ProductListHome />
		</div>
	);
}

//En esta sesión del código sólo se está renderizando el encabezado del home, falta anexarle todo lo de las rutas.

export default App;
