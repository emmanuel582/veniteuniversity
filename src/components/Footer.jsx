import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-12 footer-grid">
          
          <div className="footer-col footer-about">
            <Link to="/">
              <img src="https://veniteuniversity.edu.ng/wp-content/uploads/2024/04/venite-logo-1-1-1.png" alt="Venite University Logo" style={{ height: '40px', marginBottom: '16px' }} />
            </Link>
            <p className="footer-tagline">Unlock Your Potential, Transform Your Future!</p>
            <div className="social-links">
              <a href="https://x.com/VeniteUni_NG" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
              <a href="https://www.facebook.com/profile.php?id=100094609575234&mibextid=LQQJ4d" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
              <a href="https://www.instagram.com/veniteuniversity" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
              <a href="https://www.linkedin.com/in/venite-university-iloro-ekiti" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
              <a href="https://www.youtube.com/@VeniteUniversityIloroEkiti" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><YoutubeIcon /></a>
            </div>
          </div>

          <div className="footer-col footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>KM 2, Ayetoro Road, Iloro Ekiti, Ekiti State, Nigeria</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+234 (0) 813 967 5417</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@veniteuniversity.edu.ng</span>
              </li>
              <li>
                <Clock size={18} className="contact-icon" />
                <span>
                  Mon–Fri: 09:00–20:00<br/>
                  Sat–Sun: 10:30–22:00
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programmes">Colleges & Programmes</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Venite University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
