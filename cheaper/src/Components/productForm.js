import React from 'react';
import axios from 'axios';
import logo from "../assets/logo.png";
import Toolbar from './sideDrower-Toolbar/toolbar.js'
import SideDrawer from './sideDrower-Toolbar/sideDrawer.js'
import Backdrop from './sideDrower-Toolbar/Backdrop'
import "./NewProduct.css";
// import image from '../assets/hogar.jpg';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faCamera,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function ProductForm({
  id,
  name,
  picture,
  description,
  price,
  category,
  handleChange,
  handleSubmit,

}) {

return (
  <div className="ProductDescription" data-testid="productForm">

      <div className="NavBusqueda-NewProduct">
          <FontAwesomeIcon icon={faSearch} className="NavBusqueda-Icon" />
          <input
              type="text"
              placeholder=" Realizar una busqueda."
              className="NavBusqueda-Busqueda"
          />
          <FontAwesomeIcon icon={faCamera} className="NavBusqueda-Icon" />
      </div>

      <div className="Ubicacion">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="Ubicacion-Icon" />
          <input
              type="text"
              placeholder=" Ubicación."
              className="Ubicacion-Busqueda"
          />
      </div>

      <div className="buttons">

          <Link to="/products/edit/:id"><button className="edit">Editar producto</button></Link>
          <Link to="/products/delete/:id"><button className="delete">Eliminar producto</button></Link>
          <Link to="/products/create"><button className="create">Nuevo producto</button></Link>
      </div>

      <form className="ProductsForm" onSubmit={handleSubmit}>

          <div className="title">
              <label htmlFor="name">Nombre del producto</label>
              <input
              type="text"
              name="name"
              id="name"
              placeholder="Ingresa el nombre del producto"
              onChange={handleChange}
              value={name}
              />
          </div>

          <div className="container-img">
              <input
              type="file"
              accept="image/*"
              name="picture"
              id="picture"
              className="file-img"
              onChange={picture}
              />
          </div>
            <textarea className="description-text"
            name="description"
            id="description"
            cols="35"
            rows="5"
            placeholder="Descripcion del producto"
            onChange={handleChange}
            value={description}
            />
          <div className="description-article  ">
              <div className="price-gral">
                <input className="price"
                type="text"
                name="price"
                id="price"
                placeholder="$"
                onChange={handleChange}
                value={price}
                />
                  <h6>Precio</h6>
              </div>

                {//<div className="cant-gral">
                  // <input
                // type="text"
                // className="cant"
                // placeholder="#"
                // // onChange={handleChange}
                // // value={price}
                // />
                // <h6>Cantidad</h6>
                //</div>
              }

          </div>

          <button className="create-product" type="submit">Publicar</button>
      </form>

    </div>
    )
}

export default ProductForm;
