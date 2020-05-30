import React from 'react';
import './App.css';
import ClientFormCreate from "./pages/ClientFormCreate.js";
import ProviderFormCreate from "./pages/ProviderFormCreate.js";
import Home from "./components/Home.js";
import Registry from "./components/Registry.js"
import LoginSignin from "./pages/LoginSignin.js"
import HomeAuthorization from "./pages/HomeAuthorization.js"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

function PrivateRoute(props) {
  const autenticated = localStorage.getItem('token');

  if(!autenticated) return <Redirect to="/" />;
  return (
    <Route {...props} />
  );
}
//
// function UserRoute(props) {
//   const token = localStorage.getItem('token');
//   const isAdmin = token.isAdmin();
//
//   if(token && !isAdmin) return <Redirect to="/home" />
//   if(!token && !isAdmin) return <Redirect to="/login" />
//   return (
//     <Route {...props} />
//   );
// }



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Registry} />
          <Route exact path="/providers/create" component={ProviderFormCreate} />
          <Route exact path="/signin" component={LoginSignin} />
          <Route exact path="/clients/create" component={ClientFormCreate} />
          <PrivateRoute exact path="/home" component={HomeAuthorization} />
          <Route exact from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
