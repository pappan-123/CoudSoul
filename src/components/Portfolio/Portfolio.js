import { Component } from "react";
import Work from "./Work";
import "./style.css";

class Portfolio extends Component {
  constructor() {
    super();
    this.works = [
      {
        img: "https://miro.medium.com/max/1400/0*MYd28f8vpLiE34ij.jpeg",
        title: "AI-Powered Dashboard Design",
        text:
          "Transform your data into actionable insights with our modern, AI-powered dashboard designs."
      },
      {
        img:
          "https://i.pinimg.com/originals/80/a1/17/80a1173fb50fe01bac507532338eb336.png",
        title: "Smart Food Consumption Web App",
        text:
          "Optimize your food management with our intelligent web app designed to streamline consumption and reduce waste."
      },
      {
        img:
          "https://i.pinimg.com/originals/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.png",
        title: "Future-Proof Social Media dApp",
        text:
          "Explore the future of social interactions with our decentralized social media app built on Web 3.0 technologies."
      }
    ];
  }

  render() {
    return (
      <section className="container container__portfolio" id="portfolio">
        {this.works.map((work, index) => {
          if (index === 1) {
            return (
              <>
                <div className="portfolio__header">
                  <h1>See Our Works Or Portfolio</h1>
                  <button className="btn btn-primary">More About</button>
                </div>
                <Work img={work.img} title={work.title} text={work.text} />
              </>
            );
          }
          return <Work img={work.img} title={work.title} text={work.text} />;
        })}
      </section>
    );
  }
}

export default Portfolio;
