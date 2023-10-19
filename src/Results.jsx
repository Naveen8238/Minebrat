import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Results() {
  let x = useLocation();
  let { cityData, stateData } = x.state
    ? x.state
    : { cityData: "unknown", stateData: "unknown" };
  return (
    <>
      {cityData && stateData && (
        <h1>
          selected city name is:{cityData} and selected State is: {stateData}
          <br />
          <NavLink to="/">GoBack</NavLink>
        </h1>
      )}
    </>
  );
}

export default Results;
