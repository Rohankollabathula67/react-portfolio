import './Skills.css'

const skills = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    name: 'HTML5',
    description: 'Semantic markup, accessibility, forms, SEO',
    certLink: 'https://drive.google.com/file/d/1Zlo8Bwi7XSy8b18fLt4SRCtWA-0R-yr1/view?usp=sharing',
    color: '#e44d26',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    name: 'CSS3 & Bootstrap',
    description: 'Responsive design, Flexbox, Grid, Bootstrap 5',
    certLink: 'https://drive.google.com/file/d/1B0DvLqzGnjrhN2WtAxuUlymncfan0b8I/view?usp=sharing',
    color: '#264de4',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    name: 'JavaScript',
    description: 'ES6+, DOM, APIs, event handling',
    certLink: '#',
    color: '#f0db4f',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    name: 'Python',
    description: 'Scripting, data analysis, automation, ML',
    certLink: 'https://drive.google.com/file/d/1AcCHCF3Sf64Dg_D8oeq54LKUTNw6dB8c/view?usp=sharing',
    color: '#3572a5',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    name: 'Node.js',
    description: 'Express, REST APIs, backend development',
    certLink: '#',
    color: '#3c873a',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    name: 'React',
    description: 'Hooks, components, state management, SPA',
    certLink: '#',
    color: '#61dafb',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    name: 'Git & GitHub',
    description: 'Version control, branching, pull requests',
    certLink: '#',
    color: '#f34f29',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    name: 'MySQL',
    description: 'Queries, joins, schema design, databases',
    certLink: '#',
    color: '#00758f',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills &amp; Certifications</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-card glass-card">
            <div className="skill-icon-bg" style={{ '--skill-color': skill.color }}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-desc">{skill.description}</p>
            <a
              href={skill.certLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
