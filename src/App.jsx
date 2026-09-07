import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import ProjectDetail from './components/Projects/ProjectDetail'
import Certifications from './components/Certifications/Certifications'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="education" element={<Education />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App