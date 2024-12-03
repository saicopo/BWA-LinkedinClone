// Importo lo stile da App.css
import "./App.css";

// Importo lo stile di react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importo i componenti utilizzati
import Navbar from "./component/Navbar/Navbar";

import Footer from "./component/Footer/Footer";
import ProfileDetails from "./component/ProfileDetails/ProfileDetails";

function App() {
  return (
    <>
      <Navbar />
      <ProfileDetails />
      <Footer />
    </>
  );
}

export default App;
