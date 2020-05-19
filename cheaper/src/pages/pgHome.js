import React from 'react';
import '../App.css';
import Slider from '../components/slider';
import ProductListHome from "../components/productListHome.js";
import Home from "../components/Home.js";


function IngresoSatisfactorio() {
	return (
		<div className="pgHome">
		 <Home />
		 <Slider/>
		 <ProductListHome />
		</div>
	);
}
export default IngresoSatisfactorio;
