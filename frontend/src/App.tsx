import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Index from "./pages/Index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
function App() {

  return (
    <Router>
      <main>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/iniciar-sesion" element={<Login/>}/>
        </Routes>
        <Footer/>
      </main>

    </Router>
  )
}

export default App
