import React from "react";
import "./productListHome.css";
import axios from "axios";
// import productList from "./dummyList";

const productList = async () => {
	// const { ...data } = this.state;
	try{
		return await axios({
		method: "GET",
		baseURL: "http://localhost:8080",
		url: "/home",
		headers: {
			"Content-Type": "application/json",
		}
		})}
	catch (error){
			console.log(error)
		}
};

function ProductListHome() {

let products = productList ();

	return (
		<div className="App">
			<div className="gridContainer">
				{products.map((data) => {
					return (
						<div className="row">
							<div className="cards" key={data.id}>
								<img
								src={data.productImage}
								className="Imagenes"
								alt={data.productImage} />
								<h3 className="H3-Productos">
								{data.productName}
								</h3>
								<p className="p-Productos">
								{data.productDescription}
								</p>
								<button className="VerMas">Ver más</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProductListHome;
