import { Link } from "react-router-dom";
import "./Servicehistory.css";
import Nav from "./Nav"
function ServiceHistory() {
  return (
    <div className="service-history-page">
        <Nav/>
      <section className="hero">
        <Link to="/" className="back-btn">← Back</Link>
        <h1>Vehicle Service History</h1>
        <p>Track every service of your vehicle in one place</p>
        <button className="book-btn">View History Now →</button>
      </section>

      <section className="content">
        <div className="content-left">
          <h2>Vehicle Service History</h2>
          <p>
            Keep all service records of your vehicle in one place and see what
            was done and when.
          </p>

          <h3>What you get</h3>
          <ul>
            <li>Date-wise service records</li>
            <li>Parts replaced and bills</li>
            <li>Reminder for next service</li>
            <li>Useful proof when selling the car</li>
          </ul>
        </div>

        <div className="content-right">
          <h3>Service Benefits</h3>
          <ul>
            <li>All records in one place</li>
            <li>Easy to share with buyers</li>
            <li>Never miss a service date</li>
            <li>Better resale value</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ServiceHistory;