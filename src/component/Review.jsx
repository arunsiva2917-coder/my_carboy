import { useState } from "react";
import "./Review.css";

const testimonials = [
  {
    text: "I owned a VW car becuase of this wornderfull inspection team. Mr Mohammad ismail have a passion in this inspection service and delivering wonderfull service to the client without having Buissiness mindset. The prices are more reasonable comparing to other inspection company in the market. I took a smart move by choosing this carboy.in and enjoying my VW Vento.",
    name: "Prasanna Sivakumar",
    place: "CHENNAI",
  },
  {
    text: "Very good service and friendly staff. They checked my car properly before I bought it.",
    name: "Ramesh Kumar",
    place: "BANGALORE",
  },
  {
    text: "Best inspection service I have used so far. Highly recommended for used car buyers.",
    name: "Anitha Raj",
    place: "MUMBAI",
  },
];

function Review() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="review-section">
      <h2>What Our Customers Say</h2>

      <div className="review-card">
        <span className="quote-icon">"</span>
        <p className="review-text">{testimonials[current].text}</p>
        <h4 className="review-name">{testimonials[current].name}</h4>
        <p className="review-place">{testimonials[current].place}</p>
      </div>

      <div className="dots">
        {testimonials.map((item, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Review;
