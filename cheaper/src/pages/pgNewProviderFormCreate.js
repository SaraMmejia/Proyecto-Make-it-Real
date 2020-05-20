import React from 'react';
import '../App.css';
import NewProviderFormCreate from "../components/newProviderForm.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

function NewProvider() {
	return (
		<div className="pgNewProviderFormCreate">
     <NewProviderFormCreate />
		</div>
	);
}
export default NewProvider;
