import React from 'react';
import logo from '../../assets/logo.png';
import './SideDrawer.css';


const SideDrawerClient = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/home">Mi perfil</a></li>
                <li><a href="/home">Mis lista de mercado</a></li>
                <li><a href="/home">Inicio</a></li>
                <li><a href="/home">Configuracion</a></li>
                <img src={logo} className="side-drawer-logo" alt="Logo"></img>
            </ul>
        </nav>
    )
};

export default SideDrawerClient;
