import "./Contact.css";
import Nav from "./Nav";
import Footer from "./Footer.jsx";



function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
  }

  return (
    <div className="contact">
      <Nav />
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>We are happy to help you with your car inspection</p>
      </div>

      <div className="contact-content">
        <h3 className="contact-label">Get In Touch</h3>
        <h2>Have a Question? Talk to Our Team</h2>
        <p>
          Planning to buy a car? Contact <b>MYCARBOY</b> to book an
          inspection or ask about our certification service. Call us, send an
          email, or fill the form below and we will reply as soon as possible.
        </p>

        <div className="contact-list">
          <div className="contact-box">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-box">
            <h3>Email</h3>
            <p>info@mycarboy.com</p>
          </div>

          <div className="contact-box">
            <h3>Working Hours</h3>
            <p>Monday to Saturday, 9 AM to 6 PM</p>
          </div>
        </div>

        <h3>Send Us a Message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  
  );
}

export default Contact;
