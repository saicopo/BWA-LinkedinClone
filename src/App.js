// Importo lo stile da App.css
import "./App.css";

// Importo lo stile di react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importo il BrowserRoute da react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importo i componenti utilizzati
import Navbar from "./component/Navbar/Navbar";

import Footer from "./component/Footer/Footer";
import ProfileDetails from "./component/ProfileDetails/ProfileDetails";

function App() {
  return (
    <Router>
      <Navbar />
<<<<<<< HEAD
      <ProfileDetails />
=======
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/profile/:id" element={} />
      </Routes>
>>>>>>> 6f4d88a84a8494398bf26f834a44b9d12d53b825
      <Footer />
    </Router>
  );
}

export default App;
