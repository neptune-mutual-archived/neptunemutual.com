import Roadmap from "@components/utils/Roadmap";
import { Transition } from "@headlessui/react";
import { Fragment, useState, useRef } from "react";

import { data, points } from "@lib/data/roadmap-data";
import Slider from "react-slick";

import styles from "./style.module.css";

const POINTS_TO_SHOW = 7;
const initialSlice = {
  start: POINTS_TO_SHOW - 2,
  end: POINTS_TO_SHOW - 2 + (POINTS_TO_SHOW - 1),
};

export const RoadmapComponent = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [currentSlice, setCurrentSlice] = useState({
    start: initialSlice.start,
    end: initialSlice.end,
    data: data.slice(initialSlice.start, initialSlice.end + 1),
    points: points.slice(initialSlice.start, initialSlice.end + 1),
  });

  const sliderRef = useRef(null);
  const goTo = (i) => sliderRef?.current?.slickGoTo(i);

  const handleRoadmapIndexChange = (idx) => {
    const addIndex = POINTS_TO_SHOW - 2;
    if (
      idx === currentSlice.data.length - 1 &&
      currentSlice.data.length === POINTS_TO_SHOW &&
      data.length > currentSlice.end + 1
    ) {
      let _start = currentSlice?.start + addIndex;
      let _diff = data.length - (currentSlice.end + 1);
      let _end =
        _diff > addIndex
          ? currentSlice?.end + addIndex
          : currentSlice?.end + _diff;
      let _data = data.slice(_start, _end + 1);
      let _points = points.slice(_start, _end + 1);
      setCurrentSlice({
        start: _start,
        end: _end,
        data: _data,
        points: _points,
      });
      goTo(1);
    } else if (idx === 0 && currentSlice.start !== 0) {
      let _start = currentSlice?.start - addIndex;
      let _end = _start + (POINTS_TO_SHOW - 1);
      let _data = data.slice(_start, _end + 1);
      let _points = points.slice(_start, _end + 1);
      setCurrentSlice({
        start: _start,
        end: _end,
        data: _data,
        points: _points,
      });
      goTo(addIndex);
    } else {
      goTo(idx);
    }
  };

  const handleRoadmapChange = (idx) => {
    handleRoadmapIndexChange(idx);
  };

  const sliderSettings = {
    draggable: false,
    swipe: false,
    infinite: false,
    speed: 0,
    initialSlide: 1,
    className: "roadmap-slider",
    afterChange: (idx) => setActiveIndex(idx),
    arrows: false,
  };

  return (
    <div className={styles["mx"]}>
      <div className={styles["main-wrapper"]}>
        <p className={styles["header-title"]}>
          Our roadmap for growing the Neptune Mutual ecosystem
        </p>
        <p className={styles["header-title2"]}>
          Follow our story. Join our community
        </p>

        <Roadmap
          active={activeIndex}
          items={currentSlice.points}
          handleGoTo={(i) => handleRoadmapChange(i)}
        />
        <div className={styles["slider-wrapper"]}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {currentSlice.data.map((item, i) => {
              const {
                name,
                description,
                DescComponent,
                bulletPoints,
                Component,
              } = item;
              return (
                <Fragment key={i}>
                  <Transition show={activeIndex === i}>
                    <div className={styles["desc-panel"]}>
                      <Transition.Child
                        enter="transform transition-all ease-linear duration-300"
                        enterFrom="opacity-0 translate-y-[2rem]"
                        enterTo="opacity-100 translate-y-[0rem]"
                      >
                        <p className={styles["desc-panel-name"]}>{name}</p>
                      </Transition.Child>

                      {description && (
                        <Transition.Child
                          enter="delay-100 transform transition-all ease-linear duration-300"
                          enterFrom="opacity-0 translate-y-[2rem]"
                          enterTo="opacity-100 translate-y-[0rem]"
                        >
                          <div className={styles["panel-desc-wrapper"]}>
                            {Array.isArray(description) ? (
                              description.map((desc, idx1) => (
                                <p
                                  key={idx1}
                                  className={styles["panel-desc-text"]}
                                >
                                  {desc}
                                </p>
                              ))
                            ) : (
                              <p className={styles["panel-desc-text"]}>
                                {description}
                              </p>
                            )}
                          </div>
                        </Transition.Child>
                      )}

                      {DescComponent && (
                        <Transition.Child
                          enter="delay-100 transform transition-all ease-linear duration-300"
                          enterFrom="opacity-0 translate-y-[2rem]"
                          enterTo="opacity-100 translate-y-[0rem]"
                        >
                          <p className={styles["panel-desc-text"]}>
                            <DescComponent />
                          </p>
                        </Transition.Child>
                      )}

                      {bulletPoints && (
                        <Transition.Child
                          enter="delay-200 transform transition-all ease-linear duration-300"
                          enterFrom="opacity-0 translate-y-[2rem]"
                          enterTo="opacity-100 translate-y-[0rem]"
                        >
                          <ul className={styles["panel-list-ul"]}>
                            {bulletPoints.map((point, idx) => (
                              <li key={idx} className={styles["panel-list-li"]}>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </Transition.Child>
                      )}

                      {Component && (
                        <div className={styles["panel-component-wrapper"]}>
                          <Transition.Child
                            enter="delay-300 transform transition-all ease-linear duration-300"
                            enterFrom="opacity-0 translate-y-[2rem]"
                            enterTo="opacity-100 translate-y-[0rem]"
                          >
                            <Component />
                          </Transition.Child>
                        </div>
                      )}
                    </div>
                  </Transition>
                </Fragment>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};
