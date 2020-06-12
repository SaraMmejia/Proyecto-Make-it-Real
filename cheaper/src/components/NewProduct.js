import React from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import Toolbar from "./sideDrower-Toolbar/toolbar.js";
import SideDrawer from "./sideDrower-Toolbar/sideDrawer.js";
import Backdrop from "./sideDrower-Toolbar/Backdrop";
import "./NewProduct.css";
import ProductForm from "./productForm.js";

class NewProduct extends React.Component {
  //Estado del menu lateral
  state = {
    name: "",
    picture: "",
    description: "",
    price: 0,
    category: "lacteos",
    products: [],
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", this.state.file);
    data.append("name", this.state.name);
    data.append("description", this.state.description);
    data.append("price", this.state.price);
    data.append("category", this.state.category);

    axios({
      method: "POST",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "/products/create",
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(({ data }) => {
      this.props.history.push("/providers");
    });
  };

  readFile = (file) => {
    const reader = new FileReader(); //FileReader es una F de JavaScript
    //Métodos de JavaScript
    reader.onload = (e) => e.target.result;
    reader.readAsDataURL(file);
  };

  handleImage = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="container-pg">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <ProductForm
          name={this.state.name}
          picture={this.handleImage}
          description={this.state.description}
          price={this.state.price}
          category={this.state.category}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <footer className="footer">
          <img src={logo} className="NavBar-Logo-Home" alt="Logo"></img>
          <p className="copyright">
            {" "}
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> All rights
            reserved 2020{" "}
          </p>
        </footer>
      </div>
    );
  }
}
export default NewProduct;
