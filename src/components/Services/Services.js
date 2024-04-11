import { Component } from "react";
import Intro from "./Intro";
import ServicesComp from './ServicesComp'
import "./style.css";
class Services extends Component {
  render() {
    return (
      <section id="services" className="container container__services">
        <Intro />
      </section>
    );
  }
}
export default Services;
