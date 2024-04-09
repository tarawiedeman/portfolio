import "./Home.scss";
import profilepicture from "../../assets/images/profile.jpg";
import Typewriter from "typewriter-effect";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";
import card1 from "../../assets/images/card1.jpg";
import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";

function Home() {
  return (
    <>
      <section className="home">
        <img
          src={profilepicture}
          className="home__image"
          alt="profilepicture"
        ></img>

        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .start()
              .typeString(
                "<span class=\"home__intro\">I'm Tara and I'm a </span><br/>"
              )
              .stop()
              .start()
              .typeString('<span class="home__role">Developer</span>')
              .pauseFor(1000)
              .deleteChars(9)
              .typeString('<span class="home__role">Solutions Engineer</span>')
              .pauseFor(1000)
              .deleteChars(18)
              .typeString('<span class="home__role">Client Advocate</span>')
              .pauseFor(1000)
              .deleteChars(15)
              .typeString('<span class="home__role">Problem Solver</span>')
              .start();
          }}
        />
      </section>
      {/* <div className="home__divider"></div> */}
      <section className="home__bio">
        <div className="home__card">
          <p>
            I'm a technical solutions consultant and developer that's passionate
            about exploring the{" "}
            <span className="home__accent">
              {" "}
              endless potential of technology{" "}
            </span>{" "}
            in adding value to our lives. I’m a positive, driven and
            detail-oriented professional that has always gravitated toward roles
            where I got to solve the toughest problems while collaborating with
            internal stakeholders and customers.
          </p>
          <img src={card2} className="home__image" alt="colourfulimage" />
        </div>
        <div className="home__card">
          <img src={card3} className="home__image" alt="image" />
          <p>
            I've worked in tech for eight years in both Research and Development
            and Professional Services. I have a degree in Business and Science
            so I'm equal parts{" "}
            <span className="home__accent">
              logical problem-solver and relationship builder.
            </span>{" "}
            Last year I completed my diploma in Software Engineering and the
            learning only continues!
          </p>
        </div>
        <div className="home__card">
          <p>
            My work contract ended in March 2024 and as a result I'm looking for
            a role where I can combine my{" "}
            <span className="home__accent">
              {" "}
              communication and critical thinking skills
            </span>
            , with my varied technical and programming skills.
          </p>
          <img src={card1} className="home__image" alt="shape" />
        </div>
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
      </section>
    </>
  );
}

export default Home;
