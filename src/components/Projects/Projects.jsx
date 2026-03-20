import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio website built with React + Vite and deployed on GitHub Pages to showcase skills, projects, and certifications.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    tags: ['HTML', 'CSS', 'React', 'GitHub Pages'],
    codeLink: 'https://github.com/yourusername/portfolio',
    demoLink: 'https://yourportfolio.live',
  },
  {
    id: 2,
    title: 'Task Manager App',
    description:
      'A full-stack task manager application using Node.js, Express, and MongoDB with user authentication and complete CRUD operations.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    codeLink: 'https://github.com/yourusername/task-manager',
    demoLink: 'https://taskmanager.live',
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'A weather forecast application built with ReactJS and the OpenWeatherMap API, providing real-time weather updates for any city worldwide.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'OpenWeatherMap API', 'CSS'],
    codeLink: 'https://github.com/yourusername/weather-app',
    demoLink: 'https://weatherapp.live',
  },
  {
    id: 4,
    title: 'Blog Platform',
    description:
      'A blogging platform where users can create, edit, and delete posts, built with Python (Flask), SQLite, and Bootstrap for a clean UI.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    tags: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
    codeLink: 'https://github.com/yourusername/blog-platform',
    demoLink: 'https://blogplatform.live',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <article key={project.id} className="project-card glass-card">
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="project-image"
                loading="lazy"
              />
              <div className="project-overlay">
                <div className="project-overlay-links">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                    View Code
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="overlay-btn overlay-demo">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="gradient-btn" style={{ fontSize: '0.85rem', padding: '0.55rem 1.4rem' }}>
                  View Code
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="outline-btn" style={{ fontSize: '0.85rem', padding: '0.5rem 1.4rem' }}>
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
