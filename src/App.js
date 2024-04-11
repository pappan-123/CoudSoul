import { Component } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import News from "./components/News/News";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubServices from "./components/SubServices/SubServices";
import SignUp from "./components/Form/SignUp";
import It from "./components/SubServices/It";
import Cloud from "./components/SubServices/Cloud"
import Software from "./components/SubServices/Software";
import ServicesComp from "./components/Services/ServicesComp";
import Intro from "./components/Services/Intro";
import Services2 from "./components/Services/Services2";


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={
          <div>
            <About />
            <Services/>
            <Portfolio />
            <Testimonials />
            <News />
            <Banner />
          </div>
        }/>
        <Route path="/form" element={<SignUp />} />
        <Route path="/it-solution" element={<It />} />
        <Route path="/cloud-solution" element={<Cloud />} />
        <Route path="/software-solution" element={<Software />} />
        <Route path="/services" element={<Services2 />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  );
};

export default App;
