import React from "react";
//import $ from "jquery";
class Favorites extends React.Component {
  constructor(props) {
    super(props);
    // this.removeFav=this.removeFav.bind(this);
    this.entries = localStorage.getItem("favMovies");
    var obj = JSON.parse(this.entries);
    this.state = {
      fav: obj,
    };
  }
  removeFav = (event) => {
    console.log("1", event.currentTarget.value);
    var val = event.currentTarget.value;
    this.setState({ liked: false });
    console.log("2", this.entries);
    var f = JSON.parse(this.entries).filter((i) => i.keyId != val);
    console.log("3", f);
    localStorage.clear();
    localStorage.setItem("favMovies", JSON.stringify(f));
    window.location.reload();
  };
  render() {
    const favList = this.state.fav;
    if (favList == null || favList == "") {
      return (
        <div className="row searchResults">
          <h5>empty</h5>
        </div>
      );
    } else {
      return (
        <div className="row searchResults" style={{ margin: "10px" }}>
          {favList.map(
            function (list, i) {
              return (
                <div className="col-md-4" key={i}>
                  <div>
                    <img src={list.obj.Poster} alt={list.obj.Title}></img>
                  </div>
                  <div className="details">
                    <p>Title: {list.obj.Title}</p>
                    <p>Release Date: {list.obj.Year}</p>
                  </div>
                  <div>
                    <button
                      onClick={this.removeFav}
                      id="fav"
                      className="favBtn"
                      value={list.keyId}
                    >
                      Unlike
                    </button>
                  </div>
                </div>
              );
            }.bind(this)
          )}
        </div>
      );
    }
  }
}
export default Favorites;
