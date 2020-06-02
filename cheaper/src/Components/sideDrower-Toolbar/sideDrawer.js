import React from 'react';
import logo from '../../assets/logo.png';
import './SideDrawer.css';


const SideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Mi perfil</a></li>
                <li><a href="/">Mis productos</a></li>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Configuracion</a></li>
                <li><a href="/">Crear sucursal</a></li>
                <img src={logo} className="side-drawer-logo"></img>
            </ul>
        </nav>
    )
};

export default SideDrawer;