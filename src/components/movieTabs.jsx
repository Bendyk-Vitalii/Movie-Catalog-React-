import React from "react";

const MovieTabs = (props) => {
    const { sort_by, updateSortBy } = props;

    const handleClick = value => {
        return event => {
            updateSortBy(value);
            console.log(value)
        }
        };
        

    const getClassByValue = value => {
        console.log(value)
        return `nav-link ${sort_by === value ? "active" : ""}`;
    };

  return (
    <ul className="tabs nav nav-pills">
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
};

export default MovieTabs;
