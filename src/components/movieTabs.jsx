import React from "react";

class MovieTabs extends React.Component {


  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }
//Оптимизация если не поменялись пропсы. сортбай то ничего не надо рендерить.

  render() {

  const { sort_by, updateSortBy } = this.props;

  const handleClick = (value) => {
    return () => {
      updateSortBy(value);
      console.log({value});
    };
  };

  const getClassByValue = (value) => {
    //console.log(value);
    return `nav-link ${sort_by === value ? "active" : ""}`;
  };

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClassByValue("allMovies.desc")}
          onClick={handleClick("allMovies.desc")}
        >
          All movies
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassByValue("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassByValue("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassByValue("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          Vote average
        </div>
      </li>
    </ul>
  );
  }
};

export default MovieTabs;
