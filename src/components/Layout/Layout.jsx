import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <main className="main-frame">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout