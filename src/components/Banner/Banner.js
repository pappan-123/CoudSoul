import React, { useState } from 'react';
import "./style.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SignUp from '../Form/SignUp';

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

const Banner = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section id="banner" className="banner__container">
      <div className="container">
        <h1>
          Let's Boost Your Business
          <br /> With The Latest Technology
        </h1>
        {/* Use MUI Button instead of <button> for consistency */}
        <button className="btn btn-primary" onClick={handleOpen}>Get In Touch</button>

        {/* Modal Code Here */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
          <SignUp/>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button onClick={handleClose}>Close</Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </section>
  );
}

export default Banner;
