import './App.css';
import React from "react";
import moviesData  from "../moviesData";
import MovieList from "./MovieList"
import WillWatchList from "./WillWatchList"

class App extends React.Component {
   
  constructor(){
    super()

      this.state = {
        movies: moviesData
      };
  }

  WillWatchList(movies) {
    const addMovies = this.state.movies;
     this.setState({
       movies: addMovies
     });
  }
  
  render() {
    return ( 
      <div className="movieItemsContainer">
        <WillWatchList ></WillWatchList>
    <MovieList data={[this.state.movies]}></MovieList> 
   </div>
    )}
}


export default App;
