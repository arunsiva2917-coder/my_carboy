import { Link } from "react-router-dom";
import "./RCTransfer.css";


function RCTransfer() {
  const steps = [
    "Fill Form 29 and Form 30",
    "Collect the original RC and insurance copy",
    "Submit documents at the RTO",
    "Pay the transfer fee",
    "Receive the new RC in the buyer's name",
  ];

  return (
    <div className="rc-page">
      {/* Top banner */}
      <div
        className="rc-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url()`,
        }}
      >
        <Link to="/" className="rc-back">← Back</Link>
        <h1>RC Transfer Help</h1>
        <p>We handle the RTO paperwork so your car ownership change is simple.</p>
        <a href="#details" className="rc-book">Start RC Transfer →</a>
      </div>

      {/* Content */}
      <div className="rc-content" id="details">
        <div className="rc-left">
          <h2>RC Transfer Process</h2>
          <p className="rc-tagline">No more running around the RTO office.</p>
          <p>Follow these simple steps and we will support you at every stage.</p>
          <ol>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="rc-card">
          <h4>Service Duration:</h4>
          <p>7 to 15 working days</p>
          <h4>Documents Needed:</h4>
          <p>RC, insurance, ID proof, Form 29 and 30</p>
        </div>
      </div>
    </div>
  );
}

export default RCTransfer;