import { Component } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import HotNews from "./HotNews";
import LatestNews from "./LatestNews";
import "./style.css";

class News extends Component {
  constructor() {
    super();
    this.hotNews = [
      {
        title: "Revolutionizing AI Solutions",
        avatar:
          "https://res.cloudinary.com/dxllpuliy/image/upload/v1720292253/premium_photo-1681121353159-3278949ff491_l4bbwv.jpg",
        text:
          "Our cutting-edge AI solutions are transforming industries by automating processes, enhancing decision-making, and delivering personalized experiences. Join us in leading the AI revolution.",
        author: "Sudipta Saputra",
        role: "AI Consultant"
      },
      {
        title: "Innovative Software Development",
        avatar:
          "https://res.cloudinary.com/dxllpuliy/image/upload/v1713873541/3e7e7f97-c5aa-4084-9cc8-faff944a8927_vv9jii.jpg",
        text:
          "We provide top-notch software development services that cater to various business needs. From custom applications to robust software platforms, our solutions drive efficiency and innovation.",
        author: "Tandeep Singh",
        role: "Software Engineer"
      }
    ];
    this.latestNews = [
      {
        img:
          "https://res.cloudinary.com/dxllpuliy/image/upload/v1720292038/premium_photo-1668473366519-ac76b1e8e8d3_l2fshp.jpg",
        date: "AI",
        author: "Team",
        text:
          "Discover how our AI-driven analytics platform is helping businesses unlock actionable insights from their data, enabling smarter decisions and better outcomes."
      },
      {
        img:
          "https://res.cloudinary.com/dxllpuliy/image/upload/v1720292129/premium_photo-1676150789916-2c7d1fdda6b9_mkpo2w.jpg",
        date: "Software",
        author: "Team",
        text:
          "Learn about our latest software release that integrates seamlessly with existing systems, providing enhanced functionality and improved user experience for our clients."
      }
    ];
  }
  render() {
    return (
      <section id="news" className="container news__container">
        <Swiper className="news__hot" pagination={true} modules={[Pagination]}>
          {this.hotNews.map((feed, index) => {
            return (
              <SwiperSlide key={index}>
                <HotNews
                  title={feed.title}
                  text={feed.text}
                  avatar={feed.avatar}
                  author={feed.author}
                  role={feed.role}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="news__latest">
          <h1>What our CEO says</h1>
          {this.latestNews.map((feed, index) => {
            return (
              <LatestNews
                key={index}
                img={feed.img}
                date={feed.date}
                author={feed.author}
                text={feed.text}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default News;
