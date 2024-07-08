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
          img: 'https://res.cloudinary.com/dxllpuliy/image/upload/v1713873541/3acce801-3fea-4bb9-bdaa-6229d2f714be_oqjhb8.jpg',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
          name: 'Tanvinder Singh',
          occupation: 'Cloud Expert'
        },
        {
          img: 'https://res.cloudinary.com/dxllpuliy/image/upload/v1713873541/37ddc39a-7691-48e4-ae7e-456910c77817_clgrh1.jpg',
          comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          name: 'Angat Singh',
          occupation: 'Internal Firm Affair'
        },
        {
          img: 'https://res.cloudinary.com/dxllpuliy/image/upload/v1713873541/2f7b8a02-b894-4c0f-a8a4-d74e62e85ce3_yvknal.jpg',
          comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          name: 'Trivinder Singh',
          occupation: 'Market Expert'
        },
        // {
        //   img: 'https://res.cloudinary.com/dxllpuliy/image/upload/v1713873541/3e7e7f97-c5aa-4084-9cc8-faff944a8927_vv9jii.jpg',
        //   comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
        //   name: 'Tandeep Singh',
        //   occupation: 'Software Expert'
        // }
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

