import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from'jquery';
class CardList extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      favMovies:[]
    };
    this.addFavorite = this.addFavorite.bind(this);
  }

  
  addFavorite(e,data) {
    console.log(e.target.value, data);
    //var i=[];
    var store = JSON.parse(localStorage.getItem("favMovies") || '[]');
    store.push(data);
    localStorage.setItem('favMovies', JSON.stringify(store));
    this.setState({
      liked: true
    });
  }

  
   
  render() {
    const fav = this.state.liked;
    let favTxt;

    if (fav) {

      favTxt = <h6>Liked</h6>

    } else {

      favTxt = <h6>Like</h6>

    }
        return (
        
                <div class="col-md-4" key={this.props.obj.i}>
                    <div>
                        <img src={this.props.obj.Poster} alt={this.props.obj.Title}></img>
                    </div>
                    <div class="details">
                        <p>Title: {this.props.obj.Title}</p>
                        <p>Release Date: {this.props.obj.Year}</p>
                    </div>
                    <div>
        <button id="fav" class="favBtn" value={this.props.obj.imdbID} onClick={((e) => this.addFavorite(e, this.props))}>{favTxt}</button>
                    </div>
                </div>
          );
  }
}

export default CardList;