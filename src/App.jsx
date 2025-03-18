import Home from "./Pages/home/index";
import Header from "./components/Header/index";
import  "./components/Header/header.css";
import  "./components/Footer/footer.css";
import Footer from "./components/Footer/index";
import Apropos from "./Pages/apropos/index.jsx";
import Erreur from "./Pages/erreur/index.jsx";
import Detail from "./Pages/detail/index.jsx";

//importer les routes
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <> <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/a-propos" element={<Apropos/>}></Route>
          <Route path="detail/:id" element={<Detail/>}></Route>
          <Route path="*" element={<Erreur/>}></Route>
        </Routes>
        
      
      </main>
      <Footer/>
      </Router>
    </>
  );
}
export default App;