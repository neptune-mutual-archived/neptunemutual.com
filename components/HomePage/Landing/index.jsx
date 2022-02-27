import gsap from "gsap";
import SplitText from "../../utils/Split3.min.js";
import { useEffect } from "react";

import styles from "./style.module.scss";
import { Trans } from "@lingui/macro";

export const LandingPage = () => {
  useEffect(() => {
    console.log("loaded");
    gsap.registerPlugin(SplitText);

    const animate = (el, stagger) => {
      const timeline = gsap.timeline();

      const text = new SplitText(el, {
        type: "words",
      });

      timeline.from(text.words, {
        duration: 5,
        opacity: 0.5,
        ease: "wiggle",
        stagger,
      });
    };

    // animate("#header-text", 0.04);
  }, []);

  return (
    <div className={"section_border_container hero"}>
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
