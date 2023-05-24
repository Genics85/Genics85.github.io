import About from "./About";
import Navigation from "./Navigation"
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";


function LandingPage() {
  return (
    <Router>
    <div className="flex flex-col md:flex-row  ">
      <Navigation/>
      <Routes>
        <Route index path="/" Component={About}/>
        <Route path="/about" Component={About}/>
        <Route path="/portfolio" Component={Portfolio}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/resume" Component={Resume}/>
        <Route path="/*" Component={About}/>
      </Routes>
    </div>
    </Router>
  )
}

export default LandingPage