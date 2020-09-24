import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      favMovies: this.props.obj,
    };
    // console.log(this.state.favMovies);
    this.addFavorite = this.addFavorite.bind(this);
  }
  addFavorite(e, data) {
    //  console.log(e.target.value, data);
    //var i=[];
    var store = JSON.parse(localStorage.getItem("favMovies") || "[]");
    store.push(data);
    // localStorage.setItem('favMovies', JSON.stringify(store));
    localStorage.setItem("favMovies", JSON.stringify(store));
    this.setState({
      liked: true,
    });
  }
  render() {
    const fav = this.state.liked;
    const favMov = this.state.favMovies;
    let favTxt;
    if (fav) {
      favTxt = <h6>Liked</h6>;
    } else {
      favTxt = <h6>Like</h6>;
    }
    return (
      <div className="col-md-4" key={this.props.keyId}>
        <div>
          <img src={favMov.Poster} alt={favMov.Title}></img>
        </div>
        <div className="details">
          <p>Title: {favMov.Title}</p>
          <p>Release Date: {favMov.Year}</p>
        </div>
        <div>
          <button
            id="fav"
            className="favBtn"
            value={favMov.imdbID}
            onClick={(e) => this.addFavorite(e, this.props)}
          >
            {favTxt}
          </button>
        </div>
      </div>
    );
  }
}
export default CardList;
