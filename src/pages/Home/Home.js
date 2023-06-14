import "./Home.scss";
import postcard from "../../assets/images/Postcard.jpg";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";
import careerjourney from "../../assets/images/careerjourney.jpg";

function Home() {
  return (
<section>
<div className="home">
    <img src={postcard} className="home__image" alt="postcard"></img> 
<div className="home__columncontainer">
    <p className="home__name">Hi, Tara here 👋🏽 <br></br> <br></br>I'm a Full Stack Developer, travel-enthusiast, and dog-mom extraordinaire based out of beautiful Victoria, BC. <br></br><br></br> I recently graduated from BrainStation's full-stack software development diploma program, where I strengthened my skills in Javascript, TypeScript, React, SQL, Node, Express and many others. I am most comfortable working with React JS as a front-end framework and NodeJS and ExpressJS as back-end frameworks but have a breadth of other knowledge and a curious mind!<br></br><br></br> I've worked in tech for seven years in Technical Solutions Consulting and have a degree in Business and Science so I'm equal parts logical problem-solver and relationship builder. The tasks I enjoy the most are problem-solving, building API requests or request handling, and troubleshooting complex systems.<br></br><br></br>I'm currently searching for a position as a Software Developer. </p>
<div className="home__social">
<a href="https://www.linkedin.com/in/tarawiedeman/" target="blank"><img src={linkedin} alt="linkedin-icon" className="home__icon"></img></a>
<a href="https://github.com/tarawiedeman/" target="blank"><img src={github} alt="github-icon" className="home__icon"></img></a>
</div>
</div>
</div>
<div className="journey">
  <h2 className="journey__header"> My Career Journey</h2>
  <img src={careerjourney} className="journey__image" alt="journey"></img>
</div>




</section>
  );
}

export default Home;