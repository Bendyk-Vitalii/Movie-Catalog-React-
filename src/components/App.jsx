import "./App.css";
import React from "react";
//import WillWatchList from "./WillWatchList";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3, API_KEY_4 } from "../utils/api";
import MovieTabs from "./MovieTabs";
import Filters from "./Filters";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      
      filters: {
        sort_by: "popularity.desc",
      } 
    };
  }
   componentDidMount() {
    this.getMovies();
  } 

   componentDidUpdate(preProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies(this.state.sort_by);
    }
  } 
 

  getMovies = (sort_by = "popularity.desc") => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${sort_by}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      });
  };


  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies,
    });
  };

  addMovieToWillWatch = (movie) => {
    const updateMovies = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMovies,
    });
  };

   onChangeFilters = event => {
     const value = event.target.value;
     const name = event.target.name;
     this.setState(prevState => ({
       filters: {
         ...prevState.filters,
         [name]: value
       }
     }))
  };

  removeMovieFromWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (
      item
    ) {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  };

   updateSortBy = (value) => {
    this.setState({
      sort_by: value,
    });
    console.log(this.state)
  }; 

  WillWatchList(movies) {
    const addMovies = this.state.movies;
    this.setState({
      movies: addMovies,
    });
  }

  render() {
    const {filters} = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                      filters={filters}
                      getMovies={this.getMoviesForFilters}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <Filters  filters={filters} 
             onChangeFilters = {this.onChangeFilters}
            />
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;