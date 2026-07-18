import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/Button';
import mapImg from '../assets/map.png';
import './Contact.css';

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you shortly.');
  };

  return (
    <div className="page-wrapper contact-page">
      
      <section className="page-hero">
        <div className="container">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="hero-subtitle">We're here to answer your questions and guide your application.</p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="grid-12">
            
            <div className="info-card" style={{ gridColumn: 'span 3' }}>
              <div className="info-icon"><MapPin size={32} /></div>
              <h3>Visit Us</h3>
              <p>KM 2, Ayetoro Road, Iloro Ekiti, Ekiti State, Nigeria</p>
            </div>

            <div className="info-card" style={{ gridColumn: 'span 3' }}>
              <div className="info-icon"><Phone size={32} /></div>
              <h3>Call Us</h3>
              <p>+234 (0) 813 967 5417</p>
            </div>

            <div className="info-card" style={{ gridColumn: 'span 3' }}>
              <div className="info-icon"><Mail size={32} /></div>
              <h3>Email Us</h3>
              <p>info@veniteuniversity.edu.ng</p>
            </div>

            <div className="info-card" style={{ gridColumn: 'span 3' }}>
              <div className="info-icon"><Clock size={32} /></div>
              <h3>Working Hours</h3>
              <p>Mon–Fri: 09:00–20:00<br/>Sat–Sun: 10:30–22:00</p>
            </div>

          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="grid-12">
            
            <div className="map-side" style={{ gridColumn: 'span 6' }}>
              <div className="map-placeholder">
                <img src={mapImg} alt="Map View" className="map-img" />
                <div className="map-overlay">
                  <span>Interactive Map Placeholder</span>
                </div>
              </div>
            </div>

            <div className="form-side" style={{ gridColumn: 'span 6' }}>
              <h2>Send us a message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Admission Inquiry" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <Button variant="primary" size="lg" type="submit">
                  Send Message <Send size={18} style={{ marginLeft: 8 }} />
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
