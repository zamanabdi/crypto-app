import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CoinDetails from "./components/coindetails";
import Coins from "./components/coins";
import Exchanges from "./components/exchanges";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
