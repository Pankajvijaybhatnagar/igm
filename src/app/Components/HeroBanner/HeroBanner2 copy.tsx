"use client"
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';


const HeroBanner2 = () => {


    useEffect(() => {
        loadBackgroudImages();
    }, []);    


    const [isActive, setIsActive] = useState('tour');
    
    useEffect(() => {
        const targetValue = 1000000000000; // 1 lakh crore
        const duration = 40000; // 5 minutes in milliseconds
        const startTime = Date.now();
        let animationFrameId;


        function formatIndianNumber(num) {
            const numStr = Math.floor(num).toString();
            let lastThree = numStr.substring(numStr.length - 3);
            let otherNumbers = numStr.substring(0, numStr.length - 3);
            
            if (otherNumbers !== '') {
                lastThree = ',' + lastThree;
            }
            
            return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        }


        function updateDisplay() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Smooth easing function
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = targetValue * easeProgress;
            
            const formattedNumber = formatIndianNumber(currentValue);
            const digits = formattedNumber.split('');
            
            const counterDisplay = document.getElementById('counterDisplay');
            if (counterDisplay) {
                counterDisplay.innerHTML = '';
                
                digits.forEach((char, index) => {
                    const wrapper = document.createElement('div');
                    wrapper.style.display = 'inline-block';
                    wrapper.style.perspective = '600px';
                    
                    const digit = document.createElement('span');
                    digit.className = 'counter-digit';
                    digit.style.display = 'inline-block';
                    digit.style.minWidth = char === ',' ? '0.5rem' : 'clamp(1.5rem, 4vw, 2.8rem)';
                    // digit.style.animation = char === ',' ? 'none' : 'dance 0.6s ease-in-out infinite';
                    digit.style.animationDelay = `${index * 0.1}s`;
                    digit.textContent = char;
                    
                    wrapper.appendChild(digit);
                    counterDisplay.appendChild(wrapper);
                });
                
                const progressBar = document.getElementById('progressBar');
                if (progressBar) {
                    progressBar.style.width = `${progress * 100}%`;
                }
                
                const timeInfo = document.getElementById('timeInfo');
                if (timeInfo) {
                    const elapsedSeconds = Math.floor(elapsed / 1000);
                    const remainingSeconds = Math.max(0, 300 - elapsedSeconds);
                    const minutes = Math.floor(remainingSeconds / 60);
                    const seconds = remainingSeconds % 60;
                    
                    if (progress < 1) {
                        timeInfo.textContent = `${minutes}m ${seconds}s remaining`;
                    } else {
                        timeInfo.textContent = '🎉 Complete! Reached 1 Lakh Crore!';
                    }
                }
                
                if (progress < 1) {
                    animationFrameId = requestAnimationFrame(updateDisplay);
                }
            }
        }


        // Start the animation
        updateDisplay();


        // Add keyframes for animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes dance {
                0%, 100% {
                    transform: translateY(0) scale(1) rotateZ(0deg);
                }
                25% {
                    transform: translateY(-12px) scale(1.15) rotateZ(-3deg);
                }
                50% {
                    transform: translateY(0) scale(1) rotateZ(0deg);
                }
                75% {
                    transform: translateY(-6px) scale(1.08) rotateZ(3deg);
                }
            }


            @keyframes shimmer {
                0% {
                    background-position: -1000px 0;
                }
                100% {
                    background-position: 1000px 0;
                }
            }


            @keyframes pulse-glow {
                0%, 100% {
                    box-shadow: 0 0 20px rgba(33, 128, 141, 0.5),
                                0 0 40px rgba(33, 128, 141, 0.3),
                                0 0 60px rgba(33, 128, 141, 0.2);
                }
                50% {
                    box-shadow: 0 0 30px rgba(33, 128, 141, 0.7),
                                0 0 60px rgba(33, 128, 141, 0.5),
                                0 0 90px rgba(33, 128, 141, 0.3);
                }
            }


            .counter-digit {
                font-size: 3rem;
                font-weight: 800;
                color: #fff;
                text-shadow: 
                    3px 3px 6px rgba(0, 0, 0, 0.8),
                    0 0 20px rgba(33, 128, 141, 0.8),
                    0 0 40px rgba(33, 128, 141, 0.6),
                    0 0 60px rgba(33, 128, 141, 0.4);
               
            }


            @media (prefers-color-scheme: dark) {
                .counter-digit {
                    color: var(--color-teal-300);
                    text-shadow: 
                        3px 3px 6px rgba(0, 0, 0, 0.9),
                        0 0 20px rgba(50, 184, 198, 0.8),
                        0 0 40px rgba(50, 184, 198, 0.6),
                        0 0 60px rgba(50, 184, 198, 0.4);
                }
            }

            @media (max-width: 768px) {
                .counter-digit {
                    font-size: clamp(1.5rem, 8vw, 3rem);
                }
            }
        `;
        document.head.appendChild(style);


        // Cleanup function
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            if (style && style.parentNode) {
                document.head.removeChild(style);
            }
        };
    }, []);


    return (
        <section className="hero-section-2" style={{ position: 'relative' }}>
            <div className="hero-2 bg-cover" data-background="/assets/img/hero/header copy.jpg">
                <div className="container custom-container-3">
                    <div className="row align-items-center" style={{ minHeight: '0vh' }}>
                        {/* Counter Section - Direct on hero background */}
                        <div className="col-lg-6 d-flex align-items-center justify-content-center order-lg-1 order-2" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>
                            <div style={{ width: '100%', maxWidth: '600px' }}>
                                <div 
                                    id="counterDisplay" 
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                      
                                     
                                        marginBottom: 'clamp(2rem, 4vw, 3rem)',
                                        minHeight: 'clamp(80px, 15vw, 120px)',
                                         border: '2px solid rgba(255, 255, 255, 0.2)',
                                    
                                    }}
                                ></div>
                                
                                {/* Progress Bar */}
                               
                                
                                {/* Time Info */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: '1rem',
                                   
                                }}>
                                    
                                    <div style={{
                                        fontSize: 'clamp(0.75rem, 2vw, 1rem)',
                                        color: '#fff',
                                        fontWeight: 700,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)',
                                        background: 'rgba(0, 0, 0, 0.5)',
                                        borderRadius: '25px',
                                        border: '2px solid rgba(50, 184, 198, 0.6)',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                                    }}>
                                        <span style={{
                                            width: 'clamp(6px, 1.5vw, 10px)',
                                            height: 'clamp(6px, 1.5vw, 10px)',
                                            backgroundColor: 'rgba(50, 184, 198, 1)',
                                            borderRadius: '50%',
                                            display: 'inline-block',
                                            animation: 'pulse-glow 1.5s ease-in-out infinite',
                                            boxShadow: '0 0 10px rgba(50, 184, 198, 0.8)'
                                        }}></span>
                                        Live
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Content - Text on right */}
                        <div className="col-lg-6 order-lg-2 order-1" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>
                            <div className="hero-content">
                                <h1 className="wow fadeInUp" data-wow-delay=".3s" style={{
                                    fontSize: 'clamp(2rem, 6vw, 4rem)',
                                    fontWeight: 800,
                                    color: '#fff',
                                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
                                    marginBottom: 0
                                }}>
                                   
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default HeroBanner2;
