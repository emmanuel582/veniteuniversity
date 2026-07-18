import React, { useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Lightbulb, Zap, Users, MapPin } from 'lucide-react';
import campusImg from '../assets/campus.png';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const mainRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.about-hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
      
      gsap.utils.toArray('.reveal-up').forEach(elem => {
        gsap.fromTo(elem, { y: 40, opacity: 0 }, {
          scrollTrigger: { trigger: elem, start: 'top 85%' },
          y: 0, opacity: 1, duration: 0.8
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="page-wrapper about-page">
      
      <section className="page-hero">
        <div className="container">
          <h1 className="about-hero-title">About Venite University</h1>
          <p className="hero-subtitle">Transforming students into independent, self-reliant global leaders.</p>
        </div>
      </section>

      <section className="story-section reveal-up">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>Located in the vibrant community of Iloro Ekiti, Venite University was established to bridge the gap between academic theory and real-world execution. We don't just produce graduates; we produce innovators, creators, and the next generation of global employers.</p>
          </div>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="container">
          <div className="grid-12">
            <div className="mv-card reveal-up" style={{ gridColumn: 'span 6' }}>
              <div className="mv-icon"><Zap size={32} /></div>
              <h2>Our Mission</h2>
              <p>To provide quality education that fosters total emancipation; training self-reliant graduates equipped to secure employment, create jobs, and become employers of labor.</p>
            </div>
            <div className="mv-card reveal-up" style={{ gridColumn: 'span 6', animationDelay: '0.2s' }}>
              <div className="mv-icon"><Lightbulb size={32} /></div>
              <h2>Our Vision</h2>
              <p>To train and produce knowledgeable, creative, and industrious manpower for the nation, and be a leading research and development ground with global recognition.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="text-center mb-8 reveal-up">Core Values</h2>
          <div className="grid-12">
            <div className="value-card reveal-up" style={{ gridColumn: 'span 4' }}>
              <CheckCircle size={40} className="value-icon" />
              <h3>Honesty</h3>
              <p>Integrity is the bedrock of our academic and administrative processes.</p>
            </div>
            <div className="value-card reveal-up" style={{ gridColumn: 'span 4' }}>
              <Lightbulb size={40} className="value-icon" />
              <h3>Creativity</h3>
              <p>We encourage thinking outside the box to solve modern global challenges.</p>
            </div>
            <div className="value-card reveal-up" style={{ gridColumn: 'span 4' }}>
              <Zap size={40} className="value-icon" />
              <h3>Innovation</h3>
              <p>Continuously pushing the boundaries of technology, science, and humanities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="campus-split-section reveal-up">
        <div className="container split-container">
          <div className="split-text">
            <h2>Our Campus & Community</h2>
            <p>Spanning acres in Ekiti State, our campus is a hub of diversity and academic rigor. Equipped with modern technology, comfortable living spaces, and expansive research labs.</p>
            <div className="location-callout">
              <MapPin size={24} className="text-accent" />
              <span>KM 2, Ayetoro Road, Iloro Ekiti, Ekiti State, Nigeria</span>
            </div>
          </div>
          <div className="split-image">
            <img src={campusImg} alt="Campus" />
          </div>
        </div>
      </section>

      <section className="methodology-section reveal-up">
        <div className="container">
          <div className="methodology-box">
            <h3>Methodology Callout</h3>
            <p>This site was researched using UX best practices and structured content architecture. It was built with React, Vite, and GSAP for advanced scrolling animations, deployed with a premium dark-themed aesthetic specifically designed to position Venite University as a top-tier institution.</p>
          </div>
        </div>
      </section>

      <section className="modern-cta reveal-up">
        <div className="container">
          <h2>Ready to transform your future?</h2>
          <p>Begin your journey at Venite University.</p>
          <Button variant="primary" size="lg">Check Admission</Button>
        </div>
      </section>

    </div>
  );
}
