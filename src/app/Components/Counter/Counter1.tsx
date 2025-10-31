import React from 'react';


const Counter1 = () => {
    return (
        <section className="counter-section theme-bg fix">
            <div className="container">
                <div className="counter-wrapper">
                    <div className="counter-items wow fadeInUp wow" data-wow-delay=".2s">
                        <div className="counter-content">
                            <h2><span className="count">10</span>+</h2>
                            <p>Years of Celebration</p>
                        </div>
                    </div>
                    <div className="counter-items wow fadeInUp wow" data-wow-delay=".4s">
                        <div className="counter-content">
                            <h2><span className="count">50</span>K+</h2>
                            <p>Annual Visitors</p>
                        </div>
                    </div>
                    <div className="counter-items wow fadeInUp wow" data-wow-delay=".6s">
                        <div className="counter-content">
                            <h2><span className="count">100</span>+</h2>
                            <p>Cultural Events</p>
                        </div>
                    </div>
                    <div className="counter-items style-2 wow fadeInUp wow" data-wow-delay=".8s">
                        <div className="counter-content">
                            <h2><span className="count">25</span>+</h2>
                            <p>Countries Participating</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Counter1;
