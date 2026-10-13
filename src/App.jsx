import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home.jsx";
import Nav from "./component/Nav.jsx";
import Footer from "./component/Footer.jsx";
import Contact from "./component/Contact.jsx";
import About from "./component/About.jsx"
import Project from "./component/Project.jsx"
import Wcms from "./component/Wcms.jsx"
import Login from "./component/Login.jsx"
import Register from "./component/Register.jsx"
import Review from "./component/Review.jsx"
import UsedCar from "./component/Usedcar.jsx";
import PreDelivery from "./component/Predelivery.jsx";
import ServiceHistory from "./component/Servicehistory.jsx";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/wcms" element={<Wcms/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/used-car-inspection" element={<UsedCar />} />
        <Route path="/pre-delivery-inspection" element={<PreDelivery />} />
        <Route path="/vehicle-service-history" element={<ServiceHistory />}/>
      </Routes>
  );
}

export default App;


