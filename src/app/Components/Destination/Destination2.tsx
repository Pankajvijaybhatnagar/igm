"use client"
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';


const Destination2 = () => {


const destinationContent = [
  {img:'/assets/img/destination/new/gita gyan.png', location:'Gita Gyan Sansthanam', title:'Museum & Gita Research Centre'},          
    {img:'/assets/img/destination/new/braham sarovar.png', location:'Brahma Sarovar', title:'Sacred Water Tank'},          
    {img:'/assets/img/destination/new/jyotisar.png', location:'Jyotisar', title:'Birthplace of Gita'},          
    {img:'/assets/img/destination/new/sanhit.png', location:'Sannihit Sarovar', title:'Holy Pilgrimage Site'},     
    {img:'/assets/img/destination/new/bhadrakali.png', location:'Shri Devikoop Bhadrakali Mandir Kurukshetra', title:'One of 52 Shakti Peeths'}, 
    
    // --- New spiritual places added ---
    
    {img:'/assets/img/destination/new/sthaneshwar.png', location:'Sthaneshwar Mahadev Temple', title:'Ancient Shiva Temple'},
    {img:'/assets/img/destination/new/birla mandir.png', location:'Birla Mandir', title:'Dedicated to Lord Krishna'},
    {img:'/assets/img/destination/new/panorma.png', location:'Penorma Kurukshetra', title:'Museum & Science Centre'},
];


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



    return (
        <section className="new-destination-section fix section-padding">
        <div className="container">
            <div className="section-title-area">
                <div className="section-title">
                    <span className="sub-title wow fadeInUp">
                        Sacred Destinations
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".5s">
                        Explore Holy Sites of <br/> Kurukshetra
                    </h2>
                </div>
            </div>
            <div className="new-destination-wrapper">
                <div className="swiper new-destination-slider">
                    <div className="swiper-wrapper cs_slider_gap_301">
                    <Slider {...settings}>
                    {destinationContent.map((item, i) => (
                        <div key={i} className="swiper-slide">
                            <div className="new-destination-items">
                                <div className="thumb">
                                  <Image src={item.img} alt="img" width={424} height={505}   />
                                    <div className="content">
                                        <div className="title-text">
                                            <h3 style={{
                                              color:'#ffb800'
                                            }}>{item.location}</h3>
                                            <p>{item.title}</p>
                                        </div>
                                        {/* <div className="icon"><i className="bi bi-arrow-right"></i></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Slider>                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};


export default Destination2;
