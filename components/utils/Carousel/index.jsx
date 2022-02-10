import { classNames } from "@lib/utils/classNames";
import { Fragment, useRef } from "react";
import Slider from "react-slick";

import styles from "./style.module.css";

const Carousel = ({
  children,
  settings,
  navElement,
  navElementEnd,
  className,
}) => {
  const sliderRef = useRef();

  const handlePrev = () => sliderRef?.current?.slickPrev();
  const handleNext = () => sliderRef?.current?.slickNext();
  const handleGoto = (i) => sliderRef?.current?.slickGoTo(i);

  let defaultSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    speed: 200,
  };

  if (settings) defaultSettings = { ...defaultSettings, ...settings };

  const RenderNavElement = () => (
    <>
      {navElement && typeof navElement === "function"
        ? navElement({ prev: handlePrev, next: handleNext, goTo: handleGoto })
        : navElement}
    </>
  );

  return (
    <div className={classNames(styles["p-relative"], className)}>
      {!navElementEnd && <RenderNavElement />}
      <div className={styles["slider-wrapper"]}>
        <Slider ref={sliderRef} {...defaultSettings}>
          {children instanceof Function
            ? children({
                prev: handlePrev,
                next: handleNext,
                goTo: handleGoto,
              }).map((child, i) => <Fragment key={i}>{child}</Fragment>)
            : Array.isArray(children) &&
              children.map((child, i) => <Fragment key={i}>{child}</Fragment>)}
        </Slider>
      </div>
      {navElementEnd && <RenderNavElement />}
    </div>
  );
};

export default Carousel;
