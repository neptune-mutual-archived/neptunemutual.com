import { Fragment, useEffect, useRef } from "react";
import { data } from "@lib/data/roadmap-data";

import styles from "./style.module.scss";
import Slider from "react-slick";

export const ContentSlider = ({ activeIndex, onContentSlideUpdate }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeIndex,
    afterChange: (idx) => onContentSlideUpdate(idx),
    arrows: false,
  };

  useEffect(() => {
    sliderRef.current.slickGoTo(activeIndex);
  }, [activeIndex]);

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, i) => {
          const { name, description, DescComponent, bulletPoints, Component } =
            item;

          const isActive = activeIndex === i;

          return (
            <Fragment key={i}>
              <div
                className={styles.container}
                tabIndex={isActive ? undefined : "-1"}
              >
                <h3 className={styles.title}>{name}</h3>

                {description && (
                  <div className={styles.desc_wrapper}>
                    {Array.isArray(description) ? (
                      description.map((desc, idx1) => (
                        <p key={idx1} className={styles.desc_text}>
                          {desc}
                        </p>
                      ))
                    ) : (
                      <p className={styles.desc_text}>{description}</p>
                    )}
                  </div>
                )}

                {DescComponent && (
                  <p className={styles.desc_text}>
                    <DescComponent />
                  </p>
                )}

                {bulletPoints && (
                  <ul className={styles.ul}>
                    {bulletPoints.map((point, idx) => (
                      <li key={idx}>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {Component && (
                  <div className={styles.component_wrapper}>
                    <Component />
                  </div>
                )}
              </div>
            </Fragment>
          );
        })}
      </Slider>
    </div>
  );
};
