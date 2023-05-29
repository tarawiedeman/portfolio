import "./Home.scss";
import postcard from "../../assets/Postcard.jpg";

function Home() {
  return (
<section>
<div className="home">
    <img src={postcard} className="home__image"></img>
    <p className="home__name">Hi, Tara here. <br></br> <br></br>I'm a Full Stack Developer, travel-enthusiast, and dog-mom extraordinaire based out of beautiful Victoria, BC. <br></br><br></br> I recently graduated from BrainStation's full-stack software development diploma program, where I strengthened my skills in HTML, CSS, and Javascript. I am most comfortable working with React JS as a front-end framework and NodeJS and ExpressJS as back-end frameworks but have a breadth of other knowledge and a curious mind! <br></br><br></br> I've worked in tech for seven years in Technical Solutions Consulting and have a degree in Business in Science so I'm equal parts logical problem-solver and relationship builder. I love problem-solving and designing software solutions that make customers happy! <br></br><br></br>I'm currently searching for a position as a Junior Software Developer. </p>
    //add linkedin, github logos here
</div>

</section>
  );
}

export default Home;