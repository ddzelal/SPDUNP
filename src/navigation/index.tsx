import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/home'
import AboutPage from '../pages/about'
import ProjectsPage from '../pages/projects'
import AlumniPage from '../pages/alumni'
import { useEffect } from 'react'

function Navigation() {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [location]);
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
        <Route path='/alumni' element={<AlumniPage/>} />
    </Routes>
  )
}

export default Navigation