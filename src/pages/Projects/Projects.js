import "./Projects.scss";
import Brainflix1 from "../../assets/images/brainflix1.jpg";
import Brainflix3 from "../../assets/images/brainflix3.jpg";
import PMRdashboard from "../../assets/images/PMRdashboard.jpg";
import PMRpayment from "../../assets/images/PMRpayment.jpg";
import Pokedex1 from "../../assets/images/Pokedex1.jpg";
import Pokedex2 from "../../assets/images/Pokedex2.jpg";
import Pokedex3 from "../../assets/images/Pokedex3.jpg";
import ForgotPassword from "../../assets/images/forgotpassword.jpg";
import BudLibrary from "../../assets/images/BUDlibrary.jpg";
import WhoWeServe from "../../assets/images/WWS.jpg";
import AllProducts from "../../assets/images/AllProducts.jpg";
import AllCategories from "../../assets/images/AllCategories.jpg";
import FormulationSupport from "../../assets/images/FormulationSupport.jpg";
import PressReleases from "../../assets/images/PressReleases.jpg";
import api from "../../assets/images/api.png";
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
import sql from "../../assets/images/sql.png";
import typescript from "../../assets/images/typescript.png";
import vsc from "../../assets/images/vsc.png";
import stripe from "../../assets/images/stripe.jpg";
import jwt from "../../assets/images/jwt.jpg";

