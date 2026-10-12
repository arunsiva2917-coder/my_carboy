import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import "./Footer.css"

function Footer() {

    return (

       <div id="footer">
        <div id= "foot">
        <img id="footer_img" src="https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-lamborghini.jpg" alt="" />
           <div>
            <h3>Explore</h3>
            <ul> <IoIosHome /> Home</ul>
            <ul> <FcAbout />About</ul>
            <ul><IoMdContact /> Contact</ul>
            <ul> <GoProjectRoadmap />Project</ul>
           </div>

           <div className="box"><FaInstagram /> <FaFacebook /> <FaYoutube /> <IoLogoWhatsapp /></div>
           {/* <div class="box"><FaFacebook /></div>
           <div class="box"><FaYoutube /></div>
           <div class="box"><IoLogoWhatsapp /></div> */}
            </div>

                        <p>&copy; 2023 My App. All rights reserved.</p>

        </div>
        
    )
}

export default Footer;
