import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import ecosystemData from "@lib/data/ecosystem-data";

import styles from "./style.module.css";
import styles2 from "./style.module.scss";
import { Trans } from "@lingui/macro";

const topLeftImg = "/images/ecosystem/top-left.png";
const bottomLeftImg = "/images/ecosystem/bottom-left.png";
const bottomRightImg = "/images/ecosystem/bottom-right.png";

export const NeptuneEcosystemComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    function startEffects() {
      const wrapper = ref.current.querySelector(".pin-wrapper");
      const points = ref.current.querySelector(
        `.${styles2[`points-wrapper-inner`]}`
      );
      const titles = ref.current.querySelector(
        `.${styles2[`titles-wrapper-inner`]}`
      );
      const mobile = ref.current.querySelector(`.mobile-wrapper-inner`);

      const point1 = points.children[0];
      const point2 = points.children[1];
      const point3 = points.children[2];

      let heights = {
        pointsInner: points?.offsetHeight,
        pointsWrapper: points?.parentElement?.offsetHeight,
        titlesInner: titles?.offsetHeight,
        mobileInner: mobile?.offsetHeight,
        mobileWrapper: mobile?.parentElement?.offsetHeight,
      };

      let totalHeights = 0;
      for (let i = 0; i < points.childElementCount; i++) {
        let elHeight = points.children[i].offsetHeight;
        heights[`points-child-${i + 1}`] = elHeight;
        // points.children[i].style.height = `${maxPointHeight}px`;
        totalHeights += elHeight;
      }
      heights["points-gap"] =
        (heights.pointsInner - totalHeights) / (points.childElementCount - 1);

      totalHeights = 0;
      let maxTitleHeight = Math.max(
        titles.children[0].offsetHeight,
        titles.children[1].offsetHeight,
        titles.children[2].offsetHeight
      );
      for (let i = 0; i < titles.childElementCount; i++) {
        heights[`titles-child-${i + 1}`] = maxTitleHeight;
        // titles.children[i].style.height = `${maxTitleHeight}px`;
        totalHeights += maxTitleHeight;
      }
      heights["titlesInner"] = titles?.offsetHeight;
      heights["titles-gap"] =
        (heights.titlesInner - totalHeights) / (titles.childElementCount - 1);

      // console.log({ ...heights });

      function registerScroll() {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.matchMedia({
          "(max-width: 1023px)": function () {
            var t1 = gsap.timeline({
              scrollTrigger: {
                trigger: wrapper,
                scrub: true,
                pin: true,
                start: "top top",
                end: "+=300%",
              },
            });

            t1.to(mobile, {
              translateY: `-${
                heights.mobileInner - heights.mobileWrapper + 40
              }px`,
            });
          },
          "(min-width: 1024px)": function () {
            var t1 = gsap.timeline({
              scrollTrigger: {
                trigger: wrapper,
                scrub: true,
                pin: true,
                start: "top top",
                end: "+=300%",
              },
            });

            t1.to(points, {
              translateY: `-${
                heights["points-child-1"] > heights["pointsWrapper"]
                  ? heights["points-child-1"] - heights["pointsWrapper"] + 20
                  : 20
              }px`,
            })
              .to(titles, {
                duration: 0.5,
                translateY: `-${
                  heights["titles-child-1"] + heights["titles-gap"]
                }px`,
              })
              .fromTo(
                point1,
                {
                  opacity: 1,
                },
                {
                  opacity: 0,
                },
                "<"
              )
              .fromTo(
                point2,
                {
                  opacity: 0,
                },
                {
                  opacity: 1,
                },
                "<"
              )
              .to(
                points,
                {
                  translateY: `-${
                    heights["points-child-1"] + heights["points-gap"]
                  }px`,
                },
                "<"
              )
              .to(points, {
                translateY: `-${
                  heights["points-child-2"] > heights["pointsWrapper"]
                    ? heights["points-child-1"] +
                      heights["points-gap"] +
                      heights["points-child-2"] -
                      heights["pointsWrapper"] +
                      20
                    : heights["points-child-1"] + heights["points-gap"] + 20
                }px`,
              })
              .to(titles, {
                duration: 0.5,
                translateY: `-${
                  heights["titles-child-1"] +
                  heights["titles-gap"] +
                  heights["titles-child-2"] +
                  heights["titles-gap"]
                }px`,
              })
              .fromTo(
                point2,
                {
                  opacity: 1,
                },
                {
                  opacity: 0,
                },
                "<"
              )
              .fromTo(
                point3,
                {
                  opacity: 0,
                },
                {
                  opacity: 1,
                },
                "<"
              )
              .to(
                points,
                {
                  translateY: `-${
                    heights["points-child-1"] +
                    heights["points-gap"] +
                    heights["points-child-2"] +
                    heights["points-gap"] +
                    (heights["points-child-3"] > heights["pointsWrapper"]
                      ? 20
                      : 0)
                  }px`,
                },
                "<"
              )
              .to(points, {
                translateY: `-${
                  heights["points-child-3"] > heights["pointsWrapper"]
                    ? heights["pointsInner"] - heights["pointsWrapper"] + 40
                    : heights["points-child-1"] +
                      heights["points-gap"] +
                      heights["points-child-2"] +
                      heights["points-gap"]
                }px`,
              });
          },
        });
      }
      registerScroll();

      window.addEventListener("resize", () => {
        ScrollTrigger.refresh();
      });
    }

    setTimeout(() => {
      startEffects();
    }, 500);
  }, []);

  return (
    <div ref={ref}>
      <div className={`pin-wrapper ${styles["main-wrapper"]}`}>
        <div className={styles["top-left-img"]}>
          <img src={topLeftImg} alt="Vector" />
        </div>
        <div className={styles["bottom-left-img"]}>
          <img src={bottomLeftImg} alt="Vector" />
        </div>
        <div className={styles["bottom-left-img2"]}>
          <img src={bottomLeftImg} alt="Vector" />
        </div>
        <div className={styles["bottom-right-img"]}>
          <img src={bottomRightImg} alt="Vector" />
        </div>
        <div className={styles["desc-wrapper"]}>
          <div className={styles.full_height}>
            <h1 className={styles["title"]}>
              <Trans>Neptune Mutual Ecosystem</Trans>
            </h1>

            <div className={`${styles["titles-wrapper"]} ${styles.desktop}`}>
              <div className={styles2[`titles-wrapper-inner`]}>
                {ecosystemData.map(({ name, id }) => (
                  <h2
                    key={id}
                    className={`${styles[`title-style${id}`]} ${
                      styles["title2"]
                    }`}
                  >
                    {name}
                  </h2>
                ))}
              </div>
            </div>
            <div className={`${styles["mobile-wrapper"]} ${styles.mobile}`}>
              <div className="mobile-wrapper-inner">
                {ecosystemData.map(({ id, name, subData }) => (
                  <div key={id}>
                    <h2
                      className={`${styles[`title-style${id}`]} ${
                        styles["title2"]
                      }`}
                    >
                      {name}
                    </h2>
                    <div className={styles["flex-col-10"]}>
                      {subData.map(({ name, description }, idx) => (
                        <div key={idx}>
                          <h4
                            className={`${styles[`title-style${id}`]} ${
                              styles["title-style"]
                            }`}
                          >
                            {name}
                          </h4>
                          <p className={styles["point-desc"]}>{description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles["points-wrapper"]} ${styles.desktop}`}>
            <div className={styles2[`points-wrapper-inner`]}>
              {ecosystemData.map(({ id, subData }) => (
                <div key={id} className={styles["flex-col-10"]}>
                  {subData.map(({ name, description }, idx) => (
                    <div key={idx}>
                      <p
                        className={`${styles[`title-style${id}`]} ${
                          styles["title-style"]
                        }`}
                      >
                        {name}
                      </p>
                      <p className={styles["point-desc"]}>{description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
