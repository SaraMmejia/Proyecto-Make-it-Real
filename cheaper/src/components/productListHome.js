import React from "react";
import "./productListHome.css";
import productList from "./dummyList";

function ProductListHome() {
	return (
		<div className="App">
			<div className="gridContainer">
				{productList.map((el) => {
					return (
						<div className="row">
							<div className="cards" key={el.id}>
								<img src={el.image} className={el.name} className="Imagenes" alt={el.name} />
								<h3 className="H3-Productos">{el.name}</h3>
								<p className="p-Productos">{el.description}</p>
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
