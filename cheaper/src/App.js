import React from 'react';
import './App.css';
import ClientFormCreate from "./pages/ClientFormCreate.js";
import ProviderFormCreate from "./pages/ProviderFormCreate.js";
import BranchFormCreate from "./pages/BranchFormCreate.js";
import Home from "./components/Home.js";
import HomeClient from "./components/HomeClient.js";
import Registry from "./components/Registry.js"
import LoginSignin from "./pages/LoginSignin.js";
import SearchProducts from './components/SearchProducts'
import HomeAuthorization from "./pages/HomeAuthorization.js"
import ProductDescription from './components/productDescription.js'
import ProductDescriptionClient from './components/productDescriptionClient.js'
import NewProduct from './components/NewProduct.js'
// import HomeAuthorization from "./pages/HomeAuthorization.js"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

function PrivateRoute(props) {
  const authorization = localStorage.getItem('token');

  if(!authorization) return <Redirect to="/" />;
  return (
    <Route {...props} />
  );
}

function UserRoute(props) {
  const authorization = localStorage.getItem('token');
  let isClient = localStorage.getItem('typeOf');
  console.log(authorization);
  console.log(isClient);
  if(authorization && (isClient === 'client')) return <Redirect to="/clients" />;
  if(authorization && (isClient !== 'client')) return <Redirect to="/providers" />;
  if(!authorization && !isClient) return <Redirect to="/signin" />;
}
function ClientProducts(props) {
  const authorization = localStorage.getItem('token');
  let isClient = localStorage.getItem('typeOf');
  console.log(authorization);
  console.log(isClient);
  if(authorization && (isClient === 'client')) return <Redirect to="/clients/products/show/:id" />;
  if(authorization && (isClient !== 'client')) return <Redirect to="/providers/products/show/:id" />;
  if(!authorization && !isClient) return <Redirect to="/signin" />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Registry} />
          <Route exact path="/providers/create" component={ProviderFormCreate} />
          <Route exact path="/product" component={ProductDescription} />
          <Route exact path="/product/create" component={NewProduct} />
          <Route exact path="/product/edit/:id" component={NewProduct} />
          <Route exact path="/search" component={SearchProducts} />
          <Route exact path="/signin" component={LoginSignin} />
          <Route exact path="/providers/create" component={ProviderFormCreate} />
          <Route exact path="/clients/create" component={ClientFormCreate} />
          <UserRoute exact path="/home" />
          <PrivateRoute exact path="/clients" component={HomeClient} />
          <PrivateRoute exact path="/providers" component={Home}  />
          <ClientProducts exact path="/products/show/:id"  />
          <Route exact path="/providers/products/show/:id" component={ProductDescription} />
          <Route exact path="/clients/products/show/:id" component={ProductDescriptionClient} />
          <Route exact path="/products/create" component={NewProduct} />
          <Route exact path="/products/edit/:id" component={NewProduct} />
          <Route exact path="/providers/:id/branch/create" component={BranchFormCreate} />
          <Route exact from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
