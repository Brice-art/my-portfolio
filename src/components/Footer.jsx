import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      {/*<div>
        <a href="https://github.com/Brice-art">
          <FaGithub size={32} color="#181717" />
        </a>
        <a href="https://www.linkedin.com/in/brice-ali-byiringiro-ab1182254/">
          <FaLinkedin size={32} color="#0A66C2" />
        </a>
      </div>*/}
      <div>
        <p>
          © {new Date().getFullYear()} Brice's Portfolio. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
