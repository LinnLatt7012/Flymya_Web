import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled, { css } from "styled-components";
import Slide from "./Slide";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Container } from "@mui/system";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const FeaturedPromos = () => {
  const [featuredPromotions, setFeaturedPromotions] = useState([
    { image: "/image 4.png" },
    { image: "/image 5.png" },
    { image: "/image 6.png" },
    { image: "/image 5.png" },
    { image: "/image 6.png" },
    { image: "/image 4.png" },
  ]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setDataLoaded(true);
  }, []);

  const CustomArrow = styled.div`
    border-radius: 9999px;
    position: absolute;
    color: black;
    transition: width 300ms ease;
    cursor: pointer;
    ${(props) =>
      props.left
        ? css`
            left: 0;
          `
        : css`
            right: 0;
          `};
  `;

  const customLeftArrow = (
    <CustomArrow left>
      <KeyboardArrowLeftIcon sx={{ fontSize: 35, color: "#1FB8F1" }} />
    </CustomArrow>
  );
  const customRightArrow = (
    <CustomArrow>
      <KeyboardArrowRightIcon sx={{ fontSize: 35, color: "#1FB8F1 " }} />
    </CustomArrow>
  );

  return (
    <Container>
      <div sx={{ width: "100%", margin: "20px auto" }}>
        <Carousel
          className="carouselClass"
          infinite
          customLeftArrow={customLeftArrow}
          customRightArrow={customRightArrow}
          responsive={responsive}
          sliderClass="sliderClass"
          itemClass="itemClass"
        >
          {dataLoaded &&
            featuredPromotions.map((promo, index) => <Slide data={promo} />)}
        </Carousel>
      </div>
    </Container>
  );
};

export default FeaturedPromos;
