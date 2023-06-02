import "./Projects.scss";
import react from "../../assets/react.png";
import javascript from "../../assets/js.png";


function Projects() {
  return (
<section className="projects">
<h1 className="projects__heading">Projects</h1>
<h2 className="projects__heading--project">PayMyRent</h2>
<div className="projects__description">
<p>PayMyRent is a fully-responsive software application that is helping renters pay their individual portion of rent and utilities by credit card. This prevents renters that share accomodation from having to aggregate rent amongst a group; it also eliminates the need to use outdated payment methods like bank drafts, cheques or even e-transfers.</p>
<br></br>
<p>PayMyRent's front-end was developed with React and styled with SaSS; it also leverages axios. The back-end runs an Express server on Node and uses Knex to create and connect to a database. The transactions facilitated on this site are done through stripe. Stripe handles the transaction itself and ensures security and privacy of transaction information, which is never sent or transmitted to or through this application.</p>
<br></br>
<p>This application is fully responsive from mobile to desktop viewports with dynamic data generation, and the back-end runs Express on top of NodeJS supporting database CRUD operations. Sample data has been prepopulated within the datebase for various properties, suites, tenants and rent amounts. <br></br><br></br>The login functionality of the application is fully operational and any tenant in the tenant table can be created as a user (via create account); this will add the user to the users table, and allow for successful authentication.</p>
<br></br><p>Creating this project was alot of fun, check it out!</p>

<div className="projects__links">
<a href="https://github.com/tarawiedeman/paymyrent" target="blank"><h3>Front-end Code</h3></a>
<a href="https://github.com/tarawiedeman/paymyrent_api" target="blank"><h3>Back-end Code</h3></a>
</div>
</div>

<h2 className="projects__skills">Skills</h2>
<div className="projects__languages">
  <img src={react} className="projects__icon--languages" alt="react"></img>
  <img src={javascript} className="projects__icon--languages" alt="react"></img>

</div>

<h2 className="projects__heading--project">BrainFlix</h2>
<div className="projects__description">
<p>BrainFlix is a responsive full-stack web application similar to YouTube. I developed this application as one of my projects at Brainstation throughout three sprints. <br></br> <br></br>The home page features a large full-width video player, information about the video including the uploader’s name, view and like counts, and a written description. It also features a comment section, where users can submit comments about the video. The user can also browse a list of other videos and bring those into view. <br></br><br></br>The site’s upload page allows users to upload a video with a title and description.
I utilized the React framework, libraries such as React Router and Axios, and a design styleguide to develop the site’s front-end, as well as Express to create a back-end API. API endpoints include one that retrieves general high-level information for all videos, one that retrieves more detailed information for the specific video being displayed on the home page, and one that posts a new video (through the upload page) and subsequently displays that video in the list of available videos on the home page.</p>
</div>
<div className="projects__links">
<a href="https://github.com/tarawiedeman/tara-wiedeman-brainflix" target="blank"><h3>Front-end Code</h3></a>
<a href="https://github.com/tarawiedeman/brainflix-api" target="blank"><h3>Back-end Code</h3></a>
</div>

<h2 className="projects__heading--project">Pokedex</h2>
<div className="projects__description">
<p>Pokedex is an application allowing you to see the special powers of various pokemon as they're clicked. This application leverages an external API to capture information about each Pokemon</p>
</div>
<div className="projects__links">
<a href="https://github.com/tarawiedeman/brainstationhackathon23" target="blank"><h3>Front-end Code</h3></a>

</div>
</section>
  );
}

export default Projects;