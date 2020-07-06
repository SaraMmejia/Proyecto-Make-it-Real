import React from "react";
import "./Home.css";
import Slider from "../components/slider";
import ProductListHomeClient from "../components/productListHomeClient.js";
import NavBarClient from './NavBarClient.js'


class HomeClient extends React.Component {
   handlePayment (){
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
     invoice: '123456',
     methodsDisable:['PSE','DP', 'SP', 'CASH'],
     address_billing: 'cra 58f # 58-35',
     type_doc_billing:'cc',
     name_billing: 'Pedro Perez',
     num_doc_billing: '12345678',
     mobilephone_billing: '3153152222',
     amount: '12000',
     
    
   })
}


  render() {

    return (
      <div className="Home">

        <NavBarClient />
        <Slider />
        <ProductListHomeClient />
        <button onClick={this.handlePayment}>Epayco</button>

      </div>
    );
  }
}

export default HomeClient;