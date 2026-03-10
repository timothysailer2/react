import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;