// Importo lo stile da App.css
import "./App.css";

// Importo lo stile di react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importo il BrowserRoute da react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importo i componenti utilizzati
import Navbar from "./component/Navbar/Navbar";
import UsersPage from "./component/UsersPage.jsx/UsersPage";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/profile/:id" element={} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
