// Importo lo stile da App.css
import "./App.css";

// Importo lo stile di react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importo i componenti utilizzati
import Navbar from "./component/Navbar/Navbar";
import UsersPage from "./component/UsersPage.jsx/UsersPage";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <UsersPage />
      <Footer />
    </>
  );
}

export default App;
