import React from 'react';
import $ from'jquery';
class Favorites extends React.Component {
  constructor(props) {
    super(props);
    var entries = localStorage.getItem('favMovies');
    var obj = JSON.parse(entries);
    for(var k in obj) {
        if(obj[k] instanceof Object) {
          //  console.log(obj[k]);
        } else {
          //  console.log(obj[k] + "<br>");
        };
    }
    this.state = {
      fav: obj
    };
  }

  componentDidMount() {
    console.log(this.state.fav);
  }
  render() {
    return (
      <div class="row searchResults">
         {
                this.state.fav.map(function(e) {
                  return(
                <div class="col-md-4">
                    <div>
                        <img src={e.obj.Poster} alt={e.obj.Title}></img>
                    </div>
                    <div class="details">
                        <p>Title: {e.obj.Title}</p>
                        <p>Release Date: {e.obj.Year}</p>
                    </div>
                    <div>
                   <button id="fav" class="favBtn" value={e.obj.imdbID} onClick={((e) => this.removeFavorite(e))}>Unlike</button>
                    </div>
                </div>
                 )
                }
                )
            }
      </div>
    );
  }
}
export default Favorites;


