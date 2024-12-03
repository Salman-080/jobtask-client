"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Feedback.css";
import { Pagination } from "swiper/modules";
const Feedback = () => {
  return (
    <div>
      <div className="FeedbackSection">
        <div><p className="learnersText">Learners love EduPath. See why <br /> they rate us 4.9 out of 5</p></div>
        <div className="SwiperSection">
          <Swiper
            slidesPerView={5}
            spaceBetween={15}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="SwiperSlide">
              <div className="PerSlideDiv">
                <div className="firstSectionImg">
                  <div className="ImgNameDiv">
                    <div className="ImgDiv">
                      <img className="Img" src="/person1.png" alt="" />
                    </div>

                    <p className="nameText">Kilian Murphe</p>
                  </div>
                  <div>dot</div>
                </div>

                <div>"I love the interactive elements and the community forums where I can connect with other learners."</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <div className="PerSlideDiv">
                <div className="firstSectionImg">
                  <div className="ImgNameDiv">
                    <div className="ImgDiv">
                      <img className="Img" src="/person1.png" alt="" />
                    </div>

                    <p className="nameText">Kilian Murphe</p>
                  </div>
                  <div>dot</div>
                </div>

                <div>“The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life." </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <div className="PerSlideDiv">
                <div className="firstSectionImg">
                  <div className="ImgNameDiv">
                    <div className="ImgDiv">
                      <img className="Img" src="/person1.png" alt="" />
                    </div>

                    <p className="nameText">Kilian Murphe</p>
                  </div>
                  <div>dot</div>
                </div>

                <div>"A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging."</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <div className="PerSlideDiv">
                <div className="firstSectionImg">
                  <div className="ImgNameDiv">
                    <div className="ImgDiv">
                      <img className="Img" src="/person1.png" alt="" />
                    </div>

                    <p className="nameText">Kilian Murphe</p>
                  </div>
                  <div>dot</div>
                </div>

                <div>It's not just about physical health but mental and emotional well-being too."</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide">
              <div className="PerSlideDiv">
                <div className="firstSectionImg">
                  <div className="ImgNameDiv">
                    <div className="ImgDiv">
                      <img className="Img" src="/person1.png" alt="" />
                    </div>

                    <p className="nameText">Kilian Murphe</p>
                  </div>
                  <div>dot</div>
                </div>

                <div>"I love the flexibility of the courses. I can learn at my own pace and revisit the material whenever I need to."</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
              <div className="PerSlideDiv">
                <div className="firstSectionImg">
                  <div className="ImgNameDiv">
                    <div className="ImgDiv">
                      <img className="Img" src="/person1.png" alt="" />
                    </div>

                    <p className="nameText">Kilian Murphe</p>
                  </div>
                  <div>dot</div>
                </div>

                <div>"I love the interactive elements and the community forums where I can connect with other learners."</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
              <div className="PerSlideDiv">
                <div className="firstSectionImg">
                  <div className="ImgNameDiv">
                    <div className="ImgDiv">
                      <img className="Img" src="/person1.png" alt="" />
                    </div>

                    <p className="nameText">Kilian Murphe</p>
                  </div>
                  <div>dot</div>
                </div>

                <div>"I love the interactive elements and the community forums where I can connect with other learners."</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
              <div className="PerSlideDiv">
                <div className="firstSectionImg">
                  <div className="ImgNameDiv">
                    <div className="ImgDiv">
                      <img className="Img" src="/person1.png" alt="" />
                    </div>

                    <p className="nameText">Kilian Murphe</p>
                  </div>
                  <div>dot</div>
                </div>

                <div>"A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging."</div>
              </div>
            </SwiperSlide>
         
           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
