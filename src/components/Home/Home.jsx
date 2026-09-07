import { NavLink } from 'react-router-dom'
import profileImg from '../../assets/img/profile.webp'

const Home = () => {
  return (
    <section className="home">
      <div className="home-container grid">
        <div className="home-data">
          <h3 className="home-subtitle"><span>RHCSA CERTIFIED | ENGINEERING STUDENT</span></h3>
          <h1 className="home-title">Pranav Sadwelkar</h1>

          <p className="home-description">
            Computer Science and Engineering student focused on Linux systems,
            DevOps practices, backend development, and scalable software solutions. Passionate about
            automation, infrastructure technologies, and enterprise Linux administration.
          </p>

          <div className="home-tags">
            <span className="home-tag">Linux</span>
            <span className="home-tag">DevOps</span>
            <span className="home-tag">Backend</span>
            <span className="home-tag">Automation</span>
            <span className="home-tag">RHCSA</span>
          </div>

          <div className="home-btns">
            <NavLink to="/about" className="button">About Me</NavLink>
            <NavLink to="/education" className="button button-first">My Education</NavLink>
          </div>
        </div>

        <img src={profileImg} alt="Pranav Sadwelkar" className="home-img" />
      </div>
    </section>
  )
}

export default Home