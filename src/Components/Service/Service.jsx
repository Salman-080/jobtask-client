"use client";
import "./Service.css";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Service = () => {
  return (
    <div className="ServiceAllsection">
      <div className="serviceDiv">
        <div className="serviceLeft">
          <h2>We Provide...</h2>
          <div className="serviceTypes">
            <div className="tikcontent">
              <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
              <p>Personalized routine</p>
            </div>
            <div className="tikcontent">
              <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
              <p>Follow-up after completing courses</p>
            </div>
            <hr />
            <div className="additionalres">
              <IoIosCheckmarkCircle className="difftik"></IoIosCheckmarkCircle>
              <div className="additionalresText">
                <p className="accessbold">Access to additional resources</p>
                <p className="accessparagraph">
                  We offer access to a variety of additional resources to
                  enhance your experience, including exclusive tools, guides,
                  and support materials designed to help you achieve your goals
                  more effectively.
                </p>
              </div>
            </div>
            <hr />
            <div className="tikcontent">
              <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
              <p>Free community support</p>
            </div>
          </div>

          <div>
          <button className="ServicesButton">
            Learn More About Our Services
          </button>
          </div>
        </div>
        <div className="serviceImgDiv">
          <img className="ServiceImg" src="/serviceimg.png" alt="" />
          <img className="FrameImg" src="/Frame2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
