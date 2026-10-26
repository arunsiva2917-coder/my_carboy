import { useState } from "react";
import { Link } from "react-router-dom";
import "./CarValuations.css";
import Nav from "./Nav"


function CarValuation() {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (model === "" || year === "") {
      setMessage("Please enter car model and year");
    } else {
      setMessage("Thank you! We will contact you with your car value.");
    }
  };

  return (
    <div className="value-page">
        <Nav/>
      {/* Top banner */}
      <div
        className="value-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url()`,
        }}
      >
        <Link to="/" className="value-back">← Back</Link>
        <h1>Car Valuation</h1>
        <p>Find out the right market price of your car in just a few minutes.</p>
        <a href="#details" className="value-book">Get My Car Value →</a>
      </div>

      {/* Content */}
      <div className="value-content" id="details">
        <div className="value-left">
          <h2>Car Valuation</h2>
          <p className="value-tagline">Know your car's worth before you sell or buy.</p>
          <p>
            Our experts check your car's model, age and condition to give you
            a fair price with no hidden charges.
          </p>
          <ul>
            <li>Free and quick valuation</li>
            <li>Based on current market prices</li>
            <li>Useful for selling, buying or insurance</li>
          </ul>
        </div>

        {/* Form card */}
        <div className="value-card">
          <h4>Enter Car Details</h4>
          <p>We will call you back with the value.</p>

          <input
            type="text"
            placeholder="Car model (e.g. Swift VXi)"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            type="number"
            placeholder="Year of purchase"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <button onClick={handleSubmit}>Get Value</button>
          <p className="value-message">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default CarValuation;