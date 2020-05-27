import React, { useEffect } from 'react';
import axios from 'axios';
import Home from '../components/Home.js'


  function HomeAuthorization({ history }) {

    useEffect(() => {
      const token = localStorage.getItem('token');
      axios({
        method: 'GET',
        baseURL: 'http://localhost:8080',
        url: '/products',
        headers: {
          'Authorization': token
        }
      })
        .then(({ data }) => console.log(data))
        .catch(error => {
          localStorage.removeItem('token');
          history.push('/');
        })
    }, [history]);

    return (
      <Home
      name={name}/>
    );
  }

  export default HomeAuthorization;
