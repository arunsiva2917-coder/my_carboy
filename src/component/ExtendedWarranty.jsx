import { Link } from "react-router-dom";
import "./ExtendedWarranty.css";

function ExtendedWarranty() {
  return (
    <div className="warranty-page">
      {/* Top banner */}
      <div
        className="warranty-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url()`,
        }}
      >
        <Link to="/" className="warranty-back">← Back</Link>
        <h1>Extended Warranty</h1>
        <p>Keep your car protected even after the company warranty ends.</p>
        <a href="#details" className="warranty-book">Get Warranty →</a>
      </div>

      {/* Content */}
      <div className="warranty-content" id="details">
        <div className="warranty-left">
          <h2>Extended Warranty</h2>
          <p className="warranty-tagline">Don't pay big repair bills out of your pocket.</p>
          <p>
            Our extended warranty covers major repairs so you can drive
            without worry.
          </p>
          <ul>
            <li>Covers engine and gearbox repairs</li>
            <li>Continue cover after company warranty ends</li>
            <li>Cashless repairs at service centers</li>
            <li>Transferable when you sell the car</li>
          </ul>
        </div>

        <div className="warranty-card">
          <h4>Warranty Period:</h4>
          <p>1 to 3 years</p>
          <h4>Starting Price:</h4>
          <p>₹4,999</p>
        </div>
      </div>
    </div>
  );
}

export default ExtendedWarranty;