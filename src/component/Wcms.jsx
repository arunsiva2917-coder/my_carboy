import { FcInspection } from "react-icons/fc";
import { RiDeepseekFill } from "react-icons/ri";
import { VscReport } from "react-icons/vsc";
import { SiWeightsandbiases } from "react-icons/si";
import "./Wcms.css"

function Wcms() {
    return (

         <>

      <div id="outer">

        <h1 className="service-title">Why Choose MYCARBOY Services?</h1>

        <div className="service-grid">

          <div className="services-card">
            <div className="services-image"><FcInspection /></div>
            <h3 className="services-name">ON-SITE INSPECTION</h3>
            <p className="services-text">Professional inspections on-site and on-time. No need for expensive pick-up or drop-off—we bring the expertise to you.</p>
          </div>

          <div className="services-card">
            <div className="services-image"><RiDeepseekFill /></div>
            <h3 className="services-name">60-MINUTE DEEP DIVE</h3>
            <p className="services-text">A complete, high-precision evaluation using professional-grade diagnostic equipment to uncover every hidden detail.</p>
          </div>

          <div className="services-card">
            <div className="services-image"><VscReport /></div>
            <h3 className="services-name">DETAILED SMART REPORT</h3>
            <p className="services-text">Receive a comprehensive PDF featuring photos, a 150+ point checklist, a full OBD scan report, and expert findings—delivered instantly to your phone.</p>
          </div>

          <div className="services-card">
            <div className="services-image"><SiWeightsandbiases /></div>
            <h3 className="services-name">100% INDEPENDENT | 0% BIAS</h3>
            <p className="services-text">We never provide favorable reports. Our mission is simple: we report exactly what is in the car, with zero seller influence.</p> 
          </div>

        </div>

      </div>
      </>
    );
}

export default Wcms;

