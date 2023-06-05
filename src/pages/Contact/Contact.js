import "./Contact.scss";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";

function Contact() {
    return (

        <section>
            <div className="contact">
            <p>Let's build effective, scalable software solutions together!</p>
            <p>I am currently looking for a full-time software development role. </p>
            <p className="contact__bold">tara.wiedeman@gmail.com</p>
            </div>

            <div className="contact__social">
            <a href="https://www.linkedin.com/in/tarawiedeman/" target="blank"><img src={linkedin} alt="linkedin-icon" className="contact__icon"></img></a>
            <a href="https://github.com/tarawiedeman/" target="blank"><img src={github} alt="github-icon" className="contact__icon"></img></a>
            </div>

    </section>
    );

}

export default Contact;