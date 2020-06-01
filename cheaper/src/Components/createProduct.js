import React from 'react';
import './createProduct.css';
import {Link} from "react-router-dom"

class CreateProduct extends React.Component {

    render() {
      return (
        <div>
          <Link to="/products/edit" className ="btn-createProduct" >Crear Producto</Link>
        </div>

        )

    }
}

export default CreateProduct;
