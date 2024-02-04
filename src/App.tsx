import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from './components/NavTabs'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
  <Router>
      <NavTabs />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
