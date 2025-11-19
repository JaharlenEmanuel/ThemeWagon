import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Details from './pages/Details';
import Features from './pages/Features';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-linear-to-bl from-blue-50 to-pink-50 flex flex-col">
        <Navbar />
        <main className="grow pt-16 bg-linear-to-bl from-blue-50 to-pink-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/details" element={<Details />} />
            <Route path="/features" element={<Features />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;