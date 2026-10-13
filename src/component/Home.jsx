
import Nav from "./Nav";
import Footer from "./Footer";
import "./Home.css";
import Wcms from "./Wcms"
import Login from "./Login"
import Review from "./Review"
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Nav /> 
      <div id="outer">

        <h1 className="services-title">Our Services</h1>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-image"><img src="https://carcid.com/wp-content/uploads/2024/10/30-goautocity-30color-1024x576-1.jpg" alt="" /></div>
            <h3 className="service-name">Used-Car Inspection</h3>
            <p className="service-text">For Pre-Owned Cars</p>
            <Link className="service-button" to="/used-car-inspection">Explore Service</Link>
          </div>

          <div className="service-card">
            <div className="service-image"><img src="https://cdn.prod.website-files.com/65ba231f3fc718d503140576/6687b9d4f75d60201f860517_Pre-delivery%20Inspection%20Solution%20Module%20Introduced%20By%20Intellinet.jpg" alt="" /></div>
            <h3 className="service-name">Pre-Delivery Inspection</h3>
            <p className="service-text">For Brand-New Cars</p>
            <Link className="service-button" to="/pre-delivery-inspection">Explore Service</Link>
          </div>

          <div className="service-card">
            <div className="service-image"><img src="https://blog.droom.in/droomassets/uploads/2021/01/check-vehicle-service-history.jpg" alt="Vehicle Service History" /></div>
            <h3 className="service-name">Vehicle Service History</h3>
            <p className="service-text">Track Every Service</p>
            <Link className="service-button" to="/vehicle-service-history">Explore Service</Link>
          </div>

          <div className="service-card">
            <div className="service-image"><img src="https://www.grandstreamindia.com/images/services/extended-warranty-0.jpg" alt="Extended Warranty" /></div>
            <h3 className="service-name">Extended Warranty</h3>
            <p className="service-text">Extra Peace of Mind</p> 
          </div>

          <div className="service-card">
            <div className="service-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoYqsR5NYembrwlFb5tmY19Jh2CNTs8DBK5L-LhX9IARBo7bRi65v&s=10" alt="Car Valuation" /></div>
            <h3 className="service-name">Car Valuation</h3>
            <p className="service-text">Know Your Car's Worth</p>
          </div>

          <div className="service-card">
            <div className="service-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQ34fAqYYLmXnJHfmN1iEcR2evwsSLahFQIg6E-2McsX7ye-KV0FVu1g&s=10" alt="RC Transfer Help" /></div>
            <h3 className="service-name">RC Transfer Help</h3>
            <p className="service-text">Easy Paperwork Support</p>
          </div>

        </div>

      </div>
      <Wcms/>

      <Review/>

      <Footer />
    </>
  );
}

export default Home; 
