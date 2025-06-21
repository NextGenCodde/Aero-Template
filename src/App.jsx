import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Navbar, Nav, NavDropdown, Container, Card } from "react-bootstrap";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FaRocket ,FaMoneyBill1Wave , FaHeadphones  } from "react-icons/fa6";
import {

  FaSearch,
  FaTh,
  FaGlobe,
  FaShoppingBag,
  FaHeart,
  FaExchangeAlt,
  FaEye,
  FaStar,
  FaRegStar,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";


function NavbarAero() {
  return (
    <Navbar expand="lg" className="aero-navbar">
      <Container style={{ maxWidth: "1440px" }} className="nav-container">
        {/* Left Logo */}
        <Navbar.Brand href="#home" className="aero-logo">
          Aero<span className="dot">.</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Center Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto aero-nav-links">
            <NavDropdown title="HOME" id="home-dropdown" className="dropdown">
              <NavDropdown.Item href="#home/1">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#home/2">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="#home/3">Home 3</NavDropdown.Item>
              <NavDropdown.Item href="#home/4">Home 4</NavDropdown.Item>
              <NavDropdown.Item href="#home/5">Home 5</NavDropdown.Item>
              <NavDropdown.Item href="#home/6">Home 6</NavDropdown.Item>
              <NavDropdown.Item href="#home/7">Home 7</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="SHOP" id="shop-dropdown" className="dropdown">
              <NavDropdown.Item href="#shop/1">Shop 1</NavDropdown.Item>
              <NavDropdown.Item href="#shop/2">Shop 2</NavDropdown.Item>
              <NavDropdown.Item href="#shop/3">Shop 3</NavDropdown.Item>
              <NavDropdown.Item href="#shop/4">Shop 4</NavDropdown.Item>
              <NavDropdown.Item href="#shop/5">Shop 5</NavDropdown.Item>
              <NavDropdown.Item href="#shop/6">Shop 6</NavDropdown.Item>
              <NavDropdown.Item href="#shop/7">Shop 7</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="FEATURED"
              id="featured-dropdown"
              className="dropdown"
            >
              <NavDropdown.Item href="#featured/1">Featured 1</NavDropdown.Item>
              <NavDropdown.Item href="#featured/2">Featured 2</NavDropdown.Item>
              <NavDropdown.Item href="#featured/3">Featured 3</NavDropdown.Item>
              <NavDropdown.Item href="#featured/4">Featured 4</NavDropdown.Item>
              <NavDropdown.Item href="#featured/5">Featured 5</NavDropdown.Item>
              <NavDropdown.Item href="#featured/6">Featured 6</NavDropdown.Item>
              <NavDropdown.Item href="#featured/7">Featured 7</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="LAYOUTS"
              id="layouts-dropdown"
              className="dropdown"
            >
              <NavDropdown.Item href="#layouts/1">Layout 1</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/2">Layout 2</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/3">Layout 3</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/4">Layout 4</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/5">Layout 5</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/6">Layout 6</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/7">Layout 7</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PAGES" id="pages-dropdown" className="dropdown">
              <NavDropdown.Item href="#pages/1">Page 1</NavDropdown.Item>
              <NavDropdown.Item href="#pages/2">Page 2</NavDropdown.Item>
              <NavDropdown.Item href="#pages/3">Page 3</NavDropdown.Item>
              <NavDropdown.Item href="#pages/4">Page 4</NavDropdown.Item>
              <NavDropdown.Item href="#pages/5">Page 5</NavDropdown.Item>
              <NavDropdown.Item href="#pages/6">Page 6</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right Icons */}
          <div className="aero-icons d-flex align-items-center gap-4">
            <FaSearch className="nav-icon" title="Search" />
            <FaTh className="nav-icon" title="Categories" />
            <FaGlobe className="nav-icon" title="Language" />
            <div className="cart-icon-wrapper position-relative">
              <FaShoppingBag className="nav-icon" title="Cart" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
function CarouselAero() {
  return (
    <Carousel fade prevIcon={<GrFormPrevious />} nextIcon={<GrFormNext />}>
      <Carousel.Item>
        <div className="bg_img _1"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg_img _2"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg_img _3"></div>
      </Carousel.Item>
    </Carousel>
  );
}

function Aerotabs() {
  const [activeTab, setActiveTab] = useState("basic");
  return (
    <div className="search-wrapper">
      <div className="tabs-box">
        <button
          className={`tab-btn ${activeTab === "basic" ? "active" : ""}`}
          onClick={() => setActiveTab("basic")}
        >
          SEARCH BY YEAR, MAKE, MODEL
        </button>
        <button
          className={`tab-btn ${activeTab === "advanced" ? "active" : ""}`}
          onClick={() => setActiveTab("advanced")}
        >
          MAKE, MODEL, YEAR, TYPE
        </button>
      </div>

      <div className="form-box">
        <Form>
          <Row className="g-2 align-items-center">
            <Col md>
              <Form.Select className="custom-select">
                <option>Select Make</option>
                <option value="Acura">Acura</option>
                <option value="Alfa Romeo">Alfa Romeo</option>
                <option value="Aston Martin">Aston Martin</option>
                <option value="Audi">Audi</option>
                <option value="Bentley">Bentley</option>
                <option value="BMW">BMW</option>
                <option value="Bugatti">Bugatti</option>
                <option value="Buick">Buick</option>
                <option value="Cadillac">Cadillac</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Chrysler">Chrysler</option>
                <option value="Citroën">Citroën</option>
                <option value="Dacia">Dacia</option>
                <option value="Daewoo">Daewoo</option>
                <option value="Daihatsu">Daihatsu</option>
                <option value="Dodge">Dodge</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Fiat">Fiat</option>
                <option value="Ford">Ford</option>
                <option value="Genesis">Genesis</option>
                <option value="GMC">GMC</option>
                <option value="Honda">Honda</option>
                <option value="Hummer">Hummer</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Infiniti">Infiniti</option>
                <option value="Isuzu">Isuzu</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Jeep">Jeep</option>
                <option value="Kia">Kia</option>
                <option value="Koenigsegg">Koenigsegg</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Lancia">Lancia</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Lexus">Lexus</option>
                <option value="Lincoln">Lincoln</option>
                <option value="Lotus">Lotus</option>
                <option value="Maserati">Maserati</option>
                <option value="Maybach">Maybach</option>
                <option value="Mazda">Mazda</option>
                <option value="McLaren">McLaren</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Mercury">Mercury</option>
                <option value="Mini">Mini</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Nissan">Nissan</option>
                <option value="Opel">Opel</option>
                <option value="Pagani">Pagani</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Pontiac">Pontiac</option>
                <option value="Porsche">Porsche</option>
                <option value="RAM">RAM</option>
                <option value="Renault">Renault</option>
                <option value="Rolls-Royce">Rolls-Royce</option>
                <option value="Rover">Rover</option>
                <option value="Saab">Saab</option>
                <option value="Saturn">Saturn</option>
                <option value="Scion">Scion</option>
                <option value="Seat">Seat</option>
                <option value="Skoda">Skoda</option>
                <option value="Smart">Smart</option>
                <option value="Subaru">Subaru</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Tata">Tata</option>
                <option value="Tesla">Tesla</option>
                <option value="Toyota">Toyota</option>
                <option value="Vauxhall">Vauxhall</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Volvo">Volvo</option>
              </Form.Select>
            </Col>
            <Col md>
              <Form.Select className="custom-select">
                <option>Select Model</option>
              </Form.Select>
            </Col>
            <Col md>
              <Form.Select className="custom-select">
                <option>Select Year</option>
              </Form.Select>
            </Col>

            <Col md={3}>
              <Button className="search-btn w-100">Search</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

function Mainheading() {
  return (
    <div className="main-heading">
      <h1 className="heading-text">History</h1>
      <h2 className="subheading-text">
        Welcome To <br />
        <b>Aero Car Store</b>
      </h2>
    </div>
  );
}

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

const products = [
  {
    id: 1,
    title: "AERO PREMIUM RACING JACKET",
    price: "150.00",
    salePrice: "120.00",
    image:
      "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
    hoverImage:
      "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
    badge: "SALE",
  },
  {
    id: 2,
    title: "MOTORCYCLE LEATHER GLOVES",
    price: "80.00",
    salePrice: "65.00",
    image:
      "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
    hoverImage:
      "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
    badge: "HOT",
  },
  {
    id: 3,
    title: "RACING HELMET PRO SERIES",
    price: "300.00",
    salePrice: "250.00",
    image:
      "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
    hoverImage:
      "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
    badge: "NEW",
  },
  {
    id: 4,
    title: "SPORT BIKE BOOTS PREMIUM",
    price: "180.00",
    salePrice: "145.00",
    image:
      "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
    hoverImage:
      "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
    badge: "LIMITED",
  },
  {
    id: 5,
    title: "RACING SUIT COMPETITION",
    price: "450.00",
    salePrice: "380.00",
    image:
      "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
    hoverImage:
      "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
    badge: "SALE",
  },
  {
    id: 6,
    title: "MOTORCYCLE BACKPACK SPORT",
    price: "95.00",
    salePrice: "75.00",
    image:
      "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
    hoverImage:
      "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
    badge: "HOT",
  },
  {
    id: 7,
    title: "RACING GOGGLES ELITE",
    price: "120.00",
    salePrice: "95.00",
    image:
      "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
    hoverImage:
      "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
    badge: "NEW",
  },
  {
    id: 8,
    title: "MOTORCYCLE KNEE PADS",
    price: "60.00",
    salePrice: "45.00",
    image:
      "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
    hoverImage:
      "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
    badge: "LIMITED",
  },
  {
    id: 9,
    title: "RACING VEST PROTECTION",
    price: "200.00",
    salePrice: "160.00",
    image:
      "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
    hoverImage:
      "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
    badge: "SALE",
  },
  // ... Add more products (total 9)
];
const testimonials = [
  {
    id: 1,
    name: 'NATHANAEL JAWORSKI',
    text: 'Mauris blandit, metus a venenatis lacinia, felis enim tincidunt est, condimentum vulputate orci augue eu metus. Fusce dictum, nisi et semper ultricies, felis tortor blandit odio, egestas consequat purus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'JANE SMITH',
    text: 'Mauris blandit, metus a venenatis lacinia, felis enim tincidunt est, condimentum vulputate orci augue eu metus. Fusce dictum, nisi et semper ultricies, felis tortor blandit odio, egestas consequat purus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  }
];

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

const productCategories = {
  home: [
    {
      id: 1,
      title: "AERO PREMIUM RACING BRAKES",
      price: "150.00",
      salePrice: "120.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "SALE",
    },
    {
      id: 2,
      title: "MOTORCYCLE LEATHER GLOVES",
      price: "80.00",
      salePrice: "65.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "HOT",
    },
    {
      id: 3,
      title: "RACING HELMET PRO SERIES",
      price: "300.00",
      salePrice: "250.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "NEW",
    },
    {
      id: 4,
      title: "SPORT BIKE BOOTS PREMIUM",
      price: "180.00",
      salePrice: "145.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "LIMITED",
    },
    {
      id: 17,
      title: "CARBON FIBER DASHBOARD KIT",
      price: "220.00",
      salePrice: "185.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "NEW",
    },
    {
      id: 18,
      title: "PREMIUM SEAT CUSHION SET",
      price: "95.00",
      salePrice: "75.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "SALE",
    },
    {
      id: 19,
      title: "LUXURY CAR FLOOR MATS",
      price: "120.00",
      salePrice: "99.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "HOT",
    },
  ],
  wheels: [
    {
      id: 5,
      title: "SPORT ALLOY WHEELS 19 INCH",
      price: "450.00",
      salePrice: "380.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "SALE",
    },
    {
      id: 6,
      title: "RACING WHEELS CARBON FIBER",
      price: "95.00",
      salePrice: "75.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "HOT",
    },
    {
      id: 7,
      title: "PREMIUM TIRES ALL SEASON",
      price: "120.00",
      salePrice: "95.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "NEW",
    },
    {
      id: 8,
      title: "PERFORMANCE WHEEL RIMS",
      price: "60.00",
      salePrice: "45.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "LIMITED",
    },
    {
      id: 20,
      title: "OFFROAD WHEEL PACKAGE",
      price: "520.00",
      salePrice: "470.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "NEW",
    },
    {
      id: 21,
      title: "WHEEL LOCK SECURITY KIT",
      price: "45.00",
      salePrice: "35.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "SALE",
    },
    {
      id: 22,
      title: "CHROME WHEEL TRIM SET",
      price: "85.00",
      salePrice: "70.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "HOT",
    },
  ],
  sounds: [
    {
      id: 9,
      title: "CAR AUDIO SYSTEM PREMIUM",
      price: "200.00",
      salePrice: "160.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "SALE",
    },
    {
      id: 10,
      title: "SUBWOOFER PERFORMANCE",
      price: "180.00",
      salePrice: "150.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "HOT",
    },
    {
      id: 11,
      title: "SPEAKER SET DELUXE",
      price: "250.00",
      salePrice: "210.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "NEW",
    },
    {
      id: 12,
      title: "AMPLIFIER PREMIUM SERIES",
      price: "320.00",
      salePrice: "280.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "LIMITED",
    },
    {
      id: 23,
      title: "BLUETOOTH CAR AUDIO ADAPTER",
      price: "65.00",
      salePrice: "50.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "NEW",
    },
    {
      id: 24,
      title: "PREMIUM SOUND INSULATION KIT",
      price: "150.00",
      salePrice: "125.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "SALE",
    },
    {
      id: 25,
      title: "TOUCHSCREEN AUDIO CONTROLLER",
      price: "190.00",
      salePrice: "165.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "HOT",
    },
  ],
  features: [
    {
      id: 13,
      title: "PREMIUM DASHBOARD SYSTEM",
      price: "350.00",
      salePrice: "290.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "NEW",
    },
    {
      id: 14,
      title: "RACING SEAT COVERS DELUXE",
      price: "120.00",
      salePrice: "95.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "HOT",
    },
    {
      id: 15,
      title: "PERFORMANCE EXHAUST SYSTEM",
      price: "280.00",
      salePrice: "230.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "SALE",
    },
    {
      id: 16,
      title: "LUXURY STEERING WHEEL COVER",
      price: "75.00",
      salePrice: "60.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "LIMITED",
    },
    {
      id: 26,
      title: "SMART CAR CONNECTIVITY HUB",
      price: "280.00",
      salePrice: "240.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "NEW",
    },
    {
      id: 27,
      title: "PERFORMANCE TUNING CHIP",
      price: "195.00",
      salePrice: "170.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "SALE",
    },
    {
      id: 28,
      title: "LED INTERIOR LIGHTING KIT",
      price: "85.00",
      salePrice: "70.00",
      image: "https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_300x300_crop_center.jpg?v=1519628616",
      hoverImage: "https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_600x600_crop_center.jpg?v=1519628616",
      badge: "HOT",
    },
  ],
};

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
const SignUpSection = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your sign-up logic here
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

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-col footer-brand">
          <div className="footer-logo">Aero<span className="dot">.</span></div>
          <p className="footer-desc">
            We are a team of designers and developers who creates high quality premium Shopify themes.
          </p>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt className="footer-icon red" /> <span>Address :</span> No 40 Baria Sreet 133/2, NewYork, USA.</li>
            <li><FaPhoneAlt className="footer-icon red" /> <span>Phone :</span> (012) 800 456 789</li>
            <li><FaEnvelope className="footer-icon red" /> <span>Email :</span> support@masstechnologist</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">MAIN MENU</div>
          <ul className="footer-links">
            <li>Home</li>
            <li>Shop</li>
            <li>Featured</li>
            <li>Layouts</li>
            <li>Pages</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">ABOUT US</div>
          <ul className="footer-links">
            <li>Contact US</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">NEED HELP</div>
          <ul className="footer-links">
            <li>Search</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Our Blog</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">ABOUT US</div>
          <ul className="footer-links">
            <li>Contact US</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          Copyright © 2024 <span className="footer-red">MassTechnologist.Com</span>. All Rights Reserved.
        </div>
        <div className="footer-social">
          <FaFacebookF />
          <FaTwitter />
          <FaPinterestP />
          <FaGooglePlusG />
          <FaInstagram />
        </div>
        <div className="footer-payments">
          <img src="https://aero-theme.myshopify.com/cdn/shop/files/payment.png?v=1613507059" alt="Visa" />
         
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <CarouselAero />
      <NavbarAero />
      <Aerotabs />
      <Mainheading />
      <CarClubSection />
      <FeaturedProducts />
      <ProductSlider />
      <ProductSection />
      <Background/>
      <BlogPostSection />
      <LogoBrandsSlider />
      <SignUpSection />
      <Footer />
    </div>
  );
}


export default App;
