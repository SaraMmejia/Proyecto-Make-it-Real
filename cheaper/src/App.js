import React from 'react';
import './App.css';
import FormClient from './components/formClient';

function App() {

  return (
    <div className="App">

      <FormClient />

    </div>
  );

	return (
		<div className="App">
			<NewProviderFormCreate />
			<ProductListHome />
			<Home />
			<NewProviderFormCreate />
		</div>
	);
}

//En esta sesión del código sólo se está renderizando el encabezado del home, falta anexarle todo lo de las rutas.

export default App;
