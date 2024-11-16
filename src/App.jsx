import React ,{useEffect}from 'react'
import NavBar from './Components/NavBar'
import LandingPage from './Components/Home/LandingPage/LandingPage'
import Lenis from 'lenis'
import HomePage from './HomePage'

const App = () => {

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

            }, [])
  return (
    <>
     <HomePage/>
    </>
  )
}

export default App
