import React from 'react';
import logo from "../assets/logo.png";
import './SearchProducts.css';
import NavBarClient from './NavBarClient.js'
import productList from "./dummyList";


class SearchProducts extends React.Component {
    state = {

    };


    render() {


        return (
            <div className="ProductSearch">
              <NavBarClient />

                <h5 className="title-search">Te damos las mejores opciones</h5>
                <div className="list">
                    {productList.map((el) => {
                        return (
                            <div className="row-search">
                                <div className="cards" key={el.id}>
                                    <img src={el.image}
                                    className={el.name}
                                    className="Imagenes"
                                    alt={el.name} />
                                    <h3 className="H3-Productos">
                                      {el.name}
                                    </h3>
                                    <p className="p-Productos">
                                      {el.description}
                                    </p>
                                    <button className="VerMas">Ver más</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <footer className="footer">
                    <img src={logo} className="NavBar-Logo-Home" alt="Logo"></img>
                    <p className="copyright"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> All rights reserved 2020 </p>
                </footer>

            </div>

        )

    }

}

export default SearchProducts;
