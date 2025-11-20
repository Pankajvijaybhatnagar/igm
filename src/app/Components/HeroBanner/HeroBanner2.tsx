"use client"
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import CountDownTimer from '../CountDownTimer';



const HeroBanner2 = () => {



    useEffect(() => {
        loadBackgroudImages();
    }, []);    



    const [isActive, setIsActive] = useState('tour');
    
    useEffect(() => {
        const targetValue = 14508665; // 1 lakh crore
        const totalDuration = 300000; // 5 minutes total
        const finalSlowDuration = 60000; // Last 1 minute very slow
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



        function getSpeedMultiplier(progress) {
            // Define speed zones
            const mainDuration = totalDuration - finalSlowDuration; // First 4 minutes
            const elapsed = Date.now() - startTime;
            
            if (elapsed >= mainDuration) {
                // Final minute: very slow and getting slower
                const finalProgress = (elapsed - mainDuration) / finalSlowDuration;
                return 0.1 + (1 - finalProgress) * 0.15; // Slows down from 0.25 to 0.1
            } else {
                // First 4 minutes: wave pattern (slow-fast-slow cycles)
                const cycleCount = 6; // Number of speed cycles
                const cycleProgress = (elapsed / mainDuration) * cycleCount;
                const withinCycle = cycleProgress % 1;
                
                // Create smooth wave: slow at 0 and 1, fast at 0.5
                // Using sine wave for smooth acceleration/deceleration
                const wave = Math.sin(withinCycle * Math.PI);
                
                // Speed ranges from 0.3 (slow) to 1.5 (fast)
                return 0.3 + wave * 1.2;
            }
        }



        function updateDisplay() {
            const elapsed = Date.now() - startTime;
            const totalProgress = Math.min(elapsed / totalDuration, 1);
            
            // Apply speed multiplier to create variable speed effect
            const speedMultiplier = getSpeedMultiplier(totalProgress);
            
            // Calculate current value with easing
            let currentValue;
            
            if (elapsed >= totalDuration - finalSlowDuration) {
                // Final minute: use custom slow easing
                const mainValue = targetValue * 0.85; // 85% reached before final minute
                const finalProgress = (elapsed - (totalDuration - finalSlowDuration)) / finalSlowDuration;
                const easedFinalProgress = 1 - Math.pow(1 - finalProgress, 4); // Quartic ease out
                currentValue = mainValue + (targetValue - mainValue) * easedFinalProgress;
            } else {
                // First 4 minutes: variable speed
                const mainProgress = elapsed / (totalDuration - finalSlowDuration);
                const easedProgress = 1 - Math.pow(1 - mainProgress, 2); // Quadratic ease
                currentValue = targetValue * 0.85 * easedProgress;
            }
            
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
                    digit.style.animationDelay = `${index * 0.1}s`;
                    digit.textContent = char;
                    
                    wrapper.appendChild(digit);
                    counterDisplay.appendChild(wrapper);
                });
                
                const progressBar = document.getElementById('progressBar');
                if (progressBar) {
                    progressBar.style.width = `${totalProgress * 100}%`;
                }
                
                const timeInfo = document.getElementById('timeInfo');
                if (timeInfo) {
                    const elapsedSeconds = Math.floor(elapsed / 1000);
                    const remainingSeconds = Math.max(0, 300 - elapsedSeconds);
                    const minutes = Math.floor(remainingSeconds / 60);
                    const seconds = remainingSeconds % 60;
                    
                    if (totalProgress < 1) {
                        // Show speed indicator
                        let speedText;
                        if (elapsed >= totalDuration - finalSlowDuration) {
                            speedText = '🐌 Final Countdown';
                        } else if (speedMultiplier > 1.0) {
                            speedText = '⚡ Fast';
                        } else if (speedMultiplier < 0.5) {
                            speedText = '🐢 Slow';
                        } else {
                            speedText = '▶️ Normal';
                        }
                        timeInfo.textContent = `${speedText} | ${minutes}m ${seconds}s remaining`;
                    } else {
                        timeInfo.textContent = '🎉 Complete! Reached 1 Lakh Crore!';
                    }
                }
                
                if (totalProgress < 1) {
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
                        <CountDownTimer/>
                </div>
            </div>
        </section>
    );
};



export default HeroBanner2;
