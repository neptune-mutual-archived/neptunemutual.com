import styles from "./style.module.scss";
import { Trans } from "@lingui/macro";
import { classNames } from "@lib/utils/classNames.js";

export const LandingPage = () => {
  return (
    <div
      className={classNames(
        "section_border_container hero",
        styles.hero_container
      )}
    >
      <div className={styles.circle}></div>
      <div className={"section_horizontal_container"}>
        <div className="relative w-full pb-24">
          <div className={styles["heading-container"]}>
            <h1 id="header-text" className={styles.h2}>
              <Trans>
                <p className={styles.line1}>
                  <span>Reduce</span>
                </p>{" "}
                <p className={styles.line2}>
                  <span>Your</span> <span>Exposure</span> <span>to</span>
                </p>{" "}
                <p className={styles.line3}>
                  <span>Crypto</span> <span>Market</span> <span>Risks</span>
                </p>
              </Trans>
            </h1>
          </div>
          <p id="story" className={styles["sub-headline"]}>
            <Trans>
              Choose a cover pool, select its duration, and enter how much you
              need to cover. Instantly receive your claims payout in stablecoin
              after incident resolution.
            </Trans>
          </p>

          <a
            href="https://www.figma.com/proto/nhgU4M0cjW6tKSg50diZyB/New-Prototype"
            rel="noreferrer"
            target="_blank"
            className={styles.cta}
            aria-label="App Prototype"
          >
            <Trans>View App Prototype</Trans>
          </a>
        </div>
      </div>
    </div>
  );
};
