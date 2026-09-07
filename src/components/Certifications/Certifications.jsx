import { useState, useCallback, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import redHatLogo from '../../assets/img/Red-Hat-logo.png'

const Certifications = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')

  const handleLightboxKey = useCallback(
    (e) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') setLightboxOpen(false)
    },
    [lightboxOpen]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleLightboxKey)
    return () => document.removeEventListener('keydown', handleLightboxKey)
  }, [handleLightboxKey])

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

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc)
    setLightboxOpen(true)
  }

  const certBasePath = '/assets/Certification/'

  const certifications = [
    {
      id: 1,
      featured: true,
      borderColor: 'var(--first-color)',
      borderWidth: '3px',
      icon: redHatLogo,
      title: 'Red Hat Certified System Administrator (RHCSA)',
      org: 'Red Hat',
      status: 'Certified — 300/300 Score',
      description: 'Successfully earned the Red Hat Certified System Administrator (RHCSA) certification with a perfect score of 300/300, demonstrating strong hands-on Linux system administration skills including networking, storage management, shell operations, permissions, system services, and enterprise Linux administration.',
      tags: 'Linux Administration | Shell Scripting | Networking | User Management | Storage | System Services',
      date: 'Issued: April 10, 2026 | ID: 260-048-145',
      credentialUrl: 'https://rhtapps.redhat.com/verify?certId=260-048-145',
    },
    {
      id: 2,
      featured: true,
      borderColor: 'var(--first-color)',
      borderWidth: '3px',
      icon: redHatLogo,
      title: 'Red Hat OpenShift Development I: Introduction to Containers with Podman (DO188)',
      org: 'Red Hat Academy',
      status: 'Certified',
      description: 'Successfully completed Red Hat OpenShift Development I (DO188), gaining hands-on experience with Podman, container image management, image registries, networking, storage volumes, OpenShift fundamentals, and enterprise Linux container workflows. Developed practical skills for building, managing, and deploying containerized applications.',
      tags: 'Containers | Podman | OpenShift | Container Images | Registries | Volumes | Networking | Enterprise Linux | DevOps',
      date: 'Issued: June 29, 2026 | ID: 260-088-430',
      credentialUrl: 'https://rhtapps.redhat.com/verify?certId=260-088-430',
    },
    {
      id: 3,
      pursuing: true,
      icon: redHatLogo,
      title: 'Red Hat Certified Specialist in Ansible Automation (EX294)',
      org: 'Red Hat Academy',
      status: 'Currently Pursuing',
      statusColor: 'hsl(25, 95%, 57%)',
      description: 'Currently preparing for the Red Hat Certified Specialist in Ansible Automation (EX294) certification with a focus on infrastructure automation, Ansible Playbooks, inventories, roles, variables, Jinja2 templates, handlers, conditionals, loops, automation best practices, and enterprise configuration management.',
      tags: 'Ansible | Playbooks | Inventory | Roles | Jinja2 | Automation | YAML | Linux | DevOps',
    },
  ]

  const additionalCertifications = [
    {
      id: 4,
      type: 'certification',
      title: 'Generative AI & Agentic Systems Engineering',
      org: 'Lenovo LEAP NextGen Scholar Program',
      context: '6-week AICTE Internship',
      image: `${certBasePath}Generative AI & Agentic Systems Engineering.jpeg`,
      alt: 'Generative AI & Agentic Systems Engineering Certificate',
    },
    {
      id: 5,
      type: 'certification',
      title: 'Artificial Intelligence',
      org: 'Lenovo LEAP NextGen Scholar Program',
      context: '60+ Hours of Learning',
      image: `${certBasePath}Artificial Intelligence.jpeg`,
      alt: 'Artificial Intelligence Certificate',
    },
    {
      id: 6,
      type: 'certification',
      title: 'Fundamentals of Drone Systems and AI/ML for Drone Vision',
      org: 'SwaYaan / Center for Drone Applications, IIT Goa',
      context: 'Drone AI/ML Certification',
      image: `${certBasePath}Fundamentals of Drone Systems and AIML for Drone Vision.jpeg`,
      alt: 'Drone Systems and AI/ML Certificate',
    },
    {
      id: 7,
      type: 'achievement',
      title: 'QUANTEXERA 2026',
      org: 'Certificate of Merit',
      context: '3rd Rank — Hackathon',
      image: `${certBasePath}QUANTEXERA 2026 Hackathon.jpg`,
      alt: 'QUANTEXERA 2026 3rd Rank Certificate',
    },
  ]

  const learningGoals = [
    'Kubernetes',
    'Docker',
    'Terraform',
    'AWS Cloud',
    'CI/CD Pipelines',
    'GitOps',
  ]

  return (
    <section className="certifications container section">
      <span className="section-subtitle">Professional Certifications</span>
      <h2 className="section-title">Certifications</h2>

      <div className="certifications-container grid">
        {certifications.map((cert) => (
          <div key={cert.id} className={cert.pursuing ? 'cert-pursuing' : 'cert-featured'}>
            <article
              className="cert-card"
              style={{
                borderWidth: cert.borderWidth,
                borderColor: cert.borderColor,
              }}
            >
              <div className="cert-header">
                <div className="cert-icon-container">
                  <img
                    src={cert.icon}
                    alt={cert.org}
                    className="cert-icon"
                    style={{ width: '6rem' }}
                  />
                </div>
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <span className="cert-org">
                    {cert.org} |{' '}
                    <span
                      className="cert-status"
                      style={{
                        fontWeight: cert.pursuing ? undefined : 800,
                        color: cert.statusColor,
                      }}
                    >
                      {cert.status}
                    </span>
                  </span>
                </div>
              </div>
              <p className="cert-description">{cert.description}</p>
              <div className="cert-footer">
                <span className="cert-tag">{cert.tags}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
              {cert.credentialUrl && (
                <NavLink
                  to={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-first cert-button"
                >
                  View Credential
                </NavLink>
              )}
            </article>
          </div>
        ))}

        <div className="cert-section-divider" />

        <div className="additional-certifications-section">
          <span className="section-subtitle" style={{ marginBottom: '0.5rem', display: 'block' }}>
            Additional Certifications & Achievements
          </span>
          <h3 className="cert-section-title">Additional Certifications & Achievements</h3>

          <div className="additional-certs-grid grid">
            {additionalCertifications.map((cert) => (
              <article
                key={cert.id}
                className={`additional-cert-card ${cert.type === 'achievement' ? 'achievement-card' : ''}`}
                onClick={() => openLightbox(cert.image)}
                style={{ cursor: 'pointer' }}
              >
                <div className="additional-cert-image-wrapper">
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="additional-cert-image"
                    loading="lazy"
                  />
                </div>
                <div className="additional-cert-content">
                  {cert.type === 'achievement' && (
                    <span className="achievement-badge">ACHIEVEMENT</span>
                  )}
                  <h4 className="additional-cert-title">{cert.title}</h4>
                  <p className="additional-cert-org">{cert.org}</p>
                  <p className="additional-cert-context">{cert.context}</p>
                </div>
                <button
                  className="button button-first additional-cert-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    openLightbox(cert.image)
                  }}
                  aria-label={`View ${cert.title} certificate`}
                >
                  View Certificate
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="cert-learning">
          <h3 className="cert-section-title" style={{ marginTop: '1rem' }}>Next Learning Goals</h3>
          <div className="learning-grid grid">
            {learningGoals.map((goal, index) => (
              <div key={index} className="learning-item">
                {goal}
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="cert-lightbox"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
        >
          <button
            className="cert-lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close certificate viewer"
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <img
            src={lightboxImage}
            alt="Certificate"
            className="cert-lightbox-img"
          />
        </div>
      )}
    </section>
  )
}

export default Certifications