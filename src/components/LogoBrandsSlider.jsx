import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function LogoBrandsSlider() {
  // Sample logo data
  const logos = [
    {
      id: 1,
      image:"https://aero-theme.myshopify.com/cdn/shop/files/br-01.png?v=1613507407",
      name: "Brand 1"
    },
    {
      id: 2,
      image: "https://aero-theme.myshopify.com/cdn/shop/files/br-02.png?v=1613507033",
      name: "Brand 2"
    },
    {
      id: 3,
      image: "https://aero-theme.myshopify.com/cdn/shop/files/br-03.png?v=1613507033",
      name: "Brand 3"
    },
    {
      id: 4,
      image: "https://aero-theme.myshopify.com/cdn/shop/files/br-04.png?v=1613507033",
      name: "Brand 4"
    },
    {
      id: 5,
      image: "https://aero-theme.myshopify.com/cdn/shop/files/br-05.png?v=1613507033",
      name: "Brand 5"
    },
    {
      id: 6,
      image: "https://aero-theme.myshopify.com/cdn/shop/files/br-06.png?v=1613507033",
      name: "Brand 6"
    },
    {
      id: 7,
      image: "https://aero-theme.myshopify.com/cdn/shop/files/br-01.png?v=1613507033",
      name: "Brand 7"
    }
  ];

  return (
    <div className="logo-brands-section">
      <div className="container">
        <div className="divider my-4 text-center">
          <span className="label">★ LOGO BRANDS AND CLIENTS ★</span>
        </div>

        <div className="logo-brands-slider">
          <Swiper
          className="swiper_logo"
            modules={[Navigation]}
            navigation={{
              nextEl: '.logo-swiper-button-next',
              prevEl: '.logo-swiper-button-prev',
            }}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 }
            }}
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.id}>
                <div className="logo-item">
                  <img src={logo.image} alt={logo.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="logo-swiper-button-next swiper-button-next"></div>
          <div className="logo-swiper-button-prev swiper-button-prev"></div>
        </div>
      </div>
    </div>
  );
}

export default LogoBrandsSlider;
