import "./Footer.scss";
import signature from "../../assets/images/signature.png";




function Footer() {

    return (
    <section>
    <div className="footer">
        <img src={signature} alt="signature" className="footer__image"/>
    </div>


    </section>


    );
}
export default Footer;