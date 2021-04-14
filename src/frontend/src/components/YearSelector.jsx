import React from "react";
import { Link } from "react-router-dom";
import "./YearSelector.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const YearSelector = ({ teamName }) => {
  let years = [];
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;

  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <div>
      <ol className="YearSelector">
        {years.map((year) => (
          <li key={year}>
            <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
          </li>
        ))}
        <li>
          <Link to={`/`}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default YearSelector;
