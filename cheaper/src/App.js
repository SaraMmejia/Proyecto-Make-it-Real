import React from "react";
import "./App.css";
import ClientForm from "./pages/pgFormClient.js";
import NewProvider from "./pages/pgNewProviderFormCreate.js";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar.js";
import IngresoSatisfactorio from "./pages/pgHome.js";
import ProductListHome from "../src/Components/productListHome";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	Link,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/" component={IngresoSatisfactorio} />
					<Route exact path="/NewProviderFormCreate" component={NewProvider} />
					<Route exact path="/FormClient" component={ClientForm} />
					<Route path="*" component={IngresoSatisfactorio} />
				</Switch>
			</Router>
		</div>
	);
}

//En esta sesión del código sólo se está renderizando el encabezado del home, falta anexarle todo lo de las rutas.

export default App;
