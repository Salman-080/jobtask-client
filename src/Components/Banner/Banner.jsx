"use client";
import Image from "next/image";
import "./Banner.css";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="banner_Parent">
      <div className="banner">
        <div className="left_banner">
          <p className="starPart">
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaStarHalfAlt className="star"></FaStarHalfAlt>
            <p>4.9 (566)</p>
          </p>
          <h2 className="p0">
            #1 Platform <br /> Powering Health and <br /> Wellness
          </h2>
          <p className="p1">
            We’re restoring home as the primary place of <br /> personal
            well-being
          </p>
          <p className="p2">
            Health is not just about what you're eating. It's also about what
            <br /> you're thinking and saying
          </p>
          <div className="btnSection">
            <button className="btn1">Browse Courses</button>
            <button className="btn2">Get Started</button>
          </div>
        </div>

        <div className="bannerIMG">
          <img className="img" src="/banner.jpg" alt="" />
          <div className="b_below">
            <div className="b_blelow_1">
              <p className="number">12000+</p> |
              <p className="happy_text">Happy learners rely on us regularly</p>
            </div>

            <div className="b_blelow_2">
              <p className="t1">Find your wellbeing</p>
              <p className="t2">
                By prioritizing self-care and making informed choices, one can
                enhance their overall quality of life
              </p>
            </div>
          </div>
        </div>
        <div className="framesection">
          <img className="frame1img" src="/Frame1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
