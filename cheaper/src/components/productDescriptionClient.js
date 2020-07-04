import React from 'react';
import axios from "axios";
import logo from "../assets/logo.png";
import "./productDescription.css";
import NavBarClient from './NavBarClient.js'
import { Link } from "react-router-dom"


class ProductDescriptionClient extends React.Component {
  state = {
    sideDrawerOpen: false,
    id:'',
    name: '',
    description: '',
    price: 0,

  };


  componentDidMount() {
    console.log(this.props)
    const token = localStorage.getItem('token');
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/products/show/${this.props.match.params.id}`,
      headers: {
        'Authorization': token
      }
    })
      .then(response => {
        this.setState(response.data)
      })
      .catch(error => {
        localStorage.removeItem('token');
        // history.push('/');
      })
  }

  render() {

    const handleSubmit = (id) => {
      let arr = [];
      return (e) => {
        e.preventDefault();
        arr = localStorage.getItem("cartList");
        if (arr === null) {
          arr = localStorage.setItem("cartList", id);
        } else {
          arr = localStorage.setItem("cartList", arr.concat(",", id));
        }
        console.log(arr)
      }
    }

    return (

      <div className="ProductDescription">

        <NavBarClient />

        <form onSubmit={handleSubmit(`${this.props.match.params.id}`)}>
 
            <button type="submit"
              className="btn-add-shoppingList"
              alt="Agregar">
            Agregar a lista de compras
            </button>

        </form>

        <div className="ProductDescription-Card" key={this.state._id}>
          <h4 className="description-title">
            {this.state.name}
          </h4>

          <div className="container-img">
            <img className="img"
              src={this.state.picture}
              alt={this.state.picture} />
          </div>

          <p className="paragraph-description">
            {this.state.description}
          </p>

          <div className="description-article  ">
            <div className="price-gral">
              <h5>Precio</h5>
              <h6 className="price">
                {this.state.price}
              </h6>
            </div>
            <div className="cant-gral">
              <h5 className="cant">1</h5>
              <h6>Cantidad</h6>
            </div>
          </div>
        </div>
        <footer className="footer">
          <img src={logo} className="NavBar-Logo-Home" alt="Logo"></img>
          <p className="copyright"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> All rights reserved 2020 </p>
        </footer>
      </div>
    )
  }
}
export default ProductDescriptionClient;
