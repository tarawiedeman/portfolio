import "./Home.scss";
import profilepicture from "../../assets/images/profile.jpg";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";

function Home() {
  return (
    <section>
      <div className="home">
        <img
          src={profilepicture}
          className="home__image"
          alt="profilepicture"
        ></img>
        <div className="home__columncontainer">
          <p className="home__name">
            Hi, Tara here 👋🏽 <br></br> <br></br>I'm a Full Stack Developer,
            travel-enthusiast, and dog-mom extraordinaire based out of beautiful
            Victoria, BC. <br></br>
            <br></br> I’m a positive, driven and detail-oriented professional
            that has always gravitated toward roles where I got to solve the
            toughest problems while collaborating with others. I'm equal parts
            problem solver and relationship builder. Right now I'm in a fun
            chapter of my career where I'm growing my technical skillset! I have
            professional experience using React, JavaScript, TypeScript, Ruby on
            Rails, Node.js, Express, Tailwind and Sass. <br></br>
            <br></br>I've worked in tech for seven years in Technical Solutions
            Consulting and have a degree in Business and Science so I'm equal
            parts logical problem-solver and relationship builder. I completed
            BrainStation's Software Engineering Bootcamp as well as Lighthouse
            Labs Front-end Fundamentals course. The tasks I enjoy the most are
            building interactive components in React and TypeScript and sending
            data from those components to a database or external system.
            <br></br>
            <br></br>As my current work contract is ending February 2024, I'm
            looking for work as a Software Developer.
          </p>
          <div className="home__social">
            <a href="https://www.linkedin.com/in/tarawiedeman/" target="blank">
              <img
                src={linkedin}
                alt="linkedin-icon"
                className="home__icon"
              ></img>
            </a>
            <a href="https://github.com/tarawiedeman/" target="blank">
              <img src={github} alt="github-icon" className="home__icon"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
