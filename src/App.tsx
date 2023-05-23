import LandingPage from "./LandingPage"
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
      <LandingPage/>
      </Router>
    </div>
  )
}

export default App
