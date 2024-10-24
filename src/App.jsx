import { useState } from 'react'
import NavBar from './components/NavBar/navbar'
import Hero from './components/Hero/hero'
import './index.css'
import OurServices from './components/OurServices/ourservices'
import Team from './components/Team/team'
import About from './components/About/about'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-platinum font-signika-negative'>
      <NavBar />
      <Hero />
      <About />
      <OurServices />
      <Team /> 
      <Footer />
    </div>
  )
}

export default App
