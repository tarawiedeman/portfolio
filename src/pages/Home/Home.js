import "./Home.scss";
import profilepicture from "../../assets/images/profile.jpg";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";

function Home() {
  return (
    <>
      <div className="home">
        <img
          src={profilepicture}
          className="home__image"
          alt="profilepicture"
        ></img>
        <section className="home__name">
          <p>Hi, Tara here 👋🏽</p>
          <p>
            I'm a technical solutions consultant and developer that's passionate
            about exploring the endless potential of technology in adding
            *value* to our lives. I'm also a travel enthusiast and dog-mom
            extraordinaire based out of beautiful Victoria, BC.
          </p>
          <p>
            I’m a positive, driven and detail-oriented professional that has
            always gravitated toward roles where I got to solve the toughest
            problems while collaborating with internal stakeholders and
            customers.
          </p>

          <p>
            I've worked in tech for eight years in both Research and Development
            and Professional Services. I have a degree in Business and Science
            so I'm equal parts logical problem-solver and relationship builder.
            Last year I completed my diploma in Software Engineering and the
            learning only continues!
          </p>

          <p>
            My work contract ended in March 2024 and as a result I'm looking for
            a role where I can combine my communication and critical thinking
            skills, with my varied technical and programming skills.
          </p>
        </section>
      </div>
      {/* <section className="home__social">
        <a href="https://www.linkedin.com/in/tarawiedeman/" target="blank">
          <img src={linkedin} alt="linkedin-icon" className="home__icon"></img>
        </a>
        <a href="https://github.com/tarawiedeman/" target="blank">
          <img src={github} alt="github-icon" className="home__icon"></img>
        </a>
      </section> */}
    </>
  );
}

export default Home;
