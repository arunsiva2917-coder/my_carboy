import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosHome, IoMdContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import "./Footer.css";

const exploreLinks = [
  { to: "/", label: "Home", icon: <IoIosHome aria-hidden="true" /> },
  { to: "/about", label: "About", icon: <FcAbout aria-hidden="true" /> },
  { to: "/contact", label: "Contact", icon: <IoMdContact aria-hidden="true" /> },
  { to: "/project", label: "Project", icon: <GoProjectRoadmap aria-hidden="true" /> },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="footer-brand" to="/" aria-label="MyCarBoy home">
          <img
            src="https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-lamborghini.jpg"
            alt="MyCarBoy"
          />
          <span>MYCARBOY</span>
          <span className="footer-tagline">Confidence in every car journey.</span>
        </Link>

        <nav className="footer-explore" aria-label="Footer navigation">
          <h2>Explore</h2>
          <ul>
            {exploreLinks.map(({ to, label, icon }) => (
              <li key={to}>
                <Link to={to}>{icon}<span>{label}</span></Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-social">
          <div className="footer-social-links" aria-label="Social media">
            <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.youtube.com/" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://www.whatsapp.com/" aria-label="WhatsApp"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyCarBoy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
