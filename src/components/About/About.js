import React, { Component } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SignUp from "../Form/SignUp";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "auto",
  height:"auto",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius:"10%",
};

class About extends Component {
  constructor() {
    super();
    this.state = {
      percentage: 75,
      open: false // Adding open state here
    };
  }

  // Methods to handle opening and closing the modal
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <section className="about__container">
        <div className="container">
          <div>
            <h1>Advance Innovation For IT Solutions</h1>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              eligendi molestiae ex harum, sed animi at aliquam quaerat odit
              repudiandae dicta veniam, beatae aliquid, voluptatum nostrum saepe
              doloribus excepturi. Facere!
            </p>
            <div className="about__buttons">
              <button className="btn btn-primary" onClick={this.handleOpen}>Get In Touch</button>
              <a href="#services">
                <span>Our Services</span>
                <AiOutlineArrowDown />
              </a>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="about__image">
              <img
                src="https://st4.depositphotos.com/17586788/i/600/depositphotos_247586928-stock-photo-a-successful-business-girl-in.jpg"
                alt="about"
              />
            </div>
            <div className="about__progress">
              <div className="progress_bar">
                <CircularProgressbar
                  value={this.state.percentage}
                  text={`${this.state.percentage}%`}
                />
              </div>
              <h4>
                Business Growth
                <br />
                <small>Level is high</small>
              </h4>
            </div>
          </div>
        </div>

        {/* Modal part */}
        <Modal
  open={this.state.open}
  onClose={this.handleClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box sx={style}>
    <SignUp/>
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
        {/* Use this.handleClose instead of handleClose */}
        <Button onClick={this.handleClose}>Close</Button>
      </Box>
  </Box>
</Modal>

      </section>
    );
  }
}

export default About;
