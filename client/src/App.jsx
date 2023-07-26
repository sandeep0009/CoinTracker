import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Showcoins from "./pages/Showcoins";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/:id" element={<Showcoins/>}/>

    </Routes>
    <Footer/>
      
        
    </>
  )
}

export default App
