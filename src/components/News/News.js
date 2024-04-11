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
        title: "Great Technology Solution",
        avatar:
          "https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic praesentium sunt incidunt quasi eos? Expedita temporibus dolorum nisi ratione harum quae suscipit, distinctio repellat in! Vero quisquam delectus nemo incidunt commodi perferendis repellendus quaerat, pariatur quidem itaque blanditiis magni.",
        author: "Randi Saputra",
        role: "IT Consultant"
      },
      {
        title: "Great Technology Solution",
        avatar:
          "https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic praesentium sunt incidunt quasi eos? Expedita temporibus dolorum nisi ratione harum quae suscipit, distinctio repellat in! Vero quisquam delectus nemo incidunt commodi perferendis repellendus quaerat, pariatur quidem itaque blanditiis magni.",
        author: "Randi Saputra",
        role: "IT Consultant"
      }
    ];
    this.lastestNews = [
      {
        img:
          "https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg",
        date: "30 March 2022",
        author: "Admin",
        text:
          "When browsers first reached version 10, there were a few issues as the major version number went from one digit to two. Hopefully, we learned a few things that'll ease the transition from two digits to three."
      },
      {
        img:
          "https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg",
        date: "30 March 2022",
        author: "Admin",
        text:
          "Routing is one of the essential aspects of single-page applications (SPAs), but because React doesn’t come with a routing solution."
      }
    ];
  }
  render() {
    return (
      <section id="news" className="container news__container">
        <Swiper className="news__hot" pagination={true} modules={[Pagination]}>
          {this.hotNews.map((feed, index) => {
            return (
              <SwiperSlide>
                <HotNews
                  title={feed.title}
                  text={feed.text}
                  avatar={feed.avatar}
                  author={feed.author}
                  role={feed.role}
                  key={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="news__latest">
          <h1>Get The Latest News Here</h1>
          {this.lastestNews.map((feed) => {
            return (
              <LatestNews
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
