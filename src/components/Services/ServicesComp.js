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
          <button className="btn btn-primary">Load More</button>
        </div>
        <div>
          <Link to="/it-solution">
            <div>
              <div className="icon">
                <GrShieldSecurity />
              </div>
              <h4>IT Solutions & Services</h4>
              <p>Comprehensive IT solutions to enhance your business operations.</p>
            </div>
          </Link>
          <Link to="/cloud-solution">
            <div>
              <div className="icon">
                <BsLaptop />
              </div>
              <h4>Cloud Solutions & Services</h4>
              <p>Scalable and secure cloud solutions for modern enterprises.</p>
            </div>
          </Link>
          <Link to="/software-solution">
            <div>
              <div className="icon">
                <GrShieldSecurity />
              </div>
              <h4>Software Development</h4>
              <p>Custom software development to meet your unique business needs.</p>
            </div>
          </Link>
          {/* 
          <div>
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>IT Consultant</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default ServicesComp;
