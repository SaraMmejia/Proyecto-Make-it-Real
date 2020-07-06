import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import logo from "../../assets/logo.png";
import './toolbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";



  function handlePayment (){
       const handler =  window.ePayco.checkout.configure({
        key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
        test: true

      });

      handler.open({
        external: 'false',
        amount:'12000',
        tax: '0',
        tax_base:'0',
        name: 'Articulos de hogar',
        description: 'Brillapisos',
        currency: 'cop',
        country:'Colombia',
        lang: 'en',
        invoice: '12345',
        methodsDisable:['PSE','DP', 'SP', 'CASH'],
        address_billing: 'cra 58f # 58-35',
        type_doc_billing:'cc',
        name_billing: 'Pedro Perez',
        num_doc_billing: '12345678',
        mobilephone_billing: '3153152222',
        amount: '12000',
        
       
      })
  }


  
const Toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>

       
            <FontAwesomeIcon icon={faShoppingCart} className="NavBar-Icons" onClick={handlePayment}/>


        </nav>
    </header>
);


export default Toolbar;
