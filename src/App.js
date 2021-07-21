import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Navbar";
import Content from "./Components/content";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Content} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
