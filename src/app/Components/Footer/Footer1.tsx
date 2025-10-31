"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer1 = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your subscription logic here
        console.log('Subscribed:', email);
    };

    return (
        <footer className="cs_site_footer bg-white border-t">
            <div className="container-fluid">
                {/* Main Footer Content */}
                <div className="footer-widget-wrapper py-5">
                    <div className="row g-4">
                        {/* Logo and Description Column */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <Link href="/" className="d-inline-block mb-4">
                                    <Image 
                                        src="/assets/img/logo/logo-7.png" 
                                        alt="logo" 
                                        width={110} 
                                        height={55}
                                    />
                                </Link>
                                <p className="mb-4 text-muted">
                                    Your trusted partner for unforgettable travel experiences. 
                                    Discover the world with confidence and style.
                                </p>
                                
                                {/* Newsletter Subscription */}
                                <div className="newsletter-wrapper">
                                    <h5 className="mb-3">Subscribe to Our Newsletter</h5>
                                    <form onSubmit={handleSubscribe} className="d-flex gap-2">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button type="submit" className="theme-btn">
                                            <span>Subscribe <i className="bi bi-arrow-right"></i></span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-widget">
                                <h5 className="widget-title mb-4">Explore</h5>
                                <ul className="list-unstyled footer-links">
                                    <li className="mb-2">
                                        <Link href="/" className="text-muted">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/about" className="text-muted">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/tour" className="text-muted">
                                            Tours
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/service" className="text-muted">
                                            Services
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/blog" className="text-muted">
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Services Column */}
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h5 className="widget-title mb-4">Popular Services</h5>
                                <ul className="list-unstyled footer-links">
                                    <li className="mb-2">
                                        <Link href="/tour/tour-details" className="text-muted">
                                            Wanderlust Adventures
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/tour/tour-details" className="text-muted">
                                            Globe Trotters Travel
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/tour/tour-details" className="text-muted">
                                            Odyssey Travel Services
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/tour/tour-details" className="text-muted">
                                            Jet Set Journeys
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/tour/tour-details" className="text-muted">
                                            Dream Destinations
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Column */}
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h5 className="widget-title mb-4">Get in Touch</h5>
                                
                                <div className="contact-info-list">
                                    <div className="d-flex align-items-start mb-3">
                                        <i className="bi bi-geo-alt-fill me-3 mt-1"></i>
                                        <div>
                                            <p className="mb-0 text-muted">
                                                9550 Bolsa Ave #126,<br/>
                                                United States
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex align-items-start mb-3">
                                        <i className="bi bi-envelope-fill me-3 mt-1"></i>
                                        <div>
                                            <a href="mailto:info@touron.com" className="text-muted">
                                                info@touron.com
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex align-items-start mb-3">
                                        <i className="bi bi-telephone-fill me-3 mt-1"></i>
                                        <div>
                                            <a href="tel:+256214203215" className="text-muted d-block">
                                                +256 214 203 215
                                            </a>
                                            <a href="tel:+10987654321" className="text-muted d-block">
                                                +1 098 765 4321
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="social-links d-flex gap-3 mt-4">
                                    <a href="#" className="social-icon">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="bi bi-twitter-x"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                {/* <div className="footer-cta-section py-4 border-top border-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-7">
                            <h4 className="mb-2">Ready to Start Your Journey?</h4>
                            <p className="mb-0 text-muted">Let us help you plan your next adventure</p>
                        </div>
                        <div className="col-lg-4 col-md-5 text-md-end mt-3 mt-md-0">
                            <Link href="/contact" className="theme-btn">
                                <span>Request A Quote <i className="bi bi-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div> */}

                {/* Footer Bottom */}
                <div className="footer-bottom py-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p className="mb-0 text-muted">
                                Copyright © {new Date().getFullYear()} <strong>Gieogita</strong>. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 text-md-end mt-3 mt-md-0">
                            <ul className="list-inline mb-0 footer-legal-links">
                                <li className="list-inline-item">
                                    <Link href="/terms" className="text-muted">Terms of Use</Link>
                                </li>
                                <li className="list-inline-item ms-3">
                                    <Link href="/privacy" className="text-muted">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .cs_site_footer {
                    background: #ffffff;
                }
                
                .widget-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #1a1a1a;
                }
                
                .footer-links li a {
                    transition: all 0.3s ease;
                    font-size: 15px;
                }
                
                .footer-links li a:hover {
                    color: var(--primary-color, #007bff) !important;
                    padding-left: 5px;
                }
                
                .newsletter-wrapper input {
                    border: 1px solid #ddd;
                    padding: 12px 15px;
                    border-radius: 4px;
                    flex: 1;
                }
                
                .newsletter-wrapper input:focus {
                    outline: none;
                    border-color: var(--primary-color, #007bff);
                }
                
                .newsletter-wrapper .theme-btn {
                    white-space: nowrap;
                }
                
                .contact-info-list i {
                    color: var(--primary-color, #007bff);
                    font-size: 18px;
                }
                
                .social-icon {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    color: #666;
                    transition: all 0.3s ease;
                }
                
                .social-icon:hover {
                    background: var(--primary-color, #007bff);
                    color: white;
                    border-color: var(--primary-color, #007bff);
                    transform: translateY(-3px);
                }
                
                .footer-cta-section {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                }
                
                .footer-legal-links a {
                    font-size: 14px;
                    transition: color 0.3s ease;
                }
                
                .footer-legal-links a:hover {
                    color: var(--primary-color, #007bff) !important;
                }
                
                @media (max-width: 768px) {
                    .newsletter-wrapper form {
                        flex-direction: column;
                    }
                    
                    .newsletter-wrapper .theme-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer1;
