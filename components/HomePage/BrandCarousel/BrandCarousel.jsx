import { useOnScreen } from "@lib/hooks/useOnScreen";
import { useEffect, useRef } from "react";
import Slider from "react-slick";

const coinbaseImg = "/images/brand-carousel/coinbase.png";
const gravityImg = "/images/brand-carousel/gravityx.png";
const huobiImg = "/images/brand-carousel/huobi.png";
const okexImg = "/images/brand-carousel/okex.png";
const hextrust = "/images/brand-carousel/hextrust.png";
const gsr = "/images/brand-carousel/gsr.png";
const fundamentalLabs = "/images/brand-carousel/fundamental-labs.png";
const gbv = "/images/brand-carousel/gbv.png";
const cambiumGrove = "/images/brand-carousel/cambiumgrove.png";
const pacific = "/images/brand-carousel/pacific.png";
const newvision = "/images/brand-carousel/newvision.png";
const baboonvc = "/images/brand-carousel/baboonvc.png";
const alphabit = "/images/brand-carousel/alphabit.png";

import styles from "./style.module.scss";

const carouselItems = [
  {
    name: "Coinbase Ventures",
    imgSrc: coinbaseImg,
  },
  {
    name: "Huobi Ventures",
    imgSrc: huobiImg,
  },
  {
    name: "Okex",
    imgSrc: okexImg,
  },
  {
    name: "GravityX",
    imgSrc: gravityImg,
  },
  {
    name: "Hex Trust",
    imgSrc: hextrust,
  },
  {
    name: "GSR",
    imgSrc: gsr,
  },
  {
    name: "Fundamental Labs",
    imgSrc: fundamentalLabs,
  },
  {
    name: "GBV",
    imgSrc: gbv,
  },
  {
    name: "Cambium Grove",
    imgSrc: cambiumGrove,
  },
  {
    name: "Pacific",
    imgSrc: pacific,
  },
  {
    name: "New Vision",
    imgSrc: newvision,
  },
  {
    name: "Baboon VC",
    imgSrc: baboonvc,
  },
  {
    name: "Alphabit",
    imgSrc: alphabit,
  },
];

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 4,
  initialSlide: 0,
  speed: 500,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
  // centerMode: true,
  // centerPadding: "60px",
  className: "brand-carousel",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        initialSlide: 0,
        centerMode: false,
      },
    },
  ],
};

export const BrandCarouselComponent = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const onScreen = useOnScreen(containerRef);

  useEffect(() => {
    sliderRef.current.slickPause();
  }, []);

  useEffect(() => {
    if (onScreen) {
      sliderRef.current.slickPlay();
      return;
    }

    sliderRef.current.slickPause();
  }, [onScreen]);

  return (
    <div className={styles.brand_container} ref={containerRef}>
      <Slider
        ref={sliderRef}
        {...{
          ...settings,
          afterChange: () => console.log(sliderRef.current),
        }}
      >
        {carouselItems.map((item, idx) => {
          return (
            <div key={idx} className={styles.image_container}>
              <img src={item.imgSrc} alt={item.name + " Logo"} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
