import { useOnScreen } from "@lib/hooks/useOnScreen";
import { useEffect, useRef } from "react";
import Slider from "react-slick";

const coinbaseImg = "/images/brand-carousel/coinbase.svg";
const gravityImg = "/images/brand-carousel/gravityx.svg";
const huobiImg = "/images/brand-carousel/huobi.svg";
const okexImg = "/images/brand-carousel/okex.svg";
const hextrust = "/images/brand-carousel/hextrust.svg";
const gsr = "/images/brand-carousel/gsr.svg";
const fundamentalLabs = "/images/brand-carousel/fundamental-labs.svg";
const gbv = "/images/brand-carousel/gbv.svg";
const cambiumGrove = "/images/brand-carousel/cambiumgrove.svg";
const xt = " images/brand-carousel/xt.svg";
const bitmart = " images/brand-carousel/bitmart.svg";
const gate = " images/brand-carousel/gate.svg";
const pacific = "/images/brand-carousel/pacific.svg";
const newvision = "/images/brand-carousel/newvision.svg";
const baboonvc = "/images/brand-carousel/baboonvc.svg";
const alphabit = "/images/brand-carousel/alphabit.svg";
const titans = "/images/brand-carousel/titans.svg";
const mhventures = "/images/brand-carousel/mhventures.svg";
const cabinvc = "/images/brand-carousel/cabinvc.svg";
const redlineDao = "/images/brand-carousel/redline-dao.svg";
const dweb3 = "/images/brand-carousel/dweb3.svg";
const mapleblock = "/images/brand-carousel/mapleblock.svg";
const ldcapital = "/images/brand-carousel/ldcapital.svg";
const twoacrypto = "/images/brand-carousel/2acrypto.svg";
const barmy = "/images/brand-carousel/barmy.svg";
const vespertine = "/images/brand-carousel/vespertine.svg";
const htr = "/images/brand-carousel/htr.svg";
const smo = "/images/brand-carousel/smo.svg";
const avstar = "/images/brand-carousel/avstar.svg";
const pulsar = "/images/brand-carousel/pulsar.svg";
const gts = "/images/brand-carousel/gts.svg";
const qadax = "/images/brand-carousel/qadax.svg";
const lux = "/images/brand-carousel/lux.svg";
const icopantera = "/images/brand-carousel/icopantera.svg";

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
    name: "Redline DAO",
    imgSrc: redlineDao,
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
    name: "SMO",
    imgSrc: smo,
  },
  {
    name: "AV Star Capital",
    imgSrc: avstar,
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
    name: "Qadax",
    imgSrc: qadax,
  },
  {
    name: "Lux",
    imgSrc: lux,
  },
  {
    name: "Ico Panters",
    imgSrc: icopantera,
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
