import React from "react";
import "../App.css";
import "./productListHome.css";
import productList from "./dummyList.js";

function ProductListHome() {
	return (
		<div>
			<div className="gridContainer">
				{productList.map((el) => {
					return (
						<div className="row">
							<div className="card" key={el.id}>
								<img src={el.image} className={el.name} alt={el.name} />
								<h3>{el.name}</h3>
								<p>{el.description}</p>
								<button>Ver más</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProductListHome;
