import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Favourites from './components/favorites';
import './App.css';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <Router>
      <div className="container-fluid">
        
      <nav class="navbar navbar-expand-md navbar-light bg-light">
      <Link to={'/'} class="navbar-brand">Brand</Link>
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
              <Link to={'/home'} class="nav-item nav-link active">Home</Link>
              
          </div>
          <div class="navbar-nav ml-auto">
              <Link to={'/favorites'} class="nav-item nav-link">Favourites</Link>
          </div>
      </div>
  </nav>
  
  
  <Switch>
              <Route exact path='/home' component={ Home } />
              <Route exact path='/' component={ Home } />
              <Route path='/favorites' component={ Favourites } />
          </Switch>
  </div>
  </Router>
    );
  }
}
export default Movie;


