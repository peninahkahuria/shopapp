import React, { Component } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Converse from "./Components/Converse";
import Jordans from "./Components/Jordans";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Components/Header"
import Footer from "./Components/Footer" 
import Login from  "./Components/Login"

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
      <div>
      <Header/>
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/Converse" component ={Converse} exact/>
      <Route path="/Jordans" component={Jordans} exact/>
      <Route path="/Footer" component={Footer} exact/> 
      <Route path="/Login" component={Login} exact/> 
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
  
export default App;