import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import './SearchProductsClients.css';
import NavBarClient from './NavBarClient.js'
import { Link } from "react-router-dom"
import agregarCarrito from "../assets/agregarCarrito.png"
import axios from "axios";

class SearchProductsClients extends React.Component {
    state = {
        name: "",
        cant: 0,
        products: [],
        cartList: []
    };

componentDidMount() {
    console.log(this.props)
    
    const { products, ...data } = this.props.match.params
    
    axios({
        method: "POST",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/clients/search/${this.props.match.params.name}`,
        data,
        headers: {
            "Content-Type": "application/json",
        },
     })
        .then(response => {
           this.setState({products: response.data})
            console.log(response.data);
        })
        .catch(error => {
            // history.push('/');
        })
}

/* componentDidUpdate(){
    console.log(this.props)

    const { products, ...data } = this.props.match.params

    axios({
        method: "POST",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/clients/search/${this.props.match.params.name}`,
        data,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => {
            this.setState({ products: response.data })
            console.log(response.data);
        })
        .catch(error => {
            // history.push('/');
        })
} */
handleSubmit = (e) => {

    e.preventDefault();
    let cart = localStorage.setItem("cartList", JSON.stringify(this.state.data._id))//concatenar
    console.log(cart);
    
} 
/* handleSubmit  = (id) => {
        return (e) => {
            e.preventDefault();
            let cart = localStorage.setItem("cartList", JSON.stringify(id))//concatenar
            console.log(cart);
        }
    }  */

handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
};

render() {
       
    const { products } = this.state;

    return (
    <div className="ProductSearch" key={this.props.match.params.name}>
    <NavBarClient />
        
    <h5 className="title-search">Te damos las mejores opciones</h5>
    <div className="gridClient_Container">
         {products.map((data) => {
            return (
                <div className="row-List">

                    <div className="cardsClient" key={data._id}>
                        
                        
                        <img
                            src={data.picture}
                            className="img-Products"
                            alt={data.picture} />
                        <div>
                            <h3 className="title-Products">
                                {data.name}</h3>
                            <h5 className="desc-Products">
                            <br />
                            
                            {data.description}              
                            </h5>
                        </div>
                        <div className="div-wrapperUno">
                            <h6 className="price-Products">
                                Precio:
                                {<br />}
                                {data.price}
                            </h6>
                            <Link
                                to={`/clients/products/show/${data._id}`}
                                className="VerMasClient" >Ver más</Link>
                        </div>
                        <form onSubmit={this.handleSubmit} key={data._id}>
                            <button type="submit"
                                className="btn-ShopingCart"
                                alt="Agregar" 
                                >

                                <img src={agregarCarrito} 
                                className="shopingCartClients-Products"/>

                            </button>

                            <input type="number" 
                                className="input-price-Products"
                                placeholder=" Cantidad"
                                name="cant"
                                onChange={this.handleChange}
                                value={this.state.cant}
                                />
                        </form>  
                        
                    </div>
                </div>
                );
            })}  
    </div>
    <footer className="footer">
        <img src={logo} className="NavBar-Logo-Home" alt="Logo"></img>
        <p className="copyright"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> All rights reserved 2020 </p>
    </footer>

</div>

)
}
}


export default SearchProductsClients;
//${this.props.match.params.id}
/* function SearchProducts() { */

/* let [products, setProducts] = useState([]);


useEffect(() => {
    console.log(this.props)
    /* const token = localStorage.getItem('token'); 
    axios({
        method: "POST",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/clients/search/:filter`,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => {
            setProducts(response.data)
            console.log(response)
        })
        .catch(error => {
            // history.push('/');
        })

}, []); */
{/* <Link to={`/clients/search/${this.state.name}`} */}
{/* <Link to={`/clients/search/shopingList`}
    alt="Agregar"
>

    <img src={agregarCarrito}
        className="shopingCartClients-Products" />

</Link> this.handleSubmit*/}