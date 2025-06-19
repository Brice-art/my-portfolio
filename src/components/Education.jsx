import React from "react";
import coursera from "../assets/images/coursera-logo-full-rgb.png";
import freeCodeCamp from "../assets/images/FreeCodeCamp.svg";
import udemy from "../assets/images/Udemy New.svg";
import saidaiLogo from "../assets/images/saitama-u-logo.jpg";
import kosenLogo from "../assets/images/nagaoka-logo.jpg";

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-content">
        <p className="education-paragraph">
          I’ve studied Civil and Environmental Engineering at{" "}
          <a href="https://www.saitama-u.ac.jp/">Saitama University</a>,{" "}
          <a href="https://www.nagaoka-ct.ac.jp/">
            Nagaoka National College of Technology
          </a>
          , and Japanese at{" "}
          <a href="https://www.jasso.go.jp/ryugaku/jlec/tjlec/index.html">
            Tokyo Japanese Language Education Center
          </a>
          . Outside the classroom, I’ve kept learning through online courses on
          Coursera, freeCodeCamp, Udemy, and university lectures, picking up
          skills in programming, data analysis, and tech topics that interest
          me.
        </p>
      </div>
      <div className="education-logos">
        <div className="education-logo">
          <img src={kosenLogo} alt="nagaoka kosen logo" />
        </div>
        <div className="education-logo">
          <img src={saidaiLogo} alt="saitama university logo" />
        </div>
        <div className="education-logo">
          <img src={coursera} alt="coursera logo" />
        </div>
        <div className="education-logo">
          <img src={freeCodeCamp} alt="freeCodeCamp logo" />
        </div>
        <div className="education-logo">
          <img src={udemy} alt="udemy logo" />
        </div>
      </div>
    </div>
  );
};

export default Education;
