import React from "react";
import { Outlet, Link } from "react-router-dom";

const About = () => {
  return (
    <div className="content">
      <h2>Brief Summary About Me</h2>
      <div>I am a frontend developer with work experience in Html, CSS, JavaScript and React Js. I am looking for opportunities to use my skills in building great proects and contributing to the development of a global product.</div>
        <div>
          <h3>Nested Route</h3>
          <li className="about-nested-wrapper">
            <Link to="governance">Governance</Link >
          </li>
          <li className="about-nested-wrapper">
            <Link to="corporate">Corporate</Link >
          </li>
        </div>
      <Outlet/>
    </div>
  )
}
export default About;