import { Link } from "react-router-dom";
import "./Predelivery.css";
import Nav from "./Nav"

function PreDelivery() {
  return (
    <div className="pre-delivery-page">
        <Nav/>
      <section className="hero">
        <Link to="/" className="back-btn">← Back</Link>
        <h1>Pre-Delivery Inspection</h1>
        <p>Complete check of your brand-new car before you take delivery</p>
        <button className="book-btn">Book Inspection Now →</button>
      </section>

      {/* Content below the banner */}
      <section className="content">
        <div className="content-left">
          <h2>Pre-Delivery Inspection</h2>
          <p>
            Before you take your new car home, we check it carefully so you
            get a perfect car with no hidden defects.
          </p>

          <h3>What we check</h3>
          <ul>
            <li>Scratches, dents and paint finish</li>
            <li>Engine, fluids and battery</li>
            <li>Lights, wipers and horn</li>
            <li>Documents and accessories</li>
          </ul>
        </div>

        <div className="content-right">
          <h3>Service Benefits</h3>
          <ul>
            <li>Check before you pay</li>
            <li>Expert mechanic visit</li>
            <li>Detailed checklist report</li>
            <li>Peace of mind on delivery day</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PreDelivery;