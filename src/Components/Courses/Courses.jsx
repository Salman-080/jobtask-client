"use client";
import "./Courses.css";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { IoIosBook } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const Courses = () => {
  return (
    <div className="Fsection">
      <div className="Heading">
        <div className="pt">
          <p className="courseText">One popular Courses</p>
          <p className="coursesparatext">
            By taking proactive steps to nurture mental health, we can enhance
            our quality of life, build resilience, and foster <br /> a sense of inner
            peace and balance
          </p>
        </div>

        <div className="custom-navigation">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      <div className="largeDevice">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            prevEl: ".swiper-button-prev", // Link custom Prev button
            nextEl: ".swiper-button-next", // Link custom Next button
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="sliderDiv">
            <div className="imgDiv">
              <img className="img" src="img1.jpg" alt="" />
            </div>

            <div className="secondDiv">
              <div className="textSection">
                <div className="bn">
                  <p className="beginner">Beginner</p>
                  <p className="nutrition">Nutriant and Diet</p>
                </div>
                <div>
                  <p className="foundation">
                    Foundation of Sleep: Sleep Science and Sleep Disorders
                  </p>
                </div>
                <div className="stardiv">
                  <p className="star">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStarHalfAlt></FaStarHalfAlt>
                  </p>
                  <p>4.9 (566)</p>
                </div>
              </div>

              <div className="time">
                <FaClock className="clock"></FaClock>
                <p>6h 34 min</p>
                <p>|</p>
                <IoIosBook className="book"></IoIosBook>
                <p>3 Lessons</p>
              </div>
              <br />
              <hr />

              <div className="bottominfo">
                <div className="personInfo">
                  <div className="person1imgdiv">
                    <img className="person1img" src="/person1.png" alt="" />
                  </div>
                  <div>
                    <p>Kylian Murphle</p>
                  </div>
                </div>
                <div>
                  <p className="dollartext">$40</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sliderDiv2">
            <div className="imgDiv">
              <img className="img" src="img2.jpg" alt="" />
              <div className="cartSection">
              <FiShoppingCart className="cart"></FiShoppingCart>
              <FaRegHeart className="heart"></FaRegHeart>
              </div>
            </div>

            <div className="secondDiv">
              <div className="textSection">
                <div className="bn">
                  <p className="beginner">Intermediate</p>
                  <p className="nutrition">Health and Wellness</p>
                </div>
                <div>
                  <p className="foundation">
                  Parenting in the Digital Age: Navigating Screen Time
                  </p>
                </div>
                <div className="stardiv">
                  <p className="star">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStarHalfAlt></FaStarHalfAlt>
                  </p>
                  <p>4.9 (456)</p>
                </div>
              </div>

              <div className="time">
                <FaClock className="clock"></FaClock>
                <p>6h 34 min</p>
                <p>|</p>
                <IoIosBook className="book"></IoIosBook>
                <p>3 Lessons</p>
              </div>
              <br />
              <hr />

              <div className="bottominfo">
                <div className="personInfo">
                  <div className="person1imgdiv">
                    <img className="person1img" src="/person2.jpg" alt="" />
                  </div>
                  <div>
                    <p>Sarah Hopkins</p>
                  </div>
                </div>
                <div>
                  <p className="dollartext">$50</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sliderDiv">
            <div className="imgDiv">
              <img className="img" src="img3.jpg" alt="" />
            </div>

            <div className="secondDiv">
              <div className="textSection">
                <div className="bn">
                  <p className="beginner">Beginner</p>
                  <p className="nutrition">Nutriant and Diet</p>
                </div>
                <div>
                  <p className="foundation">
                  Holistic Health: Integrating Mind, Body, and Spirit
                  </p>
                </div>
                <div className="stardiv">
                  <p className="star">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStarHalfAlt></FaStarHalfAlt>
                  </p>
                  <p>4.9 (389)</p>
                </div>
              </div>

              <div className="time">
                <FaClock className="clock"></FaClock>
                <p>6h 34 min</p>
                <p>|</p>
                <IoIosBook className="book"></IoIosBook>
                <p>3 Lessons</p>
              </div>
              <br />
              <hr />

              <div className="bottominfo">
                <div className="personInfo">
                  <div className="person1imgdiv">
                    <img className="person1img" src="/person3.jpg" alt="" />
                  </div>
                  <div>
                    <p>Luna Karim</p>
                  </div>
                </div>
                <div>
                  <div className="CheckmarkSection">
                  <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                    <p className="">Enrolled</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sliderDiv">
            <div className="imgDiv">
              <img className="img" src="img4.jpg" alt="" />
            </div>

            <div className="secondDiv">
              <div className="textSection">
                <div className="bn">
                  <p className="beginner">Beginner</p>
                  <p className="nutrition">Nutriant and Diet</p>
                </div>
                <div>
                  <p className="foundation">
                  Introduction to healthy Diet and Nutrition
                  </p>
                </div>
                <div className="stardiv">
                  <p className="star">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStarHalfAlt></FaStarHalfAlt>
                  </p>
                  <p>4.9 (566)</p>
                </div>
              </div>

              <div className="time">
                <FaClock className="clock"></FaClock>
                <p>6h 34 min</p>
                <p>|</p>
                <IoIosBook className="book"></IoIosBook>
                <p>3 Lessons</p>
              </div>
              <br />
              <hr />
              <div className="bottominfo">
                <div className="personInfo">
                  <div className="person1imgdiv">
                    <img className="person1img" src="/person4.jpg" alt="" />
                  </div>
                  <div>
                    <p>Kate Winslate</p>
                  </div>
                </div>
                <div>
                  <p className="dollartext">$40</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>


      <div className="smallDevice">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            prevEl: ".swiper-button-prev", // Link custom Prev button
            nextEl: ".swiper-button-next", // Link custom Next button
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="sliderDiv">
            <div className="imgDiv">
              <img className="img" src="img1.jpg" alt="" />
            </div>

            <div className="secondDiv">
              <div className="textSection">
                <div className="bn">
                  <p className="beginner">Beginner</p>
                  <p className="nutrition">Nutriant and Diet</p>
                </div>
                <div>
                  <p className="foundation">
                    Foundation of Sleep: Sleep Science and Sleep Disorders
                  </p>
                </div>
                <div className="stardiv">
                  <p className="star">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStarHalfAlt></FaStarHalfAlt>
                  </p>
                  <p>4.9 (566)</p>
                </div>
              </div>

              <div className="time">
                <FaClock className="clock"></FaClock>
                <p>6h 34 min</p>
                <p>|</p>
                <IoIosBook className="book"></IoIosBook>
                <p>3 Lessons</p>
              </div>
              <br />
              <hr />

              <div className="bottominfo">
                <div className="personInfo">
                  <div className="person1imgdiv">
                    <img className="person1img" src="/person1.png" alt="" />
                  </div>
                  <div>
                    <p>Kylian Murphle</p>
                  </div>
                </div>
                <div>
                  <p className="dollartext">$40</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sliderDiv">
            <div className="imgDiv">
              <img className="img" src="img1.jpg" alt="" />
            </div>

            <div className="secondDiv">
              <div className="textSection">
                <div className="bn">
                  <p className="beginner">Beginner</p>
                  <p className="nutrition">Nutriant and Diet</p>
                </div>
                <div>
                  <p className="foundation">
                    Foundation of Sleep: Sleep Science and Sleep Disorders
                  </p>
                </div>
                <div className="stardiv">
                  <p className="star">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStarHalfAlt></FaStarHalfAlt>
                  </p>
                  <p>4.9 (566)</p>
                </div>
              </div>

              <div className="time">
                <FaClock className="clock"></FaClock>
                <p>6h 34 min</p>
                <p>|</p>
                <IoIosBook className="book"></IoIosBook>
                <p>3 Lessons</p>
              </div>
              <br />
              <hr />

              <div className="bottominfo">
                <div className="personInfo">
                  <div className="person1imgdiv">
                    <img className="person1img" src="/person1.png" alt="" />
                  </div>
                  <div>
                    <p>Kylian Murphle</p>
                  </div>
                </div>
                <div>
                  <p className="dollartext">$40</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sliderDiv">
            <div className="imgDiv">
              <img className="img" src="img1.jpg" alt="" />
            </div>

            <div className="secondDiv">
              <div className="textSection">
                <div className="bn">
                  <p className="beginner">Beginner</p>
                  <p className="nutrition">Nutriant and Diet</p>
                </div>
                <div>
                  <p className="foundation">
                    Foundation of Sleep: Sleep Science and Sleep Disorders
                  </p>
                </div>
                <div className="stardiv">
                  <p className="star">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStarHalfAlt></FaStarHalfAlt>
                  </p>
                  <p>4.9 (566)</p>
                </div>
              </div>

              <div className="time">
                <FaClock className="clock"></FaClock>
                <p>6h 34 min</p>
                <p>|</p>
                <IoIosBook className="book"></IoIosBook>
                <p>3 Lessons</p>
              </div>
              <br />
              <hr />

              <div className="bottominfo">
                <div className="personInfo">
                  <div className="person1imgdiv">
                    <img className="person1img" src="/person1.png" alt="" />
                  </div>
                  <div>
                    <p>Kylian Murphle</p>
                  </div>
                </div>
                <div>
                  <p className="dollartext">$40</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sliderDiv">
            <div className="imgDiv">
              <img className="img" src="img1.jpg" alt="" />
            </div>

            <div className="secondDiv">
              <div className="textSection">
                <div className="bn">
                  <p className="beginner">Beginner</p>
                  <p className="nutrition">Nutriant and Diet</p>
                </div>
                <div>
                  <p className="foundation">
                    Foundation of Sleep: Sleep Science and Sleep Disorders
                  </p>
                </div>
                <div className="stardiv">
                  <p className="star">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStarHalfAlt></FaStarHalfAlt>
                  </p>
                  <p>4.9 (566)</p>
                </div>
              </div>

              <div className="time">
                <FaClock className="clock"></FaClock>
                <p>6h 34 min</p>
                <p>|</p>
                <IoIosBook className="book"></IoIosBook>
                <p>3 Lessons</p>
              </div>
              <br />
              <hr />

              <div className="bottominfo">
                <div className="personInfo">
                  <div className="person1imgdiv">
                    <img className="person1img" src="/person1.png" alt="" />
                  </div>
                  <div>
                    <p>Kylian Murphle</p>
                  </div>
                </div>
                <div>
                  <p className="dollartext">$40</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>

    </div>
  );
};

export default Courses;