function Projects() {
  return (
    <section className="projects">
      <div className="projects__container">
        <h2 className="projects__heading--project">
          <a href="https://www.medisca.com/" target="_blank">
            Medisca
          </a>
        </h2>
        <div className="projects__description medisca">
          <p>
            Medisca is a global supplier of pharmaceutical products and services
            and during my contract I collaborated with a small team to rebuild
            their entire large and complex global application from scratch,
            including an integration with a legacy ERP system, all within six
            months.
          </p>
          <p>
            During this project I was primarily responsible for building
            features based on design files and client discussions. I reviewed
            these client feature requests and used critical thinking skills to
            ask insightful questions and ensure accurate requirement gathering.
            As a full-stack developer, I built both front-end features and
            accompanying back-end API endpoints, SQL data queries, or components
            in the MVC. I leveraged diverse skills in:{" "}
          </p>
        </div>
        <div className="projects__languages">
          <img className="projects__skill" src={git} alt="git"></img>
          <img className="projects__skill" src={npm} alt="npm"></img>
          <img
            className="projects__skill"
            src={vsc}
            alt="visualstudiocode"
          ></img>
          <img className="projects__skill" src={docker} alt="docker"></img>
          <img className="projects__skill" src={html} alt="html"></img>
          <img className="projects__skill" src={nextjs} alt="nextjs"></img>
          <img className="projects__skill" src={react} alt="react"></img>
          <img
            className="projects__skill"
            src={javascript}
            alt="javascript"
          ></img>
          <img
            className="projects__skill"
            src={typescript}
            alt="typescript"
          ></img>
          <img className="projects__skill" src={ruby} alt="ruby"></img>
          <img className="projects__skill" src={sql} alt="sql"></img>
          <img className="projects__skill" src={api} alt="api"></img>
          <img className="projects__skill" src={json} alt="json"></img>
          <img className="projects__skill" src={postman} alt="postman"></img>
        </div>

        <p className="projects__description medisca">
          The images shown below are features that I built or updated with
          revised requirements or styling. For example, I built the password
          recovery functionality and later created an account confirmation
          feature for additional security.
        </p>
        <p className="projects__description medisca">
          The BUD studies page shown below allowed me the opportunity to add
          filters for the accompanying data table using ransack, as well as add
          conditional logic to permit certain user groups to download documents
          from the table.
        </p>
        <p className="projects__description medisca">
          In addition to learning how to leverage data from an integrated ERP
          system, I also learned how to bring in data from a headless CMS system
          and leverage that to create dynamic content on the front-end.
        </p>
        <p className="projects__description medisca">
          Collaborating with a small team to rebuild this application using
          modern languages was alot of fun!
        </p>
        <div className="medisca__images">
          <a href="https://www.medisca.com/login" target="_blank">
            <img
              className="medisca__preview"
              alt="forgotpasswordpage"
              src={ForgotPassword}
            ></img>
          </a>
          <a
            href="https://www.medisca.com/formulas/bud-library"
            target="_blank"
          >
            <img
              className="medisca__preview"
              alt="budlibrarypage"
              src={BudLibrary}
            ></img>
          </a>
          <a href="https://www.medisca.com/who-we-serve" target="_blank">
            <img
              className="medisca__preview"
              alt="whoweservepage"
              src={WhoWeServe}
            ></img>
          </a>
          <a
            href="https://www.medisca.com/products/categories/all"
            target="_blank"
          >
            <img
              className="medisca__preview"
              alt="allproducts"
              src={AllProducts}
            ></img>
          </a>
          <a
            href="https://www.medisca.com/products/shop-by-category"
            target="_blank"
          >
            <img
              className="medisca__preview"
              alt="allcategories"
              src={AllCategories}
            ></img>
          </a>
          <a href="https://www.medisca.com/press-releases" target="_blank">
            <img
              className="medisca__preview"
              alt="pressreleases"
              src={PressReleases}
            ></img>
          </a>
          <a
            href="https://www.medisca.com/services#formulation-support"
            target="_blank"
          >
            <img
              className="medisca__preview"
              alt="formulationsupport"
              src={FormulationSupport}
            ></img>
          </a>
        </div>
      </div>
      <div className="projects__container">
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
          <p>
            PayMyRent's front-end was developed with React and styled with SaSS;
            it also leverages axios. The back-end runs an Express server on Node
            and uses Knex to create and connect to a database. The transactions
            facilitated on this site are done through Stripe. Stripe handles the
            transaction itself and ensures security and privacy of transaction
            information, which is never sent or transmitted to or through this
            application.
          </p>
          <p>
            This application is fully responsive from mobile to desktop
            viewports with dynamic data generation, and the back-end runs
            Express on top of NodeJS supporting database CRUD operations. Sample
            data has been prepopulated within the datebase for various
            properties, suites, tenants and rent amounts.
          </p>
          <p>
            The login functionality of the application is fully operational and
            any tenant in the tenant table can be created as a user (via create
            account); this will add the user to the users table, and allow for
            successful authentication.
          </p>
          <div className="projects__highlight">
            I am currently working on containerizing this application and
            deploying it on AWS. Stay tuned!
          </div>
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
          <img className="projects__skill" src={git} alt="git"></img>
          <img className="projects__skill" src={npm} alt="npm"></img>
          <img
            className="projects__skill"
            src={vsc}
            alt="visualstudiocode"
          ></img>
          <img className="projects__skill" src={html} alt="html"></img>
          <img className="projects__skill" src={react} alt="react"></img>
          <img
            className="projects__skill"
            src={javascript}
            alt="javascript"
          ></img>
          <img className="projects__skill" src={node} alt="node"></img>
          <img className="projects__skill" src={sql} alt="sql"></img>
          <img className="projects__skill" src={stripe} alt="stripe"></img>
          <img className="projects__skill" src={jwt} alt="jwt"></img>
          <img className="projects__skill" src={api} alt="api"></img>
          <img className="projects__skill" src={json} alt="json"></img>
          <img className="projects__skill" src={postman} alt="postman"></img>
        </div>

        <div className="capstone__preview">
          <img
            src={PMRdashboard}
            alt="dashboardscreen"
            className="capstone__preview--dashboard"
          ></img>
          <img
            src={PMRpayment}
            alt="paymentscreen"
            className="capstone__preview--payment"
          ></img>
        </div>
      </div>

      <div className="projects__container">
        <h2 className="projects__heading--project">
          American Express Industry Project
        </h2>
        <div className="projects__description">
          <p>
            As part of a 24hr hackathon our team of UX designers, Data
            Scientists and Developers collaboratively created a chatbot that
            leveraged AI and ML to increase the usage of AMEX points amongst
            customers seeking travel, thereby improving the AMEX customer
            experience in a prime target market.
          </p>
        </div>

        <div className="projects__languages">
          <img className="projects__skill" src={git} alt="git"></img>
          <img className="projects__skill" src={github} alt="github"></img>
          <img className="projects__skill" src={npm} alt="npm"></img>
          <img
            className="projects__skill"
            src={vsc}
            alt="visualstudiocode"
          ></img>
          <img className="projects__skill" src={html} alt="html"></img>
          <img className="projects__skill" src={react} alt="react"></img>
          <img
            className="projects__skill"
            src={javascript}
            alt="javascript"
          ></img>
          <img className="projects__skill" src={api} alt="api"></img>
          <img className="projects__skill" src={json} alt="json"></img>
          <img className="projects__skill" src={sql} alt="sql"></img>
          <img className="projects__skill" src={postman} alt="postman"></img>
          <img className="projects__skill" src={node} alt="node"></img>
        </div>
      </div>

      <div className="projects__container">
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
            <br></br>The site’s upload page allows users to upload a video with
            a title and description. I utilized the React framework, libraries
            such as React Router and Axios, and a design styleguide to develop
            the site’s front-end, as well as Express to create a back-end API.
            API endpoints include one that retrieves general high-level
            information for all videos, one that retrieves more detailed
            information for the specific video being displayed on the home page,
            and one that posts a new video (through the upload page) and
            subsequently displays that video in the list of available videos on
            the home page.
          </p>
        </div>
        <div className="projects__links">
          <a
            href="https://github.com/tarawiedeman/tara-wiedeman-brainflix"
            target="blank"
          >
            <p>Front-end Code</p>
          </a>
          <a
            href="https://github.com/tarawiedeman/brainflix-api"
            target="blank"
          >
            <p>Back-end Code</p>
          </a>
        </div>
        <div className="projects__languages">
          <img className="projects__skill" src={git} alt="git"></img>
          <img className="projects__skill" src={github} alt="github"></img>
          <img className="projects__skill" src={npm} alt="npm"></img>
          <img
            className="projects__skill"
            src={vsc}
            alt="visualstudiocode"
          ></img>
          <img className="projects__skill" src={html} alt="html"></img>
          <img className="projects__skill" src={react} alt="react"></img>
          <img
            className="projects__skill"
            src={javascript}
            alt="javascript"
          ></img>
          <img className="projects__skill" src={api} alt="api"></img>
          <img className="projects__skill" src={json} alt="json"></img>
        </div>

        <div className="brainflix__preview">
          <img
            src={Brainflix1}
            alt="upload"
            className="brainflix__preview--1"
          ></img>
        </div>

        <div className="brainflix__preview">
          <img
            src={Brainflix3}
            alt="preview"
            className="brainflix__preview--3"
          ></img>
        </div>
      </div>

      <div className="projects__container">
        <h2 className="projects__heading--project">Pokedex</h2>
        <div className="projects__description">
          <p>
            Pokedex is an application that was built as part of a 4-hour
            hackathon; it allows you to see the special powers of various
            pokemon as they're clicked. This application leverages an external
            API to capture information about each Pokemon.{" "}
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
          <img className="projects__skill" src={git} alt="git"></img>
          <img className="projects__skill" src={github} alt="github"></img>
          <img
            className="projects__skill"
            src={vsc}
            alt="visualstudiocode"
          ></img>
          <img className="projects__skill" src={html} alt="html"></img>
          <img
            className="projects__skill"
            src={javascript}
            alt="javascript"
          ></img>
          <img className="projects__skill" src={api} alt="api"></img>
          <img className="projects__skill" src={json} alt="json"></img>
        </div>

        <div className="pokedex__preview">
          <img
            src={Pokedex1}
            alt="selectionpage"
            className="pokedex__preview--image"
          ></img>
          <img
            src={Pokedex2}
            alt="selectedoption"
            className="pokedex__preview--image"
          ></img>
          <img
            src={Pokedex3}
            alt="selectedoption"
            className="pokedex__preview--lastimage"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Projects;
