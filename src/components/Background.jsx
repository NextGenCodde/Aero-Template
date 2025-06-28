import React from "react";
import { FaRocket, FaMoneyBill1Wave, FaHeadphones } from "react-icons/fa6";

function Background() {
  return (
    <div className="promo-container">
      {/* Promotional Cards Section */}
      <div className="promo-section d-flex">
        {/* Left Promo Card */}
        <div className="promo-card" style={{
          backgroundImage: "url('https://aero-theme.myshopify.com/cdn/shop/files/img1-bottom-aero1.jpg?v=1613507033')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="promo-content">
            <div className="promo-tag">NEW ARRIVALS</div>
            <h2 className="promo-title">GOOD HELP & GUARD</h2>
            <p className="promo-description">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
              illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
            </p>
            <button className="promo-btn">
              VIEW SELECTION <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Right Promo Card */}
        <div className="promo-card" style={{
          backgroundImage: "url('https://aero-theme.myshopify.com/cdn/shop/files/img2-bottom-aero1.jpg?v=1613507033')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="promo-content">
            <div className="promo-tag">EXCLUSIVE PROMOTION</div>
            <h2 className="promo-title">TOP 10 VEHICLES OFF WEEK</h2>
            <p className="promo-description">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
              illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
            </p>
            <button className="promo-btn">
              VIEW SELECTION <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Icon Links Section */}
      <div className="icon-links-section d-flex">
        <div className="icon-link-item">
          <div className="icon-circle red-bg">
          <FaRocket />
          </div>
        <h4>Free Delivery</h4>
                  <p className="icon-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>

        <div className="icon-link-item">
          <div className="icon-circle orange-bg">
           <FaMoneyBill1Wave/>
          </div>
          <h4>Money Gurrenty</h4>
          <p className="icon-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>

        <div className="icon-link-item">
          <div className="icon-circle red-bg">
           <FaHeadphones/>
          </div>
          <h4>Online Support</h4>
          <p className="icon-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>
      </div>
    </div>
  );
}

export default Background;
