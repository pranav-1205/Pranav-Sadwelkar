import { Link } from 'react-router-dom'
import projectsData from '../../data/projectsData'

const Projects = () => {
  return (
    <section className="projects container section">
      <span className="section-subtitle">Featured <span>Work</span></span>
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <article key={project.slug} className="projects-cards">
            <Link
              to={`/projects/${project.slug}`}
              className="projects-card-link"
              aria-label={`View details for ${project.title}`}
            >
              <div className="projects-header">
                <img src={project.thumbnail} alt={project.title} className="projects-img" />
                <span className="projects-link-overlay" aria-hidden="true">
                  <i className="fa-solid fa-arrow-right" />
                  <span>View Project</span>
                </span>
              </div>
              <span className="projects-category">{project.category}</span>
              <h3 className="projects-title">{project.title}</h3>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects