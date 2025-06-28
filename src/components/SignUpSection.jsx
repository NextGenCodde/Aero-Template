import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const SignUpSection = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your sign-up logic here
    console.log("Signed up with:", email);
    setEmail("");
  };
  return (
    <section className="signup-section">
      <div className="signup-content">
        <div className="signup-news">OUR NEWS</div>
        <h2 className="signup-title">SIGN UP FOR LATEST NEWS</h2>
        <p className="signup-subtitle">
          Subscribe to our email list and stay up-to-date with all our awesome releases and latest updates.
        </p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="signup-input"
            placeholder="Enter you email address here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="signup-btn" type="submit">
            <FaArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUpSection;
