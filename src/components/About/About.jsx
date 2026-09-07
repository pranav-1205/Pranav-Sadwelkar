import { NavLink } from 'react-router-dom'
import aboutImg from '../../assets/img/about.webp'

const About = () => {
  return (
    <section className="about section">
      <div className="about-container container grid">
        <div className="about-img-wrapper">
          <img src={aboutImg} alt="About Image" className="about-img" />
        </div>
        <div className="about-data">
          <span className="section-subtitle"><span>Hello</span>, My name is</span>
          <h2 className="section-title">Pranav Sadwelkar</h2>
          <p className="about-description">
            From Mumbai, India.
            I am a Computer Science and Engineering student with a passion for technology and innovation.
            I aspire to build a career in DevOps and Software Development, leveraging my skills to create
            efficient and scalable solutions.
          </p>
          <p className="about-description">
            I am actively strengthening my skills in programming, Linux, and DevOps tools by building
            projects that reflect real-world development and deployment scenarios.
          </p>
          <NavLink to="/education" className="button button-first">View Education</NavLink>
        </div>
      </div>
    </section>
  )
}

export default About