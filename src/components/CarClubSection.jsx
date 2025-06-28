import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function CarClubSection() {
  return (
    <div className="carclub-section py-5">
      <Container>
        <Row className="">
          <Col md={6} className="image-side d-flex justify-content-center">
            <img
              src="https://aero-theme.myshopify.com/cdn/shop/files/img1.png?v=1613507033"
              alt="wheel1"
              className="wheel big-wheel"
            />
          </Col>
          <Col md={6}>
            <h5 className="subheading">MEET OUR</h5>
            <h2 className="heading">CAR CLUB SINCE 1892</h2>
            <h6 className="custom-sub">CUSTOME AND CLUB</h6>
            <p className="description">
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica...
            </p>
            <p className="description">
              Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
            <h6 className="ceo-name">JOHN DOE - CEO AERO</h6>
            <img
              src="https://aero-theme.myshopify.com/cdn/shop/files/img2.png?v=1613507033"
              alt="signature"
              className="signature"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CarClubSection;
