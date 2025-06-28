import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

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

export default CarouselAero;
