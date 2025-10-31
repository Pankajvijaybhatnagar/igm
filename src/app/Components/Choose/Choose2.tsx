"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';


const Choose2 = () => {


            useEffect(() => {
                loadBackgroudImages();
            }, []);


    return (
        <section className="choose-us-section section-padding bg-cover fix" data-background="/assets/img/choose-us-bg-2.jpg" >
            <div className="container">
                <div className="choose-us-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-7 col-lg-6">
                            <div className="choose-us-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Why Attend IGM
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        Experience Spiritual Enlightenment
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                                    The International Gita Mahotsav offers a unique opportunity to immerse yourself in the timeless wisdom of the Bhagavad Gita. Join thousands of devotees, scholars, and spiritual seekers in celebrating this sacred scripture at its birthplace.
                                </p>
                                <div className="choose-us-area">
                                    <div className="line-shape">
                                        <Image src="/assets/img/line-shape2.png" alt="img" width={2} height={279}   />
                                    </div>
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".3s">
                                        <h3 className="number">
                                            01
                                        </h3>
                                        <div className="content">
                                            <h4>
                                                Spiritual Discourses by Renowned Saints and <br/>
                                                Scholars
                                            </h4>
                                            <p>
                                                Listen to enlightening discourses on the Bhagavad Gita from eminent spiritual leaders <br/> from India and around the world, deepening your understanding of eternal wisdom.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".5s">
                                        <h3 className="number">
                                            02
                                        </h3>
                                        <div className="content">
                                            <h4>
                                                Rich Cultural Programs and Performances
                                            </h4>
                                            <p>
                                                Witness spectacular cultural performances including classical dance, devotional music, <br/> theatrical presentations of Mahabharata, and traditional folk art from across India.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".7s">
                                        <h3 className="number">
                                            03
                                        </h3>
                                        <div className="content">
                                            <h4>
                                                Visit Sacred Sites and Participate in Rituals
                                            </h4>
                                            <p>
                                                Experience the divine atmosphere of Kurukshetra's holy sites including Brahma Sarovar <br/> and Jyotisar, and participate in sacred rituals and ceremonies during the festival.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 wow fadeInUp wow" data-wow-delay=".3s">
                            <div className="choose-us-thumb">
                                <Image src="/assets/img/choose-us-bg.png" className="wow img-custom-anim-left" alt="img" width={828} height={620}   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Choose2;
