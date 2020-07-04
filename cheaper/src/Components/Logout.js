import React from "react";
import logo from "../assets/logo.png";
import "./Login.css";


class Logout extends React.Component {

	render() {

		localStorage.clear();
		this.props.history.push('/');

		return (

			<div></div>

		);
	}
}
 export default Logout;
