import React, { Component } from 'react';
import Testimony from './Testimony';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

class Testimonials extends Component {
  constructor() {
    super();
    this.state = {
      slidesPerView: 2.5,
      reviews: [ // Expanded array of reviews
        {
          img: 'https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
          name: 'Alex Johnson',
          occupation: 'Software Engineer'
        },
        {
          img: 'https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg',
          comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          name: 'Maria Garcia',
          occupation: 'Graphic Designer'
        },
        {
          img: 'https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg',
          comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          name: 'David Smith',
          occupation: 'Marketing Specialist'
        },
        {
          img: 'https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg',
          comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
          name: 'Emma Brown',
          occupation: 'Product Manager'
        }
        // You can add more reviews as needed
      ]
    };
    this.fitSlidesPerView = this.fitSlidesPerView.bind(this);
  }

  fitSlidesPerView() {
    if (window.innerWidth <= 1024 && !(window.innerWidth <= 600)) {
      this.setState({ slidesPerView: 1.3 });
    } else if (window.innerWidth <= 600) {
      this.setState({ slidesPerView: 1 });
    } else {
      this.setState({ slidesPerView: 2.5 });
    }
  }

  componentDidMount() {
    this.fitSlidesPerView();
    window.addEventListener('resize', this.fitSlidesPerView);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitSlidesPerView);
  }

  render() {
    const { slidesPerView, reviews } = this.state;

    return (
      <section id="testimony" className="container container__testimonials">
        <h1 className="container">What People Say About Us</h1>
        <Swiper
          className="testimonials__slide container"
          slidesPerView={slidesPerView}
          spaceBetween={20}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Testimony {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }
}

export default Testimonials;

