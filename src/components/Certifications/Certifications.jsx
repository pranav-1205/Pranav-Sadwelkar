import { NavLink } from 'react-router-dom'
import redHatLogo from '../../assets/img/Red-Hat-logo.png'

const Certifications = () => {
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
    </section>
  )
}

export default Certifications