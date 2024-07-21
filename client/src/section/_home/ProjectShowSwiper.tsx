import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Typography } from "@mui/material";
// import { Autoplay } from "swiper";

const ProjectShowSwiper = () => {
  return (
    <div className=" p-10">
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        Project showcase
      </Typography>
      <Swiper
        className=" border p-10 rounded-lg"
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        centeredSlides={false}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
          1239: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={false}
      >
        <SwiperSlide>
          <div className="swiper-slide d-flex justify-content-center align-items-center">
            <div className="categories__item d-flex flex-column align-items-center text-center p-2">
              <div className="icon">
                <i>sidlcjkn</i>
              </div>
              <span className="name">sduhjbnm</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide d-flex justify-content-center align-items-center">
            <div className="categories__item d-flex flex-column align-items-center text-center p-2">
              <div className="icon">
                <i>sidlcjkn</i>
              </div>
              <span className="name">sduhjbnm</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide d-flex justify-content-center align-items-center">
            <div className="categories__item d-flex flex-column align-items-center text-center p-2">
              <div className="icon">
                <i>sidlcjkn</i>
              </div>
              <span className="name">sduhjbnm</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide d-flex justify-content-center align-items-center">
            <div className="categories__item d-flex flex-column align-items-center text-center p-2">
              <div className="icon">
                <i>sidlcjkn</i>
              </div>
              <span className="name">sduhjbnm</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide d-flex justify-content-center align-items-center">
            <div className="categories__item d-flex flex-column align-items-center text-center p-2">
              <div className="icon">
                <i>sidlcjkn</i>
              </div>
              <span className="name">sduhjbnm</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide d-flex justify-content-center align-items-center">
            <div className="categories__item d-flex flex-column align-items-center text-center p-2">
              <div className="icon">
                <i>sidlcjkn</i>
              </div>
              <span className="name">sduhjbnm</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectShowSwiper;
