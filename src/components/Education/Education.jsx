const Education = () => {
  const educationItems = [
    {
      id: 1,
      title: 'Bachelor of Engineering in Computer Science',
      date: '2022 <span>to</span> Present',
      description: 'Currently pursuing a Bachelor\'s degree in Computer Science and Engineering, strengthening core computer science fundamentals while simultaneously undertaking the RHCSA course to build strong Linux system administration skills.',
    },
    {
      id: 2,
      title: 'Higher Secondary Education (Science)',
      date: '2020 <span>to</span> 2022',
      description: 'Completed higher secondary education in the science stream, developing analytical thinking and a strong foundation in mathematics and science.',
    },
    {
      id: 3,
      title: 'Secondary School Education',
      date: '2010 <span>to</span> 2020',
      description: 'Completed secondary school education with a solid academic foundation in mathematics and science.',
    },
  ]

  return (
    <section className="education section">
      <div className="education-container container grid">
        <div className="education-group">
          <span className="section-subtitle">Certificates</span>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            I am currently pursuing a Bachelor's degree in Computer Science and Engineering, where I am
            building a strong foundation in programming, data structures, operating systems, databases, and
            computer networks. My academic journey is complemented by hands-on projects that strengthen my
            understanding of real-world software development and DevOps practices.
          </p>
        </div>
        <div className="education-content grid">
          {educationItems.map((item) => (
            <div key={item.id} className="education-item">
              <div className="icon">+</div>
              <div className="education-data">
                <h3 className="education-title">{item.title}</h3>
                <span className="education-date" dangerouslySetInnerHTML={{ __html: item.date }} />
                <p className="education-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education