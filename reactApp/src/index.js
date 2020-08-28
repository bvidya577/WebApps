import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movie from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import $ from'jquery';
import Popper from'popper.js';
ReactDOM.render(
  <BrowserRouter>
  <Movie/>
  </BrowserRouter>,document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();