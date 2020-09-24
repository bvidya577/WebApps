import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Favourites from "./components/favorites";
import "./App.css";
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              Brand
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <Link to={"/home"} className="nav-item nav-link active">
                  Home
                </Link>
              </div>
              <div className="navbar-nav ml-auto">
                <Link to={"/favorites"} className="nav-item nav-link">
                  Favourites
                </Link>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favourites} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Movie;
