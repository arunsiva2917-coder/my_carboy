import { Link, useNavigate } from "react-router-dom";

import { IoIosHome, IoMdContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { GoProjectRoadmap } from "react-icons/go";
import "./Nav.css";

function Nav() {
const navigate = useNavigate();

return ( 
<>
<div id="Nav"> <img
     id="nav_img"
     src="https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-lamborghini.jpg"
     alt="Logo"
   />


  <a href="/" id="home-link">
    <h3><IoIosHome /> Home</h3>
  </a>

  <a href="/about">
    <h3><FcAbout /> About</h3>
  </a>

  <a href="/contact">
    <h3><IoMdContact /> Contact</h3>
  </a>

  <a href="/project">
    <h3><GoProjectRoadmap /> Project</h3>
  </a>

  <div id="btn">
    <button onClick={() => navigate("/login")}>
      Login
    </button>

    <button onClick={() => navigate("/register")}>
      Register
    </button>
  </div>
</div>
</>

);
}

export default Nav;
