import "./Projects.scss";
import CapstoneSkills from "../../assets/images/CapstoneSkills.jpg";
import BrainflixSkills from "../../assets/images/BrainflixSkills.jpg";
import PokedexSkills from "../../assets/images/PokedexSkills.jpg";
import AmexSkills from "../../assets/images/AMEXskills.jpg";
import MoodReaderSkills from "../../assets/images/MoodReaderSkills.jpg";
import Amex1 from "../../assets/images/AMEX1.jpg";
import Amex2 from "../../assets/images/AMEX2.jpg";
import Brainflix1 from "../../assets/images/brainflix1.jpg";
import Brainflix2 from "../../assets/images/brainflix2.jpg";
import Brainflix3 from "../../assets/images/brainflix3.jpg";
import Brainflix4 from "../../assets/images/brainflix4.jpg";
import PMRhome from "../../assets/images/PMRhome.jpg";
import PMRdashboard from "../../assets/images/PMRdashboard.jpg";
import PMRpayment from "../../assets/images/PMRpayment.jpg";
import Pokedex1 from "../../assets/images/Pokedex1.jpg";
import Pokedex2 from "../../assets/images/Pokedex2.jpg";
import Pokedex3 from "../../assets/images/Pokedex3.jpg";

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__heading--project">PayMyRent</h2>
      <div className="projects__description">
        <p>
          PayMyRent is a fully-responsive software application that is helping
          renters pay their individual portion of rent and utilities by credit
          card. This prevents renters that share accomodation from having to
          aggregate rent amongst a group; it also eliminates the need to use
          outdated payment methods like bank drafts, cheques or even
          e-transfers.
        </p>
        <br></br>
        <p>
          PayMyRent's front-end was developed with React and styled with SaSS;
          it also leverages axios. The back-end runs an Express server on Node
          and uses Knex to create and connect to a database. The transactions
          facilitated on this site are done through stripe. Stripe handles the
          transaction itself and ensures security and privacy of transaction
          information, which is never sent or transmitted to or through this
          application.
        </p>
        <br></br>
        <p>
          This application is fully responsive from mobile to desktop viewports
          with dynamic data generation, and the back-end runs Express on top of
          NodeJS supporting database CRUD operations. Sample data has been
          prepopulated within the datebase for various properties, suites,
          tenants and rent amounts. <br></br>
          <br></br>The login functionality of the application is fully
          operational and any tenant in the tenant table can be created as a
          user (via create account); this will add the user to the users table,
          and allow for successful authentication.
        </p>
        <br></br>
        <p>Creating this project was alot of fun, check it out!</p>

        <div className="projects__links">
          <a href="https://github.com/tarawiedeman/paymyrent" target="blank">
            <p>Front-end Code</p>
          </a>
          <a
            href="https://github.com/tarawiedeman/paymyrent_api"
            target="blank"
          >
            <p>Back-end Code</p>
          </a>
        </div>
      </div>

      <div className="projects__languages">
        <img
          className="projects__image"
          alt="skills"
          src={CapstoneSkills}
        ></img>
      </div>

      <div className="capstone__preview">
        <img
          src={PMRhome}
          alt="homescreen"
          className="capstone__preview--home"
        ></img>

        <img
          src={PMRdashboard}
          alt="dashboard"
          className="capstone__preview--dashboard"
        ></img>
        <img
          src={PMRpayment}
          alt="payment"
          className="capstone__preview--payment"
        ></img>
      </div>

      <h2 className="projects__heading--project">MoodReader</h2>
      <div className="projects__description">
        <p>
          This project is in progress. MoodReader is a TypeScript application
          that makes helpful recommendations to users based on the mood they're
          in. I built this application collaboratively with a friend as a way to
          strengthen my skills and knowledge of TypeScript and how it works with
          React.
        </p>
      </div>
      <div className="projects__links">
        <a href="https://github.com/alexzaloga7/moodreader" target="blank">
          <p>Front-end Code</p>
        </a>
      </div>

      <div className="projects__languages">
        <img
          className="moodreader__skills"
          alt="skills"
          src={MoodReaderSkills}
        ></img>
      </div>

      <div className="moodreader__preview">
        <p>Images coming soon.</p>
      </div>

      <h2 className="projects__heading--project">
        American Express Industry Project
      </h2>
      <div className="projects__description">
        <p>
          As part of a 24hr hackathon our team of UX designers, Data Scientists
          and Developers collaboratively created a chatbot that leveraged AI and
          ML to increase the usage of AMEX points amongst customers seeking
          travel, thereby improving the AMEX customer experience in a prime
          target market.
        </p>
      </div>

      <div className="projects__languages">
        <img className="amex__skills" alt="skills" src={AmexSkills}></img>
      </div>

      <div className="amex__preview">
        <img
          src={Amex1}
          alt="amexwebpage"
          className="amex__preview--image"
        ></img>
        <img
          src={Amex2}
          alt="amexwebpage"
          className="amex__preview--image"
        ></img>
      </div>

      <h2 className="projects__heading--project">BrainFlix</h2>
      <div className="projects__description">
        <p>
          BrainFlix is a responsive full-stack web application similar to
          YouTube. I developed this application as one of my projects at
          Brainstation throughout three sprints. <br></br> <br></br>The home
          page features a large full-width video player, information about the
          video including the uploader’s name, view and like counts, and a
          written description. It also features a comment section, where users
          can submit comments about the video. The user can also browse a list
          of other videos and bring those into view. <br></br>
          <br></br>The site’s upload page allows users to upload a video with a
          title and description. I utilized the React framework, libraries such
          as React Router and Axios, and a design styleguide to develop the
          site’s front-end, as well as Express to create a back-end API. API
          endpoints include one that retrieves general high-level information
          for all videos, one that retrieves more detailed information for the
          specific video being displayed on the home page, and one that posts a
          new video (through the upload page) and subsequently displays that
          video in the list of available videos on the home page.
        </p>
      </div>
      <div className="projects__links">
        <a
          href="https://github.com/tarawiedeman/tara-wiedeman-brainflix"
          target="blank"
        >
          <p>Front-end Code</p>
        </a>
        <a href="https://github.com/tarawiedeman/brainflix-api" target="blank">
          <p>Back-end Code</p>
        </a>
      </div>
      <div className="projects__languages">
        <img
          className="projects__image"
          alt="skills"
          src={BrainflixSkills}
        ></img>
      </div>

      <div className="brainflix__preview">
        <img
          src={Brainflix1}
          alt="webpage"
          className="brainflix__preview--3"
        ></img>
        <img
          src={Brainflix2}
          alt="webpage"
          className="brainflix__preview--2"
        ></img>
      </div>

      <div className="brainflix__preview">
        <img
          src={Brainflix4}
          alt="webpage"
          className="brainflix__preview--4"
        ></img>
      </div>

      <h2 className="projects__heading--project">Pokedex</h2>
      <div className="projects__description">
        <p>
          Pokedex is an application that was built as part of a 4-hour
          hackathon; it allows you to see the special powers of various pokemon
          as they're clicked. This application leverages an external API to
          capture information about each Pokemon.{" "}
        </p>
      </div>
      <div className="projects__links">
        <a
          href="https://github.com/tarawiedeman/brainstationhackathon23"
          target="blank"
        >
          <p>Front-end Code</p>
        </a>
      </div>

      <div className="projects__languages">
        <img className="projects__image" alt="skills" src={PokedexSkills}></img>
      </div>

      <div className="pokedex__preview">
        <img
          src={Pokedex1}
          alt="pokemonwebpage"
          className="pokedex__preview--image"
        ></img>
        <img
          src={Pokedex2}
          alt="pokemonwebpage"
          className="pokedex__preview--image"
        ></img>
        <img
          src={Pokedex3}
          alt="pokemonwebpage"
          className="pokedex__preview--lastimage"
        ></img>
      </div>
    </section>
  );
}

export default Projects;
