
import React, {Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import components
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import ProductDetails from './component/details';
import Cart from './component/Cart';
import NotFound from './component/Notfound';
import Modal from './component/Modal';

class App extends Component {
render() {
    return (
     <Fragment>
       <Navbar></Navbar>
       <Switch>
         <Route exact path="/" component={ProductList}></Route>
         <Route path="/details" component={ProductDetails} ></Route>
         <Route path="/cart" component={Cart} ></Route>
         <Route  component={NotFound} ></Route>
       </Switch>
       <Modal/>
     </Fragment>
    )
  }
}
export default App;


