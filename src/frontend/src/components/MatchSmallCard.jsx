import React from "react";
import { Link } from "react-router-dom";
import "../components/MatchSmallCard.css";

const MatchSmallCard = ({ match, teamname }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamname ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamname === match.matchWinner;
  return (
    <div className={isMatchWon ? "MatchSmallCard won-card" : "MatchSmallCard lost-card"}>
      <h3>
        <span className="vs">vs</span>
        <Link to={otherTeamRoute}> {otherTeam}</Link>
      </h3>
      <p className="match-result">
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
};

export default MatchSmallCard;
