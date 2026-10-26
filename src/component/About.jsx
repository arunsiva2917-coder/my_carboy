import "./About.css";
import Nav from "./Nav";
import Footer from "./Footer.jsx";


function About() {
  return (
    <div className="about">
      <Nav />

      <div className="banner">
        <h1>About Us</h1>
        <p>South India's No.1 Growing Car Certification Company</p>
      </div>

      <div className="content">
        <h3 className="label">Who We Are</h3>
        <h2>Your Partner in Confident Car Buying</h2>
        <p>
          At <b>MYCARBOY</b> we believe that buying a car should be a journey
          defined by excitement, not uncertainty. As a premier automotive
          consultancy, we are dedicated to helping buyers make informed,
          data-driven decisions. Whether you are eyeing a pre-owned gem or
          taking delivery of a brand-new vehicle, our mission is to ensure you
          drive away with a car that meets the highest standards of safety,
          performance, and value.
        </p>

        <h3>Driven by Trust and Transparency</h3>
        <p>
          The used car market can be a minefield of hidden histories and masked
          defects. We were founded to bridge the gap between "looking good" and
          "being good." Our approach is rooted in absolute transparency—providing
          you with an unbiased, expert perspective that de-risks your purchase
          and protects your investment.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
