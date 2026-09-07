import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const root = document.documentElement
    if (savedTheme) {
      root.setAttribute('data-theme', savedTheme)
      setTheme(savedTheme)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.setAttribute('data-theme', 'dark')
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  const openMenu = () => {
    setIsMenuOpen(true)
    document.body.classList.add('nav-open')
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.classList.remove('nav-open')
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      const navMenu = document.getElementById('nav-menu')
      const navToggle = document.getElementById('nav-toggle')
      if (isMenuOpen && navMenu && navToggle && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        closeMenu()
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/about', label: 'About Me' },
    { path: '/education', label: 'Educations' },
    { path: '/contact', label: 'Contact Me' },
  ]

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav-logo center" aria-label="Home">
          Pranav
        </NavLink>

        <div className="nav-menu center" id="nav-menu">
          <button className="nav-close" id="nav-close" onClick={closeMenu} aria-label="Close menu">
            <i className="fa-solid fa-xmark" />
          </button>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-social center">
          <a href="https://github.com/pranav-1205" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.instagram.com/pranav_012._?igsh=Y3NpZm5zd3JoMXZj" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="Instagram">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/pranav-sadwelkar-b0b593348?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="https://youtube.com/@pranav_012?si=0RorERl2FDKJRUqM" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="YouTube">
            <i className="fa-brands fa-youtube" />
          </a>
        </div>

        <div className="nav-actions">
          <a href="/assets/resume/Pranav_Sadwelkar_Resume.pdf" download className="resume-btn">
            <i className="fa-solid fa-download" />
            <span className="resume-btn-text">Resume</span>
          </a>
          <button id="theme-toggle" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            <i className="fa-solid fa-moon" />
            <i className="fa-solid fa-sun" />
          </button>
        </div>

        <button className="nav-toggle" id="nav-toggle" onClick={openMenu} aria-label="Open menu" aria-expanded={isMenuOpen}>
          <i className="fa-solid fa-bars" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar