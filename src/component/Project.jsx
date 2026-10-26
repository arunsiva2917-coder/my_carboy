import "./Project.css";
import Nav from "./Nav";
import Footer from "./Footer.jsx";

function Project() {
  return (
    <div className="project">
      <Nav />
      <div className="banner">
        <h1>Our Projects</h1>
        <p>Making Car Buying Safe, Simple and Transparent</p>
      </div>

      <div className="content">
        <h3 className="label">What We Do</h3>
        <h2>Car Inspection and Certification Projects</h2>
        <p>
          At <b>MYCARBOY</b>, every car we inspect is a project. Our expert
          team checks the car from engine to body, and we give you a clear
          report so you know exactly what you are buying. Here are some of
          the main services we work on.
        </p>

        <div className="project-list">
          <div className="project-box">
            <h3>Used Car Inspection</h3>
            <p>
              We check the engine, brakes, tyres, suspension and body of a
              pre-owned car, and share a full report with photos.
            </p>
          </div>

          <div className="project-box">
            <h3>New Car PDI</h3>
            <p>
              Before you take delivery, we do a Pre-Delivery Inspection to
              make sure your brand-new car has no scratches or faults.
            </p>
          </div>

          <div className="project-box">
            <h3>Accident and History Check</h3>
            <p>
              We look for hidden accident damage, repainted parts and
              flood damage, so there are no surprises later.
            </p>
          </div>
        </div>

        <h3>Our Goal</h3>
        <p>
          We want every buyer in South India to drive away with confidence.
          Each project we complete helps one more family make a safe and
          smart decision.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
