
import Header from './components/Header.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import "./styles/styles.css";
import Register from './components/Register.jsx';
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </main>
      <Footer />
      </div>
    </BrowserRouter>
  )

}

export default App;
