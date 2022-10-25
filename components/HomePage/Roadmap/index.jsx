import { points } from "@lib/data/roadmap-data";
import { classNames } from "@lib/utils/classNames";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import styles from "./style.module.scss";
import { ContentSlider } from "./ContentSlider";
import { Trans } from "@lingui/macro";
import SliderRightIcon from "@utils/icons/SliderRightIcon";
import SliderLeftIcon from "@utils/icons/SliderLeftIcon";
import { logButtonClick } from "@analytics/index";

const currentIndex = points.findIndex((x) => x.highlight);

const getVW = () => {
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
};

export const Roadmap = () => {
  const [selected, setSelected] = useState(currentIndex);
  const [shouldSetInitial, setShouldSetInitial] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(currentIndex - 5);

  const sliderRef = useRef(null);

  useEffect(() => {
    // Get viewport width

    // Change initial slide to show the current item
    // Cannot use initialSlide setting in react-slick
    if (shouldSetInitial && sliderRef.current) {
      if (getVW() < 768) {
        sliderRef.current.slickGoTo(currentIndex - 1);
        return;
      }
    }
  }, [shouldSetInitial]);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    initialSlide: currentIndex - 5,
    slidesToShow: 7,
    slidesToScroll: 3,
    afterChange: (index) => setSliderIndex(index),
    onInit: () => setShouldSetInitial(true),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          swipeToSlide: false,
          swipe: false,
          touchMove: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const onNext = () => {
    logButtonClick(
      "Roadmap Slider Right",
      "Roadmap Slider Right button clicked"
    );
    sliderRef?.current?.slickNext();
  };
  const onPrev = () => {
    logButtonClick("Roadmap Slider Left", "Roadmap Slider Left button clicked");
    sliderRef?.current?.slickPrev();
  };
  const handleContentSlideUpdate = (_idx) => {
    let toIdx = _idx > 0 ? _idx - 1 : _idx;

    if (getVW() < 768) {
      sliderRef.current.slickGoTo(toIdx);
      setSelected(_idx);
      return;
    }

    // sliderRef.current.slickGoTo(_idx);
    setSelected(_idx);
  };

  let passedCurrent = false;

  return (
    <div
      className={classNames(
        "section_border_container",
        styles.section_container
      )}
    >
      <div className={classNames("section_horizontal_container")}>
        <h2 className={styles.title}>
          <Trans>Our Roadmap for Growing the Neptune Mutual Ecosystem</Trans>
        </h2>
        <p className={styles.subtitle}>
          <Trans>Follow our progress. Join our community.</Trans>
        </p>

        <div className={styles.slider_container}>
          <button
            disabled={sliderIndex <= 0}
            className={
              sliderIndex <= 0
                ? classNames(styles.nav_btn, "cursor-not-allowed")
                : styles.nav_btn
            }
            onClick={onPrev}
            aria-label="Scroll to View Previous Items"
          >
            <SliderLeftIcon width={24} />
          </button>

          <div className={styles.slider}>
            <div className={styles.line}></div>
            <Slider {...settings} ref={sliderRef}>
              {points.map((point, idx) => {
                const isCurrent = point.highlight === true;
                const isActive = selected === idx;

                if (isCurrent) {
                  passedCurrent = true;
                }

                const isFuture = passedCurrent && !isCurrent;

                const onSelect = () => {
                  logButtonClick(
                    "Roadmap Item",
                    `\`${point.name}\` item clicked in the Roadmap component`,
                    {
                      index: idx,
                      isCurrent: isCurrent,
                    }
                  );
                  setSelected(idx);
                };

                return (
                  <div key={point.name}>
                    <button
                      onClick={onSelect}
                      className={classNames(
                        styles.dot_wrapper,
                        isActive && styles.active,
                        isFuture && styles.future
                      )}
                    >
                      <div className={styles.dot}>
                        {isCurrent && (
                          <>
                            <div className={styles["animate-circle1"]}></div>
                            <div className={styles["animate-circle2"]}></div>
                            <div className={styles["animate-circle3"]}></div>
                          </>
                        )}
                      </div>
                      <p className={styles.dot_name}>{point.name}</p>
                    </button>
                  </div>
                );
              })}
            </Slider>
          </div>

          <button
            disabled={
              points.length - sliderIndex <=
              sliderRef?.current?.props?.slidesToShow
            }
            className={
              points.length - sliderIndex <=
              sliderRef?.current?.props?.slidesToShow
                ? classNames(styles.nav_btn, "cursor-not-allowed")
                : styles.nav_btn
            }
            onClick={onNext}
            aria-label="Scroll to View Next Items"
          >
            <SliderRightIcon width={24} />
          </button>
        </div>

        <ContentSlider
          activeIndex={selected}
          onContentSlideUpdate={handleContentSlideUpdate}
        />
      </div>
    </div>
  );
};
