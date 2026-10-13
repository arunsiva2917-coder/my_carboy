import { Link } from "react-router-dom";
import "./Usedcar.css";
import Nav from "./Nav"

function UsedCar() {
  return (
    <div className="used-car-page">
        <Nav/>
      <section className="hero">
        <Link to="/" className="back-btn">← Back</Link>
        <h1>Used Car Inspection</h1>
        <p>Comprehensive 200+ point inspection for pre-owned vehicles</p>
        <button className="book-btn">Book Inspection Now →</button>
      </section>

      {/* Content below the banner */}
      <section className="content">
        <div className="content-left">
          <h2>Used Car Inspection</h2>
          <p>
            Buying a second-hand car? Our expert checks the car fully before
            you pay, so you know its real condition.
          </p>

          <h3>What we check</h3>
          <ul>
            <li>Engine and gearbox condition</li>
            <li>Body, paint and accident damage</li>
            <li>Tyres, brakes and suspension</li>
            <li>Electricals and interior</li>
          </ul>
        </div>

        <div className="content-right">
          <h3>Service Benefits</h3>
          <ul>
            <li>200+ point check</li>
            <li>Detailed report in 24 hours</li>
            <li>Photos of every issue</li>
            <li>Help in price negotiation</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default UsedCar;