import React from "react";
import axios from "axios";
import CardList from "./cardList";
class Home extends React.Component {
  constructor(props) {
    super();
    this.onChangeSearchText = this.onChangeSearchText.bind(this);
    this.onChangeSearchType = this.onChangeSearchType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      searchText: "",
      searchType: "",
      movieData: [],
      empty: true,
      searchInitiated: false,
    };
  }
  onChangeSearchText(e) {
    this.setState({
      searchText: e.target.value,
    });
  }
  onChangeSearchType(e) {
    this.setState({
      searchType: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const uri = "http://www.omdbapi.com/";
    const apikeyVal = "a1dac811";
    const obj = {
      s: this.state.searchText,
      type: this.state.searchType,
      apikey: apikeyVal,
    };
    // console.log(`The values are ${this.state.searchText}, ${this.state.searchType}`)
    axios
      .get(uri, { params: obj })
      //  axios.get(uri+'?s='+obj.t+'&'+'apikey='+obj.apikey+'&'+'type='+obj.type)
      .then((res) => {
        if (res.data.Search == undefined) {
          this.setState({ empty: true, searchInitiated: true });
        } else {
          this.setState({
            movieData: res.data.Search,
            empty: false,
            searchInitiated: true,
          });
        }
        // console.log(this.state.movieData)
        //console.log(this.state.empty)
      });
    /*  this.setState({
                searchText: '',
                searchType: '',
             })*/
  }
  movieCard() {
    return this.state.movieData.map((e, i) => {
      return <CardList obj={e} key={i} keyId={i} />;
    });
  }
  render() {
    const idData = this.state.empty;
    let movieList;
    if (idData && this.state.searchInitiated == true) {
      movieList = (
        <div className="col-md-4 offset-md-4">
          <h1>No Data Found</h1>
        </div>
      );
    } else {
      movieList = this.movieCard();
    }
    return (
      <div className="container">
        <div className="row searchForm">
          <div className="col-md-6 offset-md-3">
            <form className="form-inline " onSubmit={this.onSubmit}>
              <div className="center_form">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.searchText}
                  onChange={this.onChangeSearchText}
                  id="seachBox"
                  placeholder="search"
                />
                <select
                  className="form-control"
                  value={this.state.searchType}
                  onChange={this.onChangeSearchType}
                  id="searchType"
                >
                  <option value="" selected disabled>
                    select
                  </option>
                  <option value="movie">Movie</option>
                  <option value="episode">Episode</option>
                  <option value="series">Series</option>
                </select>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row searchResults">{movieList}</div>
      </div>
    );
  }
}
export default Home;
