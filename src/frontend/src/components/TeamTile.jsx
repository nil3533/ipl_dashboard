import { React } from "react";
import { Link } from "react-router-dom";

import "./TeamTile.css";
export const TeamTile = ({ teamName }) => {
  let bgColor, fColor;
  if (teamName === "Mumbai Indians") {
    bgColor = "#004BA0";
  }
  if (teamName === "Pune Warriors") {
    bgColor = "#2F9BE3";
  }
  if (teamName === "Sunrisers Hyderabad") {
    bgColor = "#FF822A";
  }
  if (teamName === "Rajasthan Royals") {
    bgColor = "#ffafcc";
  }
  if (teamName === "Kolkata Knight Riders") {
    bgColor = "#2E0854";
  }
  if (teamName === "Royal Challengers Bangalore") {
    bgColor = "#d00000";
  }
  if (teamName === "Gujarat Lions") {
    bgColor = "#fb5607";
  }
  if (teamName === "Kochi Tuskers Kerala") {
    bgColor = "#B61314";
  }
  if (teamName === "Kings XI Punjab") {
    bgColor = "#DCDDDF";
  }
  if (teamName === "Delhi Daredevils") {
    bgColor = "#00008B";
  }
  if (teamName === "Rising Pune Supergiant") {
    bgColor = "#D11D9B";
  }
  if (teamName === "Delhi Capitals") {
    bgColor = "#00008B";
  }
  if (teamName === "Deccan Chargers") {
    bgColor = "#366293";
  }
  if (teamName === "Rising Pune Supergiants") {
    bgColor = "#D11D9B";
  }
  if (teamName === "Chennai Super Kings") {
    bgColor = "#fcf300";
  }
  return (
    <div className="TeamTile" style={{ backgroundColor: `${bgColor}`, color: `${fColor}` }}>
      <h1>
        <Link to={`/teams/${teamName}`}>{teamName}</Link>
      </h1>
    </div>
  );
};
