import "./Skills.scss";
import skills from "../../assets/images/skills.gif";

function Skills() {
  return (
    <section className="skills__container">
      <div>
        <img className="skills__image" src={skills} alt="skills"></img>
      </div>
    </section>
  );
}

export default Skills;
