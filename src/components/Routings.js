import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Auction from "./Auctions/Auction";
import Login from "../Auth/Login";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Sell from "./Sell";
import Footer from "../common/Footer";
import ProductDetail from "./Auctions/ProductDetail";
import CusSignup from "../Auth/Signup";
import Policy from "./Policy";
import Terms from "./Terms";


function Routings() {


  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/sell" element={<Sell />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/privacypolicy" element={<Policy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cusSignup" element={<CusSignup />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default Routings;
