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
reviews: [
  {
    img: 'https://res.cloudinary.com/dxllpuliy/image/upload/v1713873541/3acce801-3fea-4bb9-bdaa-6229d2f714be_oqjhb8.jpg',
    comment: 'Our commitment to leveraging cutting-edge cloud solutions has significantly enhanced our operational efficiency and reduced costs, offering our clients unmatched value.',
    name: 'Tanvinder Singh',
    occupation: 'Cloud Expert'
  },
  {
    img: 'https://res.cloudinary.com/dxllpuliy/image/upload/v1713873541/37ddc39a-7691-48e4-ae7e-456910c77817_clgrh1.jpg',
    comment: 'Through strategic internal affairs management, we have streamlined processes and improved the transparency of operations, boosting productivity and client satisfaction',
    name: 'Angat Singh',
    occupation: 'Internal Firm Affairs Expert'
  },
  {
    img: 'https://res.cloudinary.com/dxllpuliy/image/upload/v1713873541/2f7b8a02-b894-4c0f-a8a4-d74e62e85ce3_yvknal.jpg',
    comment: 'As a market expert, my goal is to provide insightful strategies that drive market growth and innovation, leading to sustained business success and industry leadership.',
    name: 'Trivinder Singh',
    occupation: 'Market Expert'
  }
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
        <h1 className="container">Meet Our Team</h1>
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

