import ChevronLeftIcon from "@utils/icons/ChevronLeftIcon";
import ChevronRightIcon from "@utils/icons/ChevronRightIcon";

import styles from "./style.module.css";

const Roadmap = ({ items, handleGoTo, active }) => {
  const handleItemClick = (idx) => {
    if (handleGoTo) handleGoTo(idx);
  };

  const handleArrowClick = (dir) => {
    if (dir === "prev") {
      if (active > 0) {
        if (handleGoTo) handleGoTo(active - 1);
      }
    } else {
      if (active < items.length - 1) {
        if (handleGoTo) handleGoTo(active + 1);
      }
    }
  };

  return (
    <div className={styles["main-wrapper"]}>
      {!(active === 0) && (
        <div
          className={`${styles["fading-div"]} ${styles["fading-div-left"]}`}
        ></div>
      )}
      {!(active === items.length - 1) && (
        <div
          className={`${styles["fading-div"]} ${styles["fading-div-right"]}`}
        ></div>
      )}
      <div className={styles["wrapper"]}>
        <div
          className={`${styles["arrow-wrapper"]} ${
            active === 0 ? styles["arrow-disable"] : styles["arrow-enable"]
          }`}
          onClick={() => handleArrowClick("prev")}
        >
          <ChevronLeftIcon className={styles["arrow-icon"]} />
        </div>
        <div className={styles["items-wrapper"]}>
          <div className={styles["items-wrapper2"]}>
            {items.map(({ name, highlight }, index) => (
              <div key={index} className={styles["p-relative"]}>
                <div
                  className={`${styles["item-div"]} ${
                    index === active
                      ? styles["item-div-active"]
                      : styles["item-div-normal"]
                  } `}
                  onClick={() => handleItemClick(index)}
                ></div>
                <div
                  className={`${styles["item-name-div"]} ${
                    index === active
                      ? styles["item-name-active"]
                      : styles["item-name-normal"]
                  }`}
                >
                  <p className={styles["item-name"]}>{name}</p>
                </div>

                {highlight === true && (
                  <>
                    <div className={styles["animate-circle1"]}></div>
                    <div className={styles["animate-circle2"]}></div>
                    <div className={styles["animate-circle3"]}></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${styles["arrow-wrapper"]} ${
            active === items.length - 1
              ? styles["arrow-disable"]
              : styles["arrow-enable"]
          }`}
          onClick={() => handleArrowClick("next")}
        >
          <ChevronRightIcon className={styles["arrow-icon"]} />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
