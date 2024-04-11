import "./Skills.scss";
import api from "../../assets/images/api.png";
import cloud from "../../assets/images/cloud.png";
import css from "../../assets/images/css.png";
import docker from "../../assets/images/docker.png";
import git from "../../assets/images/git.png";
import github from "../../assets/images/github.png";
import html from "../../assets/images/html.png";
import javascript from "../../assets/images/javascript.png";
import json from "../../assets/images/json.png";
import nextjs from "../../assets/images/nextjs.png";
import node from "../../assets/images/node.png";
import npm from "../../assets/images/npm.png";
import postman from "../../assets/images/postman.png";
import react from "../../assets/images/react.png";
import ruby from "../../assets/images/ruby.png";
import sass from "../../assets/images/sass.png";
import sql from "../../assets/images/sql.png";
import typescript from "../../assets/images/typescript.png";
import vsc from "../../assets/images/vsc.png";

function Skills() {
  return (
    <section className="skills__container">
      <img className="skills__image" src={git} alt="git"></img>
      <img className="skills__image" src={github} alt="github"></img>
      <img className="skills__image" src={npm} alt="npm"></img>
      <img className="skills__image" src={vsc} alt="visualstudiocode"></img>
      <img className="skills__image" src={docker} alt="docker"></img>
      <img className="skills__image" src={cloud} alt="cloud"></img>
      <img className="skills__image" src={html} alt="html"></img>
      <img className="skills__image" src={css} alt="css"></img>
      <img className="skills__image" src={sass} alt="sass"></img>
      <img className="skills__image" src={nextjs} alt="nextjs"></img>
      <img className="skills__image" src={react} alt="react"></img>
      <img className="skills__image" src={javascript} alt="javascript"></img>
      <img className="skills__image" src={typescript} alt="typescript"></img>
      <img className="skills__image" src={node} alt="node"></img>
      <img className="skills__image" src={ruby} alt="ruby"></img>
      <img className="skills__image" src={sql} alt="sql"></img>
      <img className="skills__image" src={api} alt="api"></img>
      <img className="skills__image" src={json} alt="json"></img>
      <img className="skills__image" src={postman} alt="postman"></img>
    </section>
  );
}

export default Skills;
