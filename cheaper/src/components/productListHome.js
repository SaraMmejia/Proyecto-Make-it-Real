import React, { useState, useEffect } from 'react';
import "./productListHome.css";
import axios from "axios";

function ProductListHome() {

let [products, setProducts] = useState([]);


useEffect(() => {
	const token = localStorage.getItem('token');
	axios({
		method: 'GET',
		baseURL: process.env.REACT_APP_SERVER_URL,
		url: '/products/all',
		headers: {
			'Authorization': token
		}
	})
		.then(response  => {
			setProducts(response.data)
		})
		.catch(error => {
			localStorage.removeItem('token');
			// history.push('/');
		})

}, []);

	return (
		<div className="App">

			<div className="gridContainer">
				{products.map((data) => {
					return (
						<div className="row-List">

							<div className="cards" key={data._id}>
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
//
// const [products] = useState([]);
// //Nuevo método:
//
// useEffect(() => {
// 	const token = localStorage.getItem('token');
// 	axios({
// 		method: 'GET',
// 		baseURL: process.env.REACT_APP_SERVER_URL,
// 		url: '/products',
// 		headers: {
// 			'Authorization': token
// 		}
// 	})
// 		.then(({ data }) => console.log(data))
// 		.catch(error => {
// 			localStorage.removeItem('token');
// 			history.push('/');
// 		})
// }, [history]);
// 		.catch(error => console.log(error));

// .then(({ response }) => setProducts(response.data, (products: response.data)))
