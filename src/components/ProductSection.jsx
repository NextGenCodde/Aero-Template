import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, FreeMode } from "swiper/modules";
import { FaHeart, FaExchangeAlt, FaEye, FaStar } from "react-icons/fa";
import { productCategories } from "../data.js";

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("home");
  const [animating, setAnimating] = useState(false);
  const activeProducts = productCategories[activeCategory];

  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setAnimating(true);
      setTimeout(() => {
        setActiveCategory(category);
        setTimeout(() => {
          setAnimating(false);
        }, 50);
      }, 0);
    }
  };

  return (
    <div className="product-section ">
      <div className="divider my-4 text-center">
        <span className="label">★ OUR PRODUCTS ★</span>
      </div>

      <div className="category-tabs mb-4">
        <button
          className={`category-tab category ${activeCategory === "home" ? "active" : ""}`}
          onClick={() => handleCategoryChange("home")}
        >
          <span>WHEELS</span>
        </button>
        <button
          className={`category-tab category ${activeCategory === "wheels" ? "active" : ""}`}
          onClick={() => handleCategoryChange("wheels")}
        >
          <span>SOUNDS</span>
        </button>
        <button
          className={`category-tab  category ${activeCategory === "sounds" ? "active" : ""} ` }
          onClick={() => handleCategoryChange("sounds")}
        >
          <span>HOME</span>
        </button>
        <button
          className={`category-tab category ${activeCategory === "features" ? "active" : ""}`}
          onClick={() => handleCategoryChange("features")}
        >
          <span>FEATURES</span>
        </button>
      </div>

      <div className={`products-grid ${animating ? 'animating' : 'animated'}`}>
        <Swiper
          modules={[Navigation, FreeMode]}
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={4}
          draggable={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="Product-slide"
        >
          {activeProducts.map((product) => (
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
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default ProductSection;
