import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function FeaturedProducts() {
  const products = [
    {
      img: "https://aero-theme.myshopify.com/cdn/shop/files/img1-top-aero1.jpg?v=1613507033",
      title: "NEW TRENDING 2024",
      subtitle: "HOT COLLECTION",
      offer: "SALE UP TO 20% OFF",
      color: "yellow",
    },
    {
      img: "https://aero-theme.myshopify.com/cdn/shop/files/img2-top-aero1.jpg?v=1613507033",
      title: "HIGH PERFORMANCE",
      subtitle: "BEST BUY PRICE",
      offer: "SALE UP TO 80% OFF",
      color: "orange",
    },
    {
      img: "https://aero-theme.myshopify.com/cdn/shop/files/img3-top-aero1.jpg?v=1613507033",
      title: "RED SALE ENDS APRIL 30",
      subtitle: "HONDA MOTORCYCLES",
      offer: "SALE UP TO 50% OFF",
      color: "red",
    },
  ];

  return (
    <div className="featured-section py-5">
      <Container>
        <Row>
          {products.map((item, index) => (
            <Col xs={12} sm={12} md={4} key={index}>
              <Card className="product-card text-white">
                <Card.Img src={item.img} alt="product" className="card-image" />
                <Card.ImgOverlay className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h6 className="subheading">{item.subtitle}</h6>
                  <h4 className="title" style={{ color: item.color }}>
                    {item.title}
                  </h4>
                  <p className="offer">{item.offer}</p>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="divider my-4 text-center">
          <span className="label">★ FEATURED PRODUCTS ★</span>
        </div>
      </Container>
    </div>
  );
}

export default FeaturedProducts;
