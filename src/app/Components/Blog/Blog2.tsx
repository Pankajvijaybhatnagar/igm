import Image from 'next/image';
import React from 'react';


const Blog2 = () => {


    const blogContent = [
        {img:'/assets/img/news/04.jpg', title:'The Sacred History of Kurukshetra and the Bhagavad Gita', date:'December 1, 2024'},
        {img:'/assets/img/news/05.jpg', title:'Experience Divine Atmosphere at International Gita Mahotsav 2024', date:'November 28, 2024'},
        {img:'/assets/img/news/06.jpg', title:'Cultural Programs and Spiritual Discourses Schedule Released', date:'November 25, 2024'},
        {img:'/assets/img/news/07.jpg', title:'Global Participation Expected at This Year\'s Gita Festival', date:'November 20, 2024'},
      ];


    return (
<section className="news-section-2 section-padding fix">
            <div className="container-fluid">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        News & Updates
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                        Latest from Gita Mahotsav
                    </h2>
                </div>
                <div className="row">
                {blogContent.map((item, i) => (
                    <div key={i} className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 wow fadeInUp wow" data-wow-delay=".2s">
                        <div className="news-card-items-2">
                            <div className="news-image">
                                <Image src={item.img} alt="img" width={376} height={268}   />
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li>
                                    <i className="bi bi-calendar"></i>
                                        {item.date}
                                    </li>
                                </ul>
                                <h4>
                                    {item.title}
                                </h4>
                                <div className="news-info">
                                    <div className="group-image">
                                        <Image src="/assets/img/news/Group.png" alt="img" width={103} height={30}   />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}


                    
                </div>
            </div>
        </section>
    );
};


export default Blog2;
