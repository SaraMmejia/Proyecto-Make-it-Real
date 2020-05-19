import React from 'react';
import '../App.css';
import NewProviderFormCreate from "../components/newProviderForm.js";
import Home from "../components/Home.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

function NewProvider() {
	return (
		<div className="App">
     <NewProviderFormCreate />
		</div>
	);
}
export default NewProvider;
