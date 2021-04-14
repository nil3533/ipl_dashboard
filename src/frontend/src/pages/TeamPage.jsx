import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../pages/TeamPage.css";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";

const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();
  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await response.json();
      setTeam(data);
    };

    fetchMatches();
  }, [teamName]);

  if (!team || team.teamName == null) {
    return <h1>Team not found</h1>;
  }

  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">
          {/* <img src={kkr} tyle={{ width: "1%", height: "1%" }} /> */}
          {team.teamName}
        </h1>
      </div>
      <div className="win-loss-section">
        <PieChart
          data={[
            { title: "Losses", value: team.totalMatches - team.totalWins, color: "#ef233c" },
            { title: "Wins", value: team.totalWins, color: "#2a9d8f" },
          ]}
        />
      </div>
      <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <br></br>
        <MatchDetailCard match={team.matches[0]} teamname={team.teamName}></MatchDetailCard>
      </div>

      {team.matches.slice(1).map((match) => (
        <MatchSmallCard key={match.id} match={match} teamname={team.teamName}></MatchSmallCard>
      ))}
      <div className="more-link">
        <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More >></Link>
      </div>
      <Link to={`/`}>
        <FontAwesomeIcon icon={faArrowLeft} />
        &nbsp;Back To Home Page
      </Link>
    </div>
  );
};

export default TeamPage;
