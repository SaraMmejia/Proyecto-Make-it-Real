import React from "react";
import "../components/clientForm.css";
import axios from "axios";
import Login from "../components/Login.js";

class LoginSignin extends React.Component {
	state = {
		email: "",
		password: "",
		clients: [],
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { ...data } = this.state;

		axios({
			method: "GET",
			baseURL: "http://localhost:8080",
			url: "/signin",
			data,
			headers: {
				"Content-Type": "application/json",
			},
		}).then(() => this.props.history.push("/"));
	};

	render() {
		return (
			<Login
				email={this.state.email}
				password={this.state.password}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default LoginSignin;
