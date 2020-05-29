import React from 'react';
import logo from "../assets/logo.png";
import"./productDescription.css";
import image from '../assets/hogar.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faShoppingCart,
    faSearch,
    faCamera,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function ProductDescription() {
    return (

        <div className = "ProductDescription">
			<div class="NavBar-Container">
				<nav className="NavBar-Parts">
                    <div className ="menu">
					    <FontAwesomeIcon icon={faBars} className="NavBar-Icons" />
                        <ul>
                            <li><a href="/">Mi perfil</a></li>
                            <li><a href="/">Mis productos</a></li>
                            <li><a href="/">Soporte</a></li>
                        </ul>
                    </div>
                    <img src={logo} className="NavBar-Logo-Home"></img>
					<FontAwesomeIcon icon={faShoppingCart} className="NavBar-Icons" />
				</nav>
			</div>
			<div className="NavBusqueda">
				<FontAwesomeIcon icon={faSearch} classNAme="NavBusqueda-Icon" />
				<input
					type="text"
					placeholder=" Realizar una busqueda."
					className="NavBusqueda-Busqueda"
				/>
				<FontAwesomeIcon icon={faCamera} className="NavBusqueda-Icon" />
			</div>

			<div classsName="Ubicacion">
				<FontAwesomeIcon icon={faMapMarkerAlt} className="Ubicacion-Icon" />
				<input
					type="text"
					placeholder=" Ubicación."
					className="Ubicacion-Busqueda"
				/>
			</div>
           
            <img src ={image} className="hogar"></img>
            <h4 className="description-title">Cubre lecho italiano</h4>
            
            <p className ="paragraph-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc finibus mauris sed maximus convallis. 
                Nullam vulputate tempor nunc, ut sodales tellus rhoncus ac. 
                Praesent id hendrerit orci. In ornare hendrerit lacus, vitae maximus lectus bibendum eu. 
                Pellentesque quis sodales magna, vel placerat nisl. 
                Nam ac libero accumsan, lobortis massa in, auctor tortor. 
                Aenean ut pretium neque. Nam ac libero accumsan, lobortis massa in, auctor tortor. 
                Aenean ut pretium neque.Nam ac libero accumsan, lobortis massa in, auctor tortor. 
                Aenean ut pretium neque.</p>
            <div className ="buttons">
                <button className="edit">Editar producto</button>
                <button className="delete">Eliminar producto</button>
                <button className="create">Nuevo producto</button>
            </div>
            


        </div>


    )
}
export default ProductDescription;