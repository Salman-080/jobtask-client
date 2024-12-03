"use client";
import "./Footer.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { PiDiscordLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="contentDiv">
        <div className="ColumnWholeContent">
          <div className="PerColumnContent">
            <p className="columnHeading">Categories</p>
            <div className="ColumnInnerContent">
              <p>Nutrition and diet</p>
              <p>Fitness training</p>
              <p>Mindfulness</p>
              <p>Mental health</p>
              <p>Personal growth</p>
              <p>Social well-being</p>
            </div>
          </div>
          <div className="PerColumnContent">
            <p className="columnHeading">About</p>
            <div className="ColumnInnerContent">
              <p>About us</p>
              <p>Our partners</p>
              <p>Investors</p>
              <p>Career</p>
            </div>
          </div>
          <div className="PerColumnContent">
            <p className="columnHeading">Resources</p>
            <div className="ColumnInnerContent">
              <p>FAQ</p>
              <p>Refund policies</p>
              <p>Terms and conditions</p>
              <p>Cookie</p>
              <p>Latest posts</p>
            </div>
          </div>
          <div className="PerColumnContent">
            <p className="columnHeading">Support</p>
            <div className="ColumnInnerContent">
              <p>Get in touch</p>
              <p>Visit our forum</p>
            </div>
          </div>
        </div>
        <br /><br />
<div className="hr"></div>
<br /><br />
        <div className="iconsSection">
          <p>Join our official channels</p>
          <div className="icons">
            <RiInstagramFill></RiInstagramFill>
            <FaSquareXTwitter></FaSquareXTwitter>
            <MdOutlineFacebook></MdOutlineFacebook>
            <PiDiscordLogoFill></PiDiscordLogoFill>
          </div>
        </div>
        <br /><br />
<div className="hr"></div>
<br /><br />
        <div className="FooterBottomText">© 2024 EduPath. All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
