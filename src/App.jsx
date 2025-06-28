import React from "react";

// Import Swiper styles that were previously in App.jsx but are component-specific
// It's generally better to import these directly in the components that use them,
// but if they are global, they can remain here or move to main.jsx/index.jsx
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination"; // Added as ProductSlider uses it

// Import extracted components
import NavbarAero from "./components/NavbarAero";
import CarouselAero from "./components/CarouselAero";
import Aerotabs from "./components/Aerotabs";
import Mainheading from "./components/Mainheading";
import CarClubSection from "./components/CarClubSection";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductSlider from "./components/ProductSlider";
import ProductSection from "./components/ProductSection";
import Background from "./components/Background";
import BlogPostSection from "./components/BlogPostSection";
import LogoBrandsSlider from "./components/LogoBrandsSlider";
import SignUpSection from "./components/SignUpSection";
import Footer from "./components/Footer";

// Note: The global 'products', 'testimonials', and 'productCategories' constants
// have been moved to 'src/data.js' and are imported by the components that need them.

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
