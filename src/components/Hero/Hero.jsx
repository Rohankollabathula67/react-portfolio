import { useEffect, useRef, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" className="hero-section">
      {/* Decorative blobs */}
      <div className="hero-blob blob-1" aria-hidden="true" />
      <div className="hero-blob blob-2" aria-hidden="true" />

      <div className={`hero-content ${animated ? 'animated' : ''}`}>
        {/* Left – Bio */}
        <div className="hero-bio">
          {/* <div className="hero-tag">Welmco</div> */}
          <h1 className="hero-name">
            Kollabathula<br />
            <span className="hero-name-accent">Rohan</span>
          </h1>
          <p className="hero-description">
            I'm a 3rd-year B.Tech student specializing in <strong>Artificial Intelligence &amp; Machine Learning</strong>.
            Passionate about building a strong career in Computer Science and Engineering, I bring a solid
            foundation in programming and problem-solving, with a drive to develop innovative and impactful projects.
          </p>
          <div className="hero-actions">
            <a
              href="https://drive.google.com/file/d/11Q8njBR-Ns8qg7krBU5KzRQzp8YlFUNv/view"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-btn"
            >
              View CV
            </a>
            <a href="#projects" className="outline-btn" onClick={e => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              See Projects
            </a>
          </div>
        </div>

        {/* Right – Profile image + Education */}
        <div className="hero-right">
          <div className="profile-image-wrapper">
            <img
              src="https://avatars.githubusercontent.com/u/118647297?v=4"
              alt="Kollabathula Rohan profile photo"
              className="profile-image"
            />
            <div className="profile-ring" />
          </div>

          <div className="education-card glass-card">
            <h2 className="edu-heading">
              Education
              <img
                width="28" height="28"
                src="https://img.icons8.com/?size=100&id=11173&format=png&color=FFFFFF"
                alt=""
                className="edu-icon"
                aria-hidden="true"
              />
            </h2>
            <ul className="edu-list">
              {[
                { year: '2022–26', detail: 'GMR Institute of Technology — B.Tech AI & ML (3rd Year)' },
                { year: '2020–22', detail: 'Sri Chaitanya Jr College, Vijayawada — 76.2%' },
                { year: '2019–20', detail: 'Sri Chaitanya Techno School, Nagaram — 10/10 GPA' },
                { year: '2023-26',   detail: 'NCC Cadet — B & C Certificates' },
              ].map(item => (
                <li key={item.detail} className="edu-item">
                  <span className="edu-year">{item.year}</span>
                  <span className="edu-detail">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-dot" />
      </div>
    </section>
  )
}
