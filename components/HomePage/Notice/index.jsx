import { logButtonClick } from "@analytics/index";
import CloseIcon from "@components/icons/CloseIcon";
import { classNames } from "@lib/utils/classNames";
import { useCookies } from "context/cookies";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useState } from "react";
import styles from "./index.module.scss";

export const Notice = ({
  text,
  linkText = "Read More",
  bgColor = "bg-[#3770E1]",
  link = "#",
}) => {
  const [show, setShow] = useState(true);
  const { accepted } = useCookies();

  if (!show) {
    return null;
  }

  const handleLinkClick = () => {
    accepted &&
      logButtonClick("Banner link", "Banner press release link", {
        linkHref: link,
      });
  };

  const handleBannerClose = () => {
    accepted && logButtonClick("Banner close", "Close website top banner");

    setShow((prev) => !prev);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  };

  return (
    <div className={classNames(styles.notice_container, bgColor)}>
      <div className={styles.notice_content}>
        <div className={styles.text_wrapper}>
          <p>
            <span className={styles.text}>{text}</span>
            {"  "}
            <a
              className="underline"
              href={link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              onClick={handleLinkClick}
            >
              {linkText}
            </a>
          </p>
        </div>
        <button
          className={styles.close_icon}
          onClick={handleBannerClose}
          aria-label="Button to Close Notice"
        >
          <CloseIcon width="14" height="14" fill="white" />
        </button>
      </div>
    </div>
  );
};
