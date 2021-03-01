import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

// Components
import Header from "./header/header";
import Portfolio from "./sections/portfolio";
import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./footer/footer";


const App = () => {

  const [scroll, setScroll] = useState(false)
  const [mediaQuery, setMediaQuery] = useState(false)

  useEffect(() => {
    const mediaMatch = window.matchMedia("(max-width: 980px)")
    setMediaQuery(mediaMatch.matches)

    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 500)
    })

  }, [])

  return (
    <React.Fragment>
      <Header />

      <Portfolio />

      <About />

      <Contact />

      <Footer />

      <div className="scroll-to-top d-lg-none position-fixed" style={{display: scroll && mediaQuery ? "block" : ""}}>
        <Link onClick={(e) => e.preventDefault()}
              href="#page-top"
              to="header"
              spy={true}
              duration={500}
              smooth="easeInOut"
              className="js-scroll-trigger d-block text-center text-white rounded">
          <i className="fa fa-chevron-up"></i>
        </Link>
      </div>

    </React.Fragment>
  )
}

export default App;
