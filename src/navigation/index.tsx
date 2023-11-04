import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home'
import AboutPage from '../pages/about'
import ProjectsPage from '../pages/projects'
import AlumniPage from '../pages/alumni'

function Navigation() {
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