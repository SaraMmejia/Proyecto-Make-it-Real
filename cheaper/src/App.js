import React from 'react';
import './App.css';
import Slider from './components/slider';
import FormClient from './components/formClient';

function App() {
	return (
		<div className="App">
			<NewProviderFormCreate />
			<ProductListHome />
			<Home />
			<NewProviderFormCreate />
      <FormClient />
      <Slider/>
		</div>
	);
}

//En esta sesión del código sólo se está renderizando el encabezado del home, falta anexarle todo lo de las rutas.

export default App;
