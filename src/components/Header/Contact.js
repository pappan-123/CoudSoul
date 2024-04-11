import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:info@techcorltd.co.uk ">
          <AiFillMail />
          <span>info@techcorltd.co.uk </span>
        </a>

        <a href="tel:+919149623809">
          <AiFillPhone />
          <span>+919149623809</span>
        </a>
      </div>
    );
  }
}

export default Contact;
