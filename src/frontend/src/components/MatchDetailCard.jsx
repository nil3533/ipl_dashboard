import React from "react";
import { Link } from "react-router-dom";
import "../components/MatchDetailCard.css";

const MatchDetailCard = ({ match, teamname }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamname ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamname === match.matchWinner;

  return (
    <div className={isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard lost-card"}>
      <div>
        <h1>
          <span className="vs">vs</span>
          <Link to={otherTeamRoute}> {otherTeam}</Link>
        </h1>
        <h2 className="match-date">{match.date}</h2>
        <h3 className="match-venue">at {match.venue}</h3>
        <h3 className="match-result">
          {match.matchWinner} won by {match.resultMargin} {match.result}{" "}
        </h3>
      </div>
      <div className="additional-detail">
        <h4>First Innings</h4>
        <p>{match.team1}</p>
        <h4>Second Innings</h4>
        <p>{match.team2}</p>
        <h4>Man of the match</h4>
        <p>{match.playerOfMatch}</p>
        <h4>Umpires</h4>
        <p>
          {match.umpire1}, {match.umpire2}
        </p>
      </div>
    </div>
  );
};

export default MatchDetailCard;
