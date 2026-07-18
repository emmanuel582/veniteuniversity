import React, { useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Animation - Modern text reveal
      const heroTl = gsap.timeline();
      heroTl.fromTo('.hero-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
            .fromTo('.hero-title-line', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out' }, "-=0.6")
            .fromTo('.hero-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.4")
            .fromTo('.hero-ctas', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6");

      // 2. Expanding Section (Video/Image)
      gsap.to('.expanding-box', {
        scrollTrigger: {
          trigger: '.expanding-section',
          start: 'top 80%',
          end: 'top top',
          scrub: true,
        },
        width: '100%',
        borderRadius: 0,
        ease: 'none'
      });

      // 3. Stacked Cards Animation
      const cards = gsap.utils.toArray('.stacked-card');
      
      // We set the parent to pin for a duration relative to the number of cards
      const stackTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.stacked-cards-section',
          start: 'top top',
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
        }
      });

      // Card 2 slides up, Card 1 scales down
      stackTl.to(cards[1], { yPercent: -100, ease: 'none' })
             .to(cards[0], { scale: 0.95, opacity: 0.5, ease: 'none' }, "<")
             
             // Card 3 slides up, Card 2 scales down
             .to(cards[2], { yPercent: -100, ease: 'none' })
             .to(cards[1], { scale: 0.95, opacity: 0.5, ease: 'none' }, "<");

      // 4. Stats appear
      gsap.fromTo('.stat-box', 
        { y: 40, opacity: 0 },
        { scrollTrigger: { trigger: '.stats-section', start: 'top 75%' }, y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }
      );

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="home-page">
      
      {/* Sleek Hero Section */}
      <section className="modern-hero">
        <div className="container hero-content">
          <div className="hero-badge">Venite University</div>
          <h1 className="hero-title">
            <div className="hero-title-line-wrapper"><span className="hero-title-line">Unlock Your Potential,</span></div>
            <div className="hero-title-line-wrapper"><span className="hero-title-line gradient-text">Transform Your Future.</span></div>
          </h1>
          <p className="hero-desc">Experience a world-class education designed for the modern era. We build self-reliant graduates ready to lead and innovate.</p>
          <div className="hero-ctas">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="secondary" size="lg">Explore Programmes</Button>
          </div>
        </div>
      </section>

      {/* Expanding Image Section */}
      <section className="expanding-section">
        <div className="expanding-box">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920" alt="Campus Aerial View" className="expanding-img" />
          <div className="expanding-overlay">
            <h2>The Campus of Tomorrow</h2>
          </div>
        </div>
      </section>

      {/* Advanced Stacked Cards Section */}
      <section className="stacked-cards-section">
        
        {/* Card 1 */}
        <div className="stacked-card card-1">
          <div className="card-inner container">
            <div className="card-text-side">
              <h2>Ship Straight From Your Mind.</h2>
              <p>Our College of Science & IT provides state-of-the-art facilities for Software Engineering, Cyber Security, and Computer Science. Code anywhere, deploy instantly.</p>
            </div>
            <div className="card-img-side">
              <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1000" alt="Coding lab" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="stacked-card card-2">
          <div className="card-inner container">
            <div className="card-img-side">
              <img src="https://images.unsplash.com/photo-1576091160550-2173ff9e8eb5?auto=format&fit=crop&q=80&w=1000" alt="Medical lab" />
            </div>
            <div className="card-text-side">
              <h2>Pioneering Allied Health.</h2>
              <p>Train in advanced Nursing, Public Health, and Physiotherapy. Our laboratories mirror real-world hospital environments to ensure you are ready for the frontline.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="stacked-card card-3">
          <div className="card-inner container">
            <div className="card-text-side">
              <h2>Lead with Confidence.</h2>
              <p>The College of Social & Management Sciences builds the entrepreneurs and economists of the future. Honesty, Creativity, and Innovation drive our curriculum.</p>
            </div>
            <div className="card-img-side">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="Business meeting" />
            </div>
          </div>
        </div>

      </section>

      {/* Sleek Stats Section */}
      <section className="stats-section">
        <div className="container stats-container">
          <div className="stat-box">
            <h3>150+</h3>
            <p>Finished Sessions</p>
          </div>
          <div className="stat-box">
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
          </div>
          <div className="stat-box">
            <h3>2.5K+</h3>
            <p>Enrollments</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="modern-cta">
        <div className="container">
          <h2>Ready to launch?</h2>
          <p>Join the next generation of leaders at Venite University.</p>
          <Button variant="primary" size="lg">Apply Now</Button>
        </div>
      </section>
      
    </div>
  );
}
