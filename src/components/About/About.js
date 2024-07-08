import React, { Component } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SignUp from "../Form/SignUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw", 
  bgcolor: "background.paper",
  boxShadow: 24,
  maxWidth: "400px",  
  borderRadius: 2,
};

class About extends Component {
  constructor() {
    super();
    this.state = {
      percentage: 75,
      open: false,
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
            <h1>
              LEADING THE WAY IN CLOUD, MOBILE AND WEB DEVELOPMENT INTEGRATION
            </h1>
            <p className="text">
              Empowering businesses with cloud innovation. Seamlessly
              integrating cloud services, web, opp development, and AI solutions
              for enhanced efficiency and competitiveness.
            </p>
            <div className="about__buttons">
              <button className="btn btn-primary" onClick={this.handleOpen}>
                Get In Touch
              </button>
              <a href="#services">
                <span>Our Services</span>
                <AiOutlineArrowDown />
              </a>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="about__video">
              <video
                src="https://res.cloudinary.com/dxllpuliy/video/upload/v1720285652/2516160-hd_1920_1080_24fps_bersas.mp4"
                alt="about"
                autoPlay
                muted
                loop
                style={{ width: "100%", borderRadius: "15px" }}
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
            <SignUp />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button onClick={this.handleClose}>Close</Button>
            </Box>
          </Box>
        </Modal>
      </section>
    );
  }
}

export default About;
