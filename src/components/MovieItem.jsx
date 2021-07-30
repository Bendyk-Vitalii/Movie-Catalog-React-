import React from "react";


export default class MovieItem extends React.Component {
  constructor() {
    super();
    //console.log(this)
    this.state = {
      willWatch: false,
    };
  }
    componentDidMount() {
    //console.log("didmountMOVIEitem", this.props.filters)
    //this.props.getMovies(this.props.filters.sort_by);
  }  

    componentWillReceiveProps(nextProps) {
    if (nextProps.filters.sort_by !== this.props.filters.sort_by) {
      this.getMovies(nextProps, this.props.filters)
    }
  }  
   
  render() {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch,
      getMovies,
      filters
    } = this.props;
//console.log(filters)
    return (
      <React.Fragment>
        <div className="card">
          <img
            className="card-img-top card-img--height"
            src={` ${"https://image.tmdb.org/t/p/w500/"}${
              movie.backdrop_path || movie.poster_path
            } `}
            alt=""
          />
          <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Rating: {movie.vote_average}</p>
              {this.state.willWatch ? (<button type="button" className="btn btn-success" 
              onClick={() => {
                    this.setState({
                      willWatch: false,
                    });
                    removeMovieFromWillWatch(movie);
                  }}
                >
                  Remove Will Watch
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    this.setState({
                      willWatch: true,
                    });
                    addMovieToWillWatch(movie);
                  }}
                >
                  Add Will Watch
                </button>
              )}
            </div>
            <button onClick={removeMovie.bind(null, movie)}>
              Delete movie
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


