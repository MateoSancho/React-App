import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Dashboard from './Pages/Dashboard.jsx'     
import ItemDetails from './Pages/ItemDetails.jsx'  
import About from './Pages/About.jsx'
import NotFound from './Pages/NotFound.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/item/:id" element={<ItemDetails />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App