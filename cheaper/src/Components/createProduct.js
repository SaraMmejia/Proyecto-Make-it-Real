import React from 'react';
import './createProduct.css';
import {Link} from "react-router-dom"

class CreateProduct extends React.Component {

    render() {
      return (
        <span className ="span-createProduct">
          <Link to="/products/edit" className ="btn-createProduct" >Crear Producto</Link>
        </span>

        )

    }
}

export default CreateProduct;