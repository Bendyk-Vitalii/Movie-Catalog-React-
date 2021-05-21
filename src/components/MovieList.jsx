import { render } from "@testing-library/react";
import React from "react";

//const addWillWatchList = (e) => {
  
//} 
/* const imgData = (props) => {"https://image.tmdb.org/t/p/w500/" + {props.poster_path}}; */

function MovieList(props) {
    
    //console.log(props.data[0]);
    
     
    return (
        props.data[0].map(function(obj) {
          return ( 
        <div className="card" style={{width: "18rem"}} key={obj.id}>
  <img className="card-img-top" src={`  ${"https://image.tmdb.org/t/p/w500/"}${obj.backdrop_path} `} alt={obj.title}></img>
  <div className="card-body">
    <h5 className="card-title">{obj.title}</h5>
    <div className="d-flex justify-content-between align-items-center">
    <p className="card-text">{obj.vote_average}</p>
    <a href="#" className="btn btn-primary" onClick={this.props.willWatch.bind(this, props.movie)}>Will watch</a>
    </div>
  </div>
</div>)
    })) 
}


export default MovieList;