import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import './Programmes.css';

const programmes = [
  { id: 1, title: 'Nursing', college: 'Allied Health', desc: 'Prepare for a dynamic career in healthcare and patient management.' },
  { id: 2, title: 'Physiotherapy', college: 'Allied Health', desc: 'Expertise in physical rehabilitation and mobility enhancement.' },
  { id: 3, title: 'Medical Laboratory Science', college: 'Allied Health', desc: 'Advanced diagnostics and laboratory management.' },
  { id: 4, title: 'Public Health', college: 'Allied Health', desc: 'Promote wellness and disease prevention on a global scale.' },
  
  { id: 5, title: 'Microbiology', college: 'Science & IT', desc: 'Study microscopic organisms and their impact on our world.' },
  { id: 6, title: 'Biochemistry', college: 'Science & IT', desc: 'Explore the chemical processes within and related to living organisms.' },
  { id: 7, title: 'Forensic Science', college: 'Science & IT', desc: 'Apply scientific principles to criminal and civil laws.' },
  { id: 8, title: 'Computer Science', college: 'Science & IT', desc: 'Master computing theory, algorithms, and advanced programming.' },
  { id: 9, title: 'Software Engineering', college: 'Science & IT', desc: 'Build the future with cutting-edge software development practices.' },
  { id: 10, title: 'Cyber Security', college: 'Science & IT', desc: 'Protect digital infrastructure and combat global cyber threats.' },
  { id: 11, title: 'Information Technology', college: 'Science & IT', desc: 'Manage and implement modern IT infrastructure.' },
  
  { id: 12, title: 'Accounting', college: 'Social & Management', desc: 'Master financial management, taxation, and corporate finance.' },
  { id: 13, title: 'Economics', college: 'Social & Management', desc: 'Analyze the production, distribution, and consumption of wealth.' },
  { id: 14, title: 'Criminology & Security Studies', college: 'Social & Management', desc: 'Understand crime, societal responses, and modern security.' },
  { id: 15, title: 'Taxation', college: 'Social & Management', desc: 'Navigate complex tax laws and corporate financial structuring.' },
  { id: 16, title: 'Public Administration', college: 'Social & Management', desc: 'Lead in government and non-profit organizational management.' },
  { id: 17, title: 'Entrepreneurship Studies', college: 'Social & Management', desc: 'Learn to create jobs, innovate, and lead successful enterprises.' },
];

export function Programmes() {
  const [filter, setFilter] = useState('All');
  const gridRef = useRef(null);

  const filteredProgrammes = filter === 'All' 
    ? programmes 
    : programmes.filter(p => p.college === filter);

  useEffect(() => {
    // Animate cards on filter change
    gsap.fromTo('.prog-card', 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out', clearProps: 'all' }
    );
  }, [filter]);

  return (
    <div className="page-wrapper prog-page">
      
      <section className="page-hero">
        <div className="container">
          <h1 className="prog-hero-title">Explore Our Programmes</h1>
          <p className="hero-subtitle">Discover our 17 world-class undergraduate degrees.</p>
        </div>
      </section>

      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs">
            {['All', 'Allied Health', 'Science & IT', 'Social & Management'].map(tab => (
              <button 
                key={tab} 
                className={`filter-btn ${filter === tab ? 'active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="prog-grid-section">
        <div className="container">
          <div className="grid-12" ref={gridRef}>
            {filteredProgrammes.map(prog => (
              <div key={prog.id} className="prog-card" style={{ gridColumn: 'span 4' }}>
                <span className="prog-tag">{prog.college}</span>
                <h3>{prog.title}</h3>
                <p>{prog.desc}</p>
                <a href="#" className="prog-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modern-cta">
        <div className="container">
          <h2>Found your path?</h2>
          <p>Take the next step and apply to Venite University.</p>
          <Button variant="primary" size="lg">Apply Now</Button>
        </div>
      </section>

    </div>
  );
}
