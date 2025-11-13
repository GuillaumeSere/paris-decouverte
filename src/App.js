// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Accueil from "./pages/Accueil/Accueil";
import Actualites from "./pages/Actualites/Actualites";
import Sorties from "./pages/Sorties/Sorties";
import Visite from "./pages/visite/Visite";
import "./index.css";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/sorties" element={<Sorties />} />
          <Route path="/visite" element={<Visite />} />
        </Routes>
        <Footer />
    </Router>
  );
}
