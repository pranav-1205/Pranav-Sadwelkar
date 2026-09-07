const Skills = () => {
  const skillCategories = [
    {
      title: 'Linux & DevOps',
      skills: [
        'RHCSA Certified',
        'Linux Administration',
        'Shell Scripting',
        'Git & GitHub',
        'Podman',
        'OpenShift Fundamentals',
        'Docker Basics',
        'CI/CD Fundamentals',
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'MongoDB',
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Responsive Design',
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        'Python',
        'C',
        'Java',
      ],
    },
  ]

  return (
    <section className="skills container section">
      <span className="section-subtitle">Technical <span>Expertise</span></span>
      <h2 className="section-title">Skills & Technologies</h2>

      <div className="skills-categories-container grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="skills-category-title">{category.title}</h3>
            <div className="skills-grid grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills