import React from 'react';
import './clientProvider.css';
import logo from '../images/cheaper.png';


function ClientProvider() {
    return (

        <div className="containerGeneral">
             <div className="client-provider">
                <div className="container">
                 <img class="logo" src={logo} alt="logo"/>
                    <button className="button-client"><a href="">Soy cliente</a> </button>
                    <button className="button-provider"> <a href=""> Soy proveedor</a></button>
                </div>
            </div>
       </div>
    

);
}

export default ClientProvider;