import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import Women from './pages/Women'
import Men from './pages/Men'
import Courses from './pages/Courses'
import Details from './pages/Details'
import Navbar2 from './components/Navbar2'
import { ThemeDataContext } from './context/ThemeContext'
import { useContext } from 'react'

const App = () => {
  const [theme] = useContext(ThemeDataContext);
  console.log(theme);
  
  return (
    <div className= {theme === 'dark' ? 'h-screen bg-black text-white' : 'h-screen bg-gray-200 text-black'}>
      <Navbar />
      <Navbar2 />
      <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>

        <Route path='/contact' element={<Contact />}>
          <Route path='women' element={<Women />}/>
          <Route path='men' element={<Men />}/>
        </Route>
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<Details />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App