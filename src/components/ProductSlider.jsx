import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { FaHeart, FaExchangeAlt, FaEye, FaStar } from "react-icons/fa";
import { products, testimonials } from "../data.js";

const ProductSlider = () => {
  return (
    <div className="slider-container container">
      <Swiper
        modules={[Navigation, FreeMode]}
        grabCursor={true}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 }
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(swiper) => {
          // Add scale animation to all slides
          const slides = swiper.slides;
          slides.forEach((slide) => {
            const card = slide.querySelector('.aero-product-card');
            if (card) {
              // Check if slide is in view (within the visible area)
              const slideRect = slide.getBoundingClientRect();
              const containerRect = swiper.el.getBoundingClientRect();
              // Consider a slide "in view" if it's partially visible
              const isInView = slideRect.left < containerRect.right && slideRect.right > containerRect.left;
              if (isInView) {
                card.style.transform = 'scale(1)';
                card.style.transition = 'transform 0.3s ease';
              } else {
                card.style.transform = 'scale(0.9)';
                card.style.transition = 'transform 0.3s ease';
              }
            }
          });
        }}
        onSwiper={(swiper) => {
          // Initialize scale for all slides on mount
          setTimeout(() => {
            const slides = swiper.slides;
            slides.forEach((slide) => {
              const card = slide.querySelector('.aero-product-card');
              if (card) {
                const slideRect = slide.getBoundingClientRect();
                const containerRect = swiper.el.getBoundingClientRect();
                const isInView = slideRect.left < containerRect.right && slideRect.right > containerRect.left;
                if (isInView) {
                  card.style.transform = 'scale(1)';
                } else {
                  card.style.transform = 'scale(0.9)';
                }
                card.style.transition = 'transform 0.3s ease';
              }
            });
          }, 100);
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card aero-product-card">
              {/* Image wrapper with hover icons and badge */}
              <div className="aero-image-wrapper">
                <img src={product.image} alt="product" className="main-image" />
                <img
                  src={product.hoverImage}
                  alt="hover"
                  className="hover-image"
                />
                {/* Hover icons */}
                <div className="aero-hover-icons">
                  <FaHeart className="aero-hover-icon" title="Wishlist" />
                  <FaExchangeAlt className="aero-hover-icon" title="Compare" />
                  <FaEye className="aero-hover-icon" title="Quick View" />
                </div>
                {/* Badge */}
                <span className="aero-badge">{product.badge}</span>
              </div>
              {/* Content */}
              <div
                className="content"
                style={{
                  padding: "1rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                {/* Rating */}
                <div style={{ display: "flex", gap: 2, marginBottom: 8 }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar
                      key={i}
                      style={{ color: "#ffcc00", fontSize: 14 }}
                    />
                  ))}
                </div>
                {/* Title */}
                <h4
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#fff",
                    textTransform: "uppercase",
                    margin: 0,
                    marginBottom: 8,
                    letterSpacing: 0.5,
                  }}
                >
                  {product.title}
                </h4>
                {/* Description */}
                <p
                  style={{
                    color: "#aaa",
                    fontSize: 13,
                    margin: 0,
                    marginBottom: 12,
                    minHeight: 40,
                  }}
                >
                  Moto 3X tire series. Clip into the worlds most wearable shade.
                  20 inch alloy and 20 inch single wheel design. ZOCCA finest
                  tire for wheels including four new colors.
                </p>
                {/* Price row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      background: "#ffcc00",
                      color: "#222",
                      fontWeight: 700,
                      fontSize: 13,
                      borderRadius: 4,
                      padding: "2px 8px",
                    }}
                  >
                    SALE
                  </span>
                  <span
                    style={{ color: "#ffcc00", fontWeight: 700, fontSize: 18 }}
                  >
                    ${product.salePrice}
                  </span>
                  <span
                    style={{
                      color: "#ff0033",
                      textDecoration: "line-through",
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    ${product.price}
                  </span>
                </div>
                {/* Add to cart button */}
                <button
                  className="add-to-cart-btn"
                  style={{
                    width: "100%",
                    background: "#23242a",
                    color: "#fff",
                    border: "1px solid #444",
                    borderRadius: 8,
                    padding: "12px 0",
                    fontWeight: 700,
                    fontSize: 15,
                    letterSpacing: 1,
                    marginTop: "auto",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonial-section mt-5 ">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          slidesPerView={1}
          loop={true}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="custom-testimonial">
                <img src={testimonial.image} alt="avatar" className="testimonial-avatar" />
                <p className="testimonial-quote">
                  <span className="quote-mark">"</span>
                  {testimonial.text}
                  <span className="quote-mark">"</span>
                </p>
                <h5 className="testimonial-author">{testimonial.name}</h5>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
