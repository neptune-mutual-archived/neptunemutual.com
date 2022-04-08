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
const xt = " images/brand-carousel/xt.png";
const bitmart = " images/brand-carousel/bitmart.png";
const gate = " images/brand-carousel/gate.png";
const pacific = "/images/brand-carousel/pacific.png";
const newvision = "/images/brand-carousel/newvision.png";
const baboonvc = "/images/brand-carousel/baboonvc.png";
const alphabit = "/images/brand-carousel/alphabit.png";
const titans = "/images/brand-carousel/titans.png";
const mhventures = "/images/brand-carousel/mhventures.png";
const cabinvc = "/images/brand-carousel/cabinvc.png";
const dweb3 = "/images/brand-carousel/dweb3.png";
const mapleblock = "/images/brand-carousel/mapleblock.png";
const ldcapital = "/images/brand-carousel/Idcapital.png";
const twoacrypto = "/images/brand-carousel/2acrypto.png";
const barmy = "/images/brand-carousel/barmy.png";
const vespertine = "/images/brand-carousel/vespertine.png";
const htr = "/images/brand-carousel/htr.png";
const pulsar = "/images/brand-carousel/pulsar.png";
const gts = "/images/brand-carousel/gts.png";
const icopantera = "/images/brand-carousel/icopantera.png";

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
    name: "XT.com",
    imgSrc: xt,
  },
  {
    name: "BitMart",
    imgSrc: bitmart,
  },
  {
    name: "Gate.io",
    imgSrc: gate,
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
    name: "Pacific Century Group",
    imgSrc: pacific,
  },
  {
    name: "Titans",
    imgSrc: titans,
  },
  {
    name: "MH Ventures",
    imgSrc: mhventures,
  },
  {
    name: "Cabin VC",
    imgSrc: cabinvc,
  },
  {
    name: "DWEB3",
    imgSrc: dweb3,
  },
  {
    name: "Alphabit",
    imgSrc: alphabit,
  },
  {
    name: "Maple Block",
    imgSrc: mapleblock,
  },
  {
    name: "LD Capital",
    imgSrc: ldcapital,
  },
  {
    name: "2A crypto",
    imgSrc: twoacrypto,
  },
  {
    name: "Barmy",
    imgSrc: barmy,
  },
  {
    name: "Vespertine Capital",
    imgSrc: vespertine,
  },
  {
    name: "Htr Group",
    imgSrc: htr,
  },
  {
    name: "Pulsar",
    imgSrc: pulsar,
  },
  {
    name: "Gts Ventures",
    imgSrc: gts,
  },
  {
    name: "Ico Panters",
    imgSrc: icopantera,
  },
  {
    name: "Alphabit",
    imgSrc: alphabit,
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
