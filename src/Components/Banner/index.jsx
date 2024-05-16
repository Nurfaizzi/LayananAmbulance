import React, { Component, useEffect, useState } from "react";
// import bg from '../image/bg2.jpg'
import bg from "../../image/bg2.jpg";
import bg2 from "../../image/bg.jpg";
import bg13 from "../../image/bg13.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const dataCarousel = [
      {
        id: 1,
        image: bg,
      },
      {
        id: 2,
        image: bg2,
      },
      {
        id: 3,
        image: bg13,
      },
    ];

    return (
      <div>
        <Slider {...settings}>
          {dataCarousel.map((data, key) => (
            <div className="wrap-slider bg-white" key={key}>
              <div className="wrap-card-carousel">
                <div className="card-carousel" key={data.id}>
                  <div>
                    <img
                      src={data.image}
                      className="bg-white object-fill flex"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
