import { useParams, Link } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import projectsData from '../../data/projectsData'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projectsData.find((p) => p.slug === slug)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Set page title
  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Pranav Sadwelkar`
    } else {
      document.title = 'Project Not Found — Pranav Sadwelkar'
    }
    return () => {
      document.title = 'Portfolio'
    }
  }, [project])

  // Lightbox keyboard handling
  const handleLightboxKey = useCallback(
    (e) => {
      if (!lightboxOpen || !project?.screenshots) return
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i + 1) % project.screenshots.length)
      if (e.key === 'ArrowLeft')
        setLightboxIndex(
          (i) => (i - 1 + project.screenshots.length) % project.screenshots.length
        )
    },
    [lightboxOpen, project]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleLightboxKey)
    return () => document.removeEventListener('keydown', handleLightboxKey)
  }, [handleLightboxKey])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxOpen])

  // ─── 404 ───
  if (!project) {
    return (
      <section className="pd-not-found container section">
        <h2 className="section-title">Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="button pd-back-link" style={{ marginTop: '2rem', display: 'inline-flex' }}>
          <i className="fa-solid fa-arrow-left" style={{ marginRight: '0.5rem' }} />
          Back to Projects
        </Link>
      </section>
    )
  }

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section className="pd container section">
      {/* ─── HERO HEADER ─── */}
      <div className="pd-hero-header">
        <span className="pd-category">{project.category}</span>
        <h1 className="pd-title">{project.title}</h1>
        {project.shortDescription && (
          <p className="pd-short-desc">{project.shortDescription}</p>
        )}
        <div className="pd-hero-actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button pd-action-btn"
              aria-label={`View ${project.title} on GitHub`}
            >
              <i className="fa-brands fa-github" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-first pd-action-btn"
              aria-label={`View live demo of ${project.title}`}
            >
              <i className="fa-solid fa-arrow-up-right-from-square" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* ─── HERO IMAGE ─── */}
      {project.thumbnail && (
        <div className="pd-hero-img-wrapper">
          <img
            src={project.thumbnail}
            alt={`${project.title} — hero screenshot`}
            className="pd-hero-img"
            loading="eager"
          />
        </div>
      )}

      {/* ─── PROJECT OVERVIEW ─── */}
      {project.description && (
        <div className="pd-section">
          <h2 className="pd-section-title">Project Overview</h2>
          <p className="pd-text">{project.description}</p>
          {project.role && (
            <p className="pd-text" style={{ marginTop: '1rem' }}>
              <strong>My Role:</strong> {project.role}
            </p>
          )}
        </div>
      )}

      {/* ─── KEY FEATURES ─── */}
      {project.features && project.features.length > 0 && (
        <div className="pd-section">
          <h2 className="pd-section-title">Key Features</h2>
          <ul className="pd-features-list">
            {project.features.map((feature, i) => (
              <li key={i} className="pd-feature-item">
                <i className="fa-solid fa-check" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ─── TECHNOLOGIES USED ─── */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="pd-section">
          <h2 className="pd-section-title">Technologies Used</h2>
          <div className="pd-tech-tags">
            {project.technologies.map((tech, i) => (
              <span key={i} className="pd-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ─── SCREENSHOTS ─── */}
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="pd-section">
          <h2 className="pd-section-title">Screenshots</h2>
          <div className="pd-gallery">
            {project.screenshots.map((shot, i) => (
              <button
                key={i}
                className="pd-gallery-item"
                onClick={() => openLightbox(i)}
                aria-label={`View screenshot: ${shot.alt}`}
                type="button"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="pd-gallery-img"
                  loading="lazy"
                />
                <div className="pd-gallery-overlay">
                  <i className="fa-solid fa-expand" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ─── TECHNICAL DETAILS ─── */}
      {project.technicalDetails &&
        Object.keys(project.technicalDetails).length > 0 && (
          <div className="pd-section">
            <h2 className="pd-section-title">Technical Details</h2>
            <div className="pd-tech-details">
              {Object.entries(project.technicalDetails).map(([key, value]) => (
                <div key={key} className="pd-tech-detail-item">
                  <h3 className="pd-tech-detail-label">{key}</h3>
                  <p className="pd-tech-detail-value">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      {/* ─── CHALLENGES & LEARNINGS ─── */}
      {(project.challenges || project.learnings) && (
        <div className="pd-section">
          <h2 className="pd-section-title">Challenges &amp; Learnings</h2>
          {project.challenges && (
            <div className="pd-challenge-block">
              <h3 className="pd-challenge-label">
                <i className="fa-solid fa-bolt" />
                Challenges
              </h3>
              <p className="pd-text">{project.challenges}</p>
            </div>
          )}
          {project.learnings && (
            <div className="pd-challenge-block">
              <h3 className="pd-challenge-label">
                <i className="fa-solid fa-lightbulb" />
                Learnings
              </h3>
              <p className="pd-text">{project.learnings}</p>
            </div>
          )}
        </div>
      )}

      {/* ─── PROJECT LINKS (bottom CTA) ─── */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="pd-section pd-bottom-links">
          <h2 className="pd-section-title">Project Links</h2>
          <div className="pd-hero-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button pd-action-btn"
                aria-label={`View ${project.title} on GitHub`}
              >
                <i className="fa-brands fa-github" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-first pd-action-btn"
                aria-label={`View live demo of ${project.title}`}
              >
                <i className="fa-solid fa-arrow-up-right-from-square" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* ─── BACK TO PROJECTS ─── */}
      <div className="pd-back">
        <Link to="/projects" className="pd-back-link">
          <i className="fa-solid fa-arrow-left" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* ─── LIGHTBOX ─── */}
      {lightboxOpen && project.screenshots && (
        <div
          className="pd-lightbox"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
        >
          <button
            className="pd-lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
            type="button"
          >
            <i className="fa-solid fa-xmark" />
          </button>

          {project.screenshots.length > 1 && (
            <button
              className="pd-lightbox-nav pd-lightbox-prev"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex(
                  (i) =>
                    (i - 1 + project.screenshots.length) %
                    project.screenshots.length
                )
              }}
              aria-label="Previous screenshot"
              type="button"
            >
              <i className="fa-solid fa-chevron-left" />
            </button>
          )}

          <img
            src={project.screenshots[lightboxIndex].src}
            alt={project.screenshots[lightboxIndex].alt}
            className="pd-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          {project.screenshots.length > 1 && (
            <button
              className="pd-lightbox-nav pd-lightbox-next"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex(
                  (i) => (i + 1) % project.screenshots.length
                )
              }}
              aria-label="Next screenshot"
              type="button"
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          )}

          {project.screenshots.length > 1 && (
            <div className="pd-lightbox-counter">
              {lightboxIndex + 1} / {project.screenshots.length}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default ProjectDetail
