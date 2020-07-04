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
                <li><a href="/products/all">Mis productos</a></li>
                <li><a href="/home">Inicio</a></li>
                <li><a href="/">Configuracion</a></li>
                <li><a href="/providers/:id/branch/create">Crear sucursal</a></li>
                <li><a href="/logout">Salir</a></li>
                <img src={logo} className="side-drawer-logo" alt="Logo"></img>
            </ul>
        </nav>
    )
};

export default SideDrawer;
