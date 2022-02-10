import gsap from "gsap";
import SplitText from "../../utils/Split3.min.js";
import { useEffect } from "react";
import Link from "next/link";

import styles from "./style.module.scss";
import { Trans } from "@lingui/macro";

export const LandingPage = () => {
  useEffect(() => {
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

    animate("#header-text", 0.04);
    animate("#story", 0.05);
  }, []);

  return (
    <div className={"section_border_container"}>
      <div className={"section_horizontal_container"}>
        <div className="relative w-full pb-24">
          <div className={styles["heading-container"]}>
            <h1 id="header-text" className={styles.h2}>
              <Trans>
                <span>Reduce</span> <span>Your Exposure to</span>{" "}
                <span>Crypto Market Risks</span>
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

          <Link href="https://www.figma.com/proto/nhgU4M0cjW6tKSg50diZyB/New-Prototype?node-id=1%3A742&starting-point-node-id=1%3A742">
            <a target="_blank" className={styles.cta}>
              <Trans>View App Prototype</Trans>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
