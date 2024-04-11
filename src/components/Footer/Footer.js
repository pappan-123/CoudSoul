import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./style.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer id="contact" className="container footer__container">
        <div className="about">
          <h3>TEK CLOUDSOUL PVT.LTD</h3>
          <p className="text">
            We have proudly expanded our operations beyond our headquarters to
            serve clients in multiple countries across Asia the Middle East,
            Europe and North America
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <CgInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="/it-solution" className="text">
                IT Solutions and Services
              </a>
            </li>
            <li>
              <a href="/cloud-solution" className="text">
                CORE SERVICES IN CLOUD
              </a>
            </li>
            <li>
              <a href="/software-solution" className="text">
                Software Development Services
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <address className="text">
                Office: UK: Office1, The Oaks,Clews RD, Redditch, B98 7ST
                UnitedKingdom INDIA:South Block, Bahu Plaza, J&K, India
              </address>
            </li>
            <li>
              <a href="tel:+919149623809" className="text">
                Tel : +919149623809
              </a>
            </li>
            <li>
              <a href="mailto:info@techcorltd.co.uk " className="text">
                Email: info@techcorltd.co.uk 
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
