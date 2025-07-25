import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const teamMembers = [
  {
    name: 'Vandita Gupta',
    role: 'Full Stack Developer',
    github: 'https://github.com/Vandita1022',
  },
  {
    name: 'Bhumi Mittal',
    role: 'AI Engineer',
    github: 'https://github.com/Mittalbhumi',
  },
  {
    name: 'Radhika Agarwal',
    role: 'UI/UX Designer',
    github: 'https://github.com/radhika101205',
  },
];

const techStack = ['React', 'Flask', 'Python', 'TensorFlow', 'Tailwind CSS'];

const projectLinks = [
  {
    label: 'Github Repository',
    url: 'https://github.com/Vandita1022/StyleSpark',
  },
  { label: 'Live Demo', url: 'https://stylespark.app' },
];


function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <Link to="/" className="back-button">⬅ Back</Link>
        <h2>About StyleSpark</h2>
      </header>

      {/* Intro - simple centered text */}
      <section className="intro">
        <p>
          StyleSpark is an AI-powered fashion recommendation app. Upload an image,
          get analysis on color palettes, aesthetic categories, and receive smart recommendations
          from our curated catalog.
        </p>
        <p>
          This project demonstrates modern frontend design, React state management,
          and communication with a Flask backend.
        </p>
      </section>

      {/* Team Section - flashcard style with avatars */}
      <section className="team-section">
        <h3>Meet the Team</h3>
        <div className="team-members">
          {teamMembers.map(({ name, role, img, github }) => (
            <div key={name} className="team-card">
              <div className="member-avatar">
                <span className="avatar-initials">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h4>{name}</h4>
              <p>{role}</p>
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn-link">
                GitHub Profile
              </a>
            </div>
          ))}
        </div>
      </section>


      {/* Tech Stack - pill badges */}
      <section className="tech-stack-section">
        <h3>Built With</h3>
        <div className="tech-pill-container">
          {techStack.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>
      </section>

      {/* Project Links - button style */}
      <section className="project-links-section">
        <h3>Project Links</h3>
        <div className="links-buttons">
          {projectLinks.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link btn-button"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* Contact - simple text */}
      <section className="contact-section">
        <h3>Get In Touch</h3>
        <p>Email: <a href="mailto:vandita.gupta2609@gmail.com" className="btn-link">vandita.gupta2609@gmail.com</a></p>
      </section>

      <footer className="about-footer">
        Built with <span role="img" aria-label="heart">❤️</span> by Team StyleSpark.
      </footer>
    </div>
  );
}

export default About;
