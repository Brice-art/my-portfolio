import React from "react";

const School = (props) => {
  return (
    <div className="school-container">
      <div className="school-logo-container">
        <img
          className="school-logo"
          src={props.logo}
          alt={`${props.school} logo`}
        />
      </div>

      <div className="school-details">
        <h2 className="degree">{props.degree}</h2>
        <h3 className="school-name">{props.school}</h3>
        <p className="study-period">
          {props.startDate} - {props.endDate}
        </p>
        <p className="school-description">{props.description}</p>
      </div>
    </div>
  );
};

export default School;
