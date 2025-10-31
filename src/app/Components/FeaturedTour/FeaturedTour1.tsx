"use client"
import React, { useRef } from 'react';
import Slider from 'react-slick';
import parse from 'html-react-parser';
import Image from 'next/image';


const FeaturedTour1 = () => {


      const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  


      const sliderRef = useRef(null);


      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      };       


      const tourContent = [
        {img:'/assets/img/feature/01.jpg', location:'Kurukshetra', title:'Spiritual Discourses on <br>Bhagavad Gita', duration:'Daily'},                  
        {img:'/assets/img/feature/02.jpg', location:'Brahma Sarovar', title:'Sacred Bath and Evening <br>Aarti Ceremony', duration:'Evening'},                  
        {img:'/assets/img/feature/03.jpg', location:'Jyotisar', title:'Visit the Birthplace of <br>the Holy Gita', duration:'Full Day'},                  
        {img:'/assets/img/feature/04.jpg', location:'Cultural Arena', title:'Classical Dance & Music <br>Performances', duration:'Evening'},                               
      ]; 



    return (
        <section className="featured-tour-section section-padding section-bg">
            <div className="left-shape">
              <Image src="/assets/img/feature/plane-shape.png" alt="img" width={372} height={112}   />
            </div>
            <div className="right-shape">
              <Image src="/assets/img/feature/plane-shape.png" alt="img" width={372} height={112}   />
            </div>
            <div className="array-button">
                <button onClick={previous} className="array-prev"><Image src="/assets/img/offer/chervon-right.png" alt="img" width={24} height={16}   /></button>
                <button onClick={next} className="array-next"><Image src="/assets/img/icon/39.svg" alt="img" width={24} height={16}   /></button>
            </div>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title wow fadeInUp">
                        Festival Highlights
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".5s">
                        Experience Divine Programs & Events
                    </h2>
                </div>
                <p className="wow fadeInUp wow" data-wow-delay=".7s">
                    Immerse yourself in the spiritual and cultural richness of the International Gita Mahotsav. Explore diverse programs ranging from enlightening discourses to mesmerizing cultural performances celebrating the eternal wisdom of the Bhagavad Gita.
                </p>
                <div className="swiper tour-slider">
                    <div className="swiper-wrapper cs_slider_gap_301">
                    <Slider ref={sliderRef} {...settings}>
                    {tourContent.map((item, i) => (
                        <div key={i} className="swiper-slide">
                            <div className="feature-tour-items">
                                <div className="feature-tour-image">
                                  <Image src={item.img} alt="img" width={294} height={238}   />
                                    <ul className="location">
                                        <li>
                                        <i className="bi bi-geo-alt-fill"></i>
                                            {item.location}
                                        </li>
                                    </ul>
                                </div>
                                <div className="feature-tour-content">
                                    <h4>
                                        {parse(item.title)}
                                    </h4>
                                    <h5>
                                    {item.duration}<span></span>
                                    </h5>
                                    <div className="icon">
                                    <i className="bi bi-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Slider>                         
                    </div>
                </div>
            </div>
         </section>
    );
};


export default FeaturedTour1;
