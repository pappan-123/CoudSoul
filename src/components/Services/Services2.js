import { Component } from "react";
import Intro from "./Intro";
import ServicesComp from './ServicesComp'
import "./style.css";
class Services2 extends Component {
  render() {
    return (
      <section id="services" className="container container__services">
        <ServicesComp />
      </section>
    );
  }
}
export default Services2;
