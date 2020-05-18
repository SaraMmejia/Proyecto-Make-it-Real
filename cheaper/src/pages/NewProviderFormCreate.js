import React from 'react';
import axios from 'axios';
import ProviderForm from '../components/newProviderForm.js';

class NewProviderFormCreate extends React.Component{

  state ={
    name:'',
    lastname:'',
    providerEmail:'',
    nit: 0,
    company:'',
    branchName:'',
    branchAdress:'',
    username:'',
    password:'',
    passwordTwo:'',
    providers: []
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name] : value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {...data} = this.state;

		axios({
			method: 'POST',
			baseURL: 'http://localhost:3000',
			url: '/',
			data,
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(() => this.props.history.push('/'))

  }

  render(){
    return (
			<ProviderForm
        name={this.state.name}
        lastname={this.state.lastname}
				providerEmail={this.state.providerEmail}
				nit={this.state.nit}
				company={this.state.company}
				branchName={this.state.branchName}
				branchAdress={this.state.branchAdress}
				username={this.state.username}
				password={this.state.password}
				passwordTwo={this.state.passwordTwo}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
);
}
}

export default NewProviderFormCreate;
