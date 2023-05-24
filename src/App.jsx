import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Social } from './components'
import Gg from "./components/Gg"
import Gg2 from "./components/Gg2"


const App = () => {
  
  return (
    <BrowserRouter>
      <div className=" relative  z-0 bg-main">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* <Navbar /> */}
          <Hero />
          <Gg/>
        <Experience />
          <Gg2/>
        {/* <Works /> */}
        </div>
        {/* <About />
        <Tech />
        <Feedbacks /> */}
        <div className="relative z-0">
            <Contact />
        </div>
        <Social />
      </div>
    </BrowserRouter>
  )
}

export default App