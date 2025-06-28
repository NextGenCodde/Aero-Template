import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Assuming you might want navigation later
import "swiper/css/free-mode"; // Assuming you might want free-mode later

// If you use specific Swiper modules like Navigation, Pagination, FreeMode, etc.
// import { Navigation, Pagination, FreeMode } from "swiper/modules";


function BlogPostSection() {
  return (
    <div className="blog-post-section">
      <div className="blog-header">
        <h2 className="blog-title">★ LATEST BLOG POST ★</h2>
        <p className="blog-subtitle">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        grabCursor={true}
        className="blog-swiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 }
        }}
      >
        <SwiperSlide>
          <div className="blog-card">
            <div className="blog-image">
              <img src="https://aero-theme.myshopify.com/cdn/shop/articles/post1-270x334.jpg?v=1519516270" alt="Blog post" />
              <div className="blog-date">
                <span className="date-number">25</span>
                <span className="date-month">AUG</span>
              </div>
            </div>
            <div className="blog-content">
              <h3 className="blog-card-title">LADIPISCING ERAT LLENTESQUE PELLENTESQUE ...</h3>
              <div className="blog-author">By: <span>Elomus-Theme Admin</span></div>
              <p className="blog-excerpt">
                Lorem ipsum dolor sit amet, integer adipiscing erat llentesque s sollicitudin
                pellentesque et non erat...
              </p>
              <a href="#" className="read-more-btn">READ MORE</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="blog-card">
            <div className="blog-image">
              <img src="https://aero-theme.myshopify.com/cdn/shop/articles/post1-270x334.jpg?v=1519516270" alt="Blog post" />
              <div className="blog-date">
                <span className="date-number">24</span>
                <span className="date-month">FEB</span>
              </div>
            </div>
            <div className="blog-content">
              <h3 className="blog-card-title">CLARITAS EST ETIAM PROCESSUS DYNAMICUS.</h3>
              <div className="blog-author">By: <span>Aero-Theme Admin</span></div>
              <p className="blog-excerpt">
                Lorem ipsum dolor sit amet, integer adipiscing erat llentesque s sollicitudin
                pellentesque et non erat...
              </p>
              <a href="#" className="read-more-btn">READ MORE</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="blog-card">
            <div className="blog-image">
              <img src="https://aero-theme.myshopify.com/cdn/shop/articles/post1-270x334.jpg?v=1519516270" alt="Blog post" />
              <div className="blog-date">
                <span className="date-number">23</span>
                <span className="date-month">JAN</span>
              </div>
            </div>
            <div className="blog-content">
              <h3 className="blog-card-title">ANOTHER GREAT BLOG POST TITLE HERE</h3>
              <div className="blog-author">By: <span>Elomus-Theme Admin</span></div>
              <p className="blog-excerpt">
                Lorem ipsum dolor sit amet, integer adipiscing erat llentesque s sollicitudin
                pellentesque et non erat...
              </p>
              <a href="#" className="read-more-btn">READ MORE</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BlogPostSection;
