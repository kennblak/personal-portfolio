import React from "react";
import "../styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";


function Home() {
  return (
    <div className="home">
      <div className="about">
        <>
        <h2> Hi, My Name is Kennedy</h2>
        </>

        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
        </div>
        <div className="socials">
          <ul>
          <li>
          <a href="https://www.linkedin.com/in/kennedy-mbithi-18070826a/">
            <LinkedInIcon /> 
          </a>
        </li>
        <li>
          <a href="https://github.com/kennblak">
          <GithubIcon /> 
          </a>
        </li>
        <li>
          <a href= "https://kennedymbithi20@gmail.com">
          <EmailIcon /> 
          </a>
        </li>
          </ul>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS,  NPM, BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MySQL, 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;