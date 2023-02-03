import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled, { css } from "styled-components";
import Slide from "./Slide";

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
    padding-top: 0.75rem /* 12px */;
    padding-bottom: 0.75rem /* 12px */;
    ${(props) =>
      props.left
        ? css`
            left: 0;
          `
        : css`
            right: 0;
          `};
    width: 50px;
    &:hover {
      width: 60px;
    }
  `;

  const SvgWrapper = styled.svg`
    height: 40px;
    width: 100%;
    color: white;
  `;
  const customLeftArrow = (
    <CustomArrow left>
      <SvgWrapper
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </SvgWrapper>
    </CustomArrow>
  );
  const customRightArrow = (
    <CustomArrow className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svgWrapper
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svgWrapper>
    </CustomArrow>
  );

  return (
    <div className="mb-8">
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="px-4"
      >
        {dataLoaded &&
          featuredPromotions.map((promo, index) => <Slide data={promo} />)}
      </Carousel>
    </div>
  );
};

export default FeaturedPromos;
