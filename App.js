import React from "react";
import MyNavbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Home-page">
        <MyNavbar />
        <Switch>
          <Route path="/">
            <Home />
            <Products />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
