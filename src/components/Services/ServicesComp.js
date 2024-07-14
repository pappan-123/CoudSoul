import { Component } from "react";
import { GrShieldSecurity } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";
import { Link } from 'react-router-dom';

class ServicesComp extends Component {
  render() {
    return (
      <div className="services__servicesComp">
        <div>
          <h1>Our Services For The Technology You Need</h1>
          {/* <button className="btn btn-primary">Load More</button> */}
        </div>
        <div>
          <a href="/Maintenance-Services">
            <div>
              <div className="icon">
                <GrShieldSecurity />
              </div>
              <h4>Maintenance Services</h4>
              <p>Maintenance Services, Break Fix, Asset Management</p>
            </div>
          </a>
          <a href="/Data-Center-Services">
            <div>
              <div className="icon">
                <BsLaptop />
              </div>
              <h4>Data Center Services</h4>
              <p>Data Centre Services, Server Maintenance, Storage Maintenance, Network Maintenance</p>
            </div>
          </a>
          <a href="/Professional_Services">
            <div>
              <div className="icon">
                <GrShieldSecurity />
              </div>
              <h4>Professional Services</h4>
              <p>Wi-Fi Surveys, On-Site Engineering Resources, Wi-Fi Surveys, Migration, IMAC, ITAD</p>
            </div>
          </a>
          <a href="/Software_Design_Development">
            <div>
              <div className="icon">
                <BsLaptop />
              </div>
              <h4>Software Design & Development</h4>
              <p>Software Development, Web Development, App Development, Graphic Design, Digital Marketing</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default ServicesComp;
