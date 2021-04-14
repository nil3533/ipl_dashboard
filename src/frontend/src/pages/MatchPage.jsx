import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
import "./MatchPage.css";
import YearSelector from "../components/YearSelector";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
      const data = await response.json();
      setMatches(data);
    };
    fetchMatches();
  }, [teamName, year]);

  let winCount = 0;
  let lossCount = 0;

  matches.map((match) => {
    if (match.matchWinner === teamName) {
      winCount++;
    } else {
      lossCount++;
    }
  });
  let matchNotfound = null;

  if (!matches || matches.length === 0) {
    matchNotfound = <h4>Matches not found</h4>;
  }

  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3> </h3>
        <YearSelector teamName={teamName} />
      </div>

      <div>
        <h1 className="page-heading">
          {teamName} matches in {year} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Win : {winCount} Loss : {lossCount}
        </h1>

        <br></br>
        {matchNotfound}
        {matches.map((match) => (
          <MatchDetailCard key={match.id} match={match} teamname={teamName}></MatchDetailCard>
        ))}
      </div>
      <div>
        <ScrollUpButton />
      </div>
    </div>
  );
};

export default MatchPage;
