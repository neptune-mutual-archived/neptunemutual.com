import { useState } from "react";
import ChevronLeftIcon from "@utils/icons/ChevronLeftIcon";
import ChevronRightIcon from "@utils/icons/ChevronRightIcon";
import Carousel from "@components/utils/Carousel";
import { teamMembers } from "@lib/data/team-data";
import { TeamMemberDetails } from "@components/HomePage/OurTeam/TeamMemberDetails";

import styles from "./style.module.scss";
import { Trans } from "@lingui/macro";
import { logButtonClick, logGesture } from "@analytics/index";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  className: "teams-carousel",
  initialSlide: 0,
  swipeToSlide: true,
};

export const OurTeamComponent = () => {
  const [activeIdx, setActiveIdx] = useState(settings.initialSlide);

  return (
    <div className={"section_border_container"}>
      <div className={"section_horizontal_container"}>
        <div className={styles.container}>
          <div className={styles["header-wrapper"]}>
            <h2 className={styles["header-title"]}>
              <Trans>Our Team</Trans>
            </h2>
            <p className={styles["header-desc"]}>
              <Trans>
                We are a global and dynamic team with a mission to create a
                reliable, fast, and effective platform that protects digital
                assets.
              </Trans>
            </p>
          </div>

          <div className={styles.carousel_container}>
            <Carousel
              settings={{
                ...settings,
                afterChange: (idx) => setActiveIdx(idx || 0),
                onSwipe: (i) => {
                  logGesture(
                    `Team Slider ${i === "left" ? "Left" : "Right"}`,
                    `${i === "left" ? "Left" : "Right"} swipe in team carousel`
                  );
                },
              }}
              navElement={(props) => (
                <>
                  <TeamMemberDetails idx={activeIdx} />
                  <NavElement {...props} />
                </>
              )}
              navElementEnd
            >
              {teamMembers.map(({ imageSrc, nameInvariant }, idx) => (
                <div key={idx}>
                  {imageSrc ? (
                    <img src={imageSrc} alt={nameInvariant} />
                  ) : (
                    <div>
                      <div className={styles["placeholder-image"]}></div>
                    </div>
                  )}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavElement = ({ prev, next }) => {
  return (
    <>
      <div className={styles.nav_wrapper}>
        <button
          className={styles["nav-btn"]}
          onClick={() => {
            logButtonClick(
              "Team Slider Left button",
              "Left team member arrow button clicked"
            );
            prev();
          }}
          aria-label="Left Team Member Button"
        >
          <ChevronLeftIcon className={styles["nav-btn-icon"]} />
        </button>
        <button
          className={styles["nav-btn"]}
          onClick={() => {
            logButtonClick(
              "Team Slider Right button",
              "Right team member arrow button clicked"
            );
            next();
          }}
          aria-label="Right Team Member Button"
        >
          <ChevronRightIcon className={styles["nav-btn-icon"]} />
        </button>
      </div>
    </>
  );
};
