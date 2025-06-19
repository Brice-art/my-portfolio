import React from "react";
import School from "./sub-components/School";
import saidailogoURL from "../assets/images/saitama-u-logo.jpg"; 
import nagaokaLogoURL from "../assets/images/nagaoka-logo.jpg"; 


const Resume = () => {
  return (
    <div className="resume-container">
        
      <School
        degree="B.Sc. in Civil Engineering"
        school="Saitama University"
        startDate="2023"
        endDate="2027(expected)"
        logo={saidailogoURL}
        description="Currently pursuing a degree in Civil Engineering with a strong focus on infrastructure design, construction materials, and geotechnical engineering.
Developed strong skills in math, project planning, and technical writing.
Complementing my studies with self-driven training in software development (JavaScript, MERN stack, Chrome extensions)."
      />
      <School 
      degree="A.A.S. in Civil Engineering"
        school="Nagaoka National College of Technology"
        startDate="2020"
        endDate="2023"
        logo={nagaokaLogoURL}
        description="Completed an Associate's degree in Civil Engineering, focusing on structural analysis, fluid mechanics, and construction management."
         />
    </div>
  );
};

export default Resume;
