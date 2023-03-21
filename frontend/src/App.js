import React, { Component }  from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AppBar from "./home/AppBar";
import Home from "./home/Home";
import AuctionComponent from "./components/auction/AuctionComponent";
import AuctionView from "./components/auction/AuctionView";
import UserComponent from "./components/auction/UserComponent";
import OfferAdd from "./components/auction/OfferAdd";
import AuctionAdd from "./components/auction/AuctionAdd";



function App() {
  return (
      <div className="App">
          <Router>
        <AppBar/>
              <div className="container">
          <Switch>
              <Route path = "/" exact component = {Home}></Route>
              <Route path = "/auctions" component = {AuctionComponent}></Route>
              <Route path = "/view-auction/:id" component = {AuctionView}></Route>
              <Route path = "/users" component = {UserComponent}></Route>
              <Route path = "/add-offer/:id" component = {OfferAdd}></Route>
              <Route path = "/add-auction" component = {AuctionAdd}></Route>
          </Switch>
              </div>
          </Router>

      </div>
  );
}

export default App;