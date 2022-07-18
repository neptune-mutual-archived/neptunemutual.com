import { Trans } from "@lingui/macro";
import TwitterIcon from "@utils/icons/TwitterIcon";
import GithubIcon from "@utils/icons/GithubIcon";
import TelegramIcon from "@utils/icons/TelegramIcon";
import LinkedinIcon from "@utils/icons/LinkedinIcon";
import BlogIcon from "@utils/icons/BlogIcon";
import RedditIcon from "@utils/icons/RedditIcon";
import { SelectLanguage } from "@components/common/SelectLanguage";
import { social } from "@components/utils/social";
import styles from "./style.module.css";
import { DiscordIcon } from "@utils/icons/DiscordIcon";
import YoutubeIcon from "@utils/icons/YoutubeIcon";

const neptune = "/images/industry/neptune.png";
const logo = "/logos/neptune-mutual-full-inverse.png";

export const Footer = () => {
  return (
    <div data-scroll-section className={styles["footer-wrapper"]}>
      <div
        className={`section_border_container border_none ${styles["planet-image"]}`}
      >
        <img src={neptune} alt="Illustration of Neptune Planet" />
      </div>

      <div
        className={`section_border_container border_none ${styles["stay-tuned-wrapper"]}`}
      >
        <div className="section_horizontal_container">
          <div className={styles["select-lang"]}>
            <SelectLanguage lightMode={true} />
          </div>

          <div className={styles["stay-tuned-div"]}>
            <div className={styles["neptune-image"]}>
              <img src={logo} alt="Neptune Mutual Logo" />
            </div>
            <h2 className={styles["stay-tuned-text"]}>
              <Trans>Let&#x2019;s Connect</Trans>
            </h2>
            <p className={styles["stay-tuned-desc"]}>
              <Trans>
                Don&apos;t be a stranger! Join and interact with us on our
                growing social media communities. Stay up to date on our latest
                developments and progress.
              </Trans>
            </p>
            <div className={styles["icons-wrapper"]}>
              <a
                href={social.twitter}
                target={"_blank"}
                rel="noreferrer nofollow"
                aria-label="Twitter"
              >
                <TwitterIcon className={styles["twitter-icon"]} />
              </a>
              <a
                href={social.reddit}
                target={"_blank"}
                rel="noreferrer nofollow"
                aria-label="Reddit"
              >
                <RedditIcon className={styles["icon-class"]} />
              </a>
              <a
                href={social.telegram}
                target={"_blank"}
                rel="noreferrer nofollow"
                aria-label="Telegram"
              >
                <TelegramIcon className={styles["icon-class"]} />
              </a>
              <a
                href={social.linkedin}
                target={"_blank"}
                rel="noreferrer nofollow"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className={styles["icon-class"]} />
              </a>
              <a
                href={social.blog}
                target={"_blank"}
                rel="noreferrer nofollow"
                aria-label="Blog"
              >
                <BlogIcon className={styles["icon-class"]} />
              </a>
              <a
                href={social.github}
                target={"_blank"}
                rel="noreferrer nofollow"
                aria-label="Github"
              >
                <GithubIcon className={styles["icon-class"]} />
              </a>
              <a
                href={social.discord}
                target={"_blank"}
                rel="noreferrer nofollow"
                aria-label="Discord"
              >
                <DiscordIcon className={styles["github-icon"]} />
              </a>
              <a
                href={social.youtube}
                target={"_blank"}
                rel="noreferrer nofollow"
                aria-label="Youtube"
              >
                <YoutubeIcon className={styles["github-icon"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["link-wrapper-1"]}>
        <div className="section_border_container border_none">
          <div className={styles["link-wrapper-2"]}>
            <div className={styles["link"]}>
              <a
                rel="noreferrer nofollow"
                href={social.medium}
                target="_blank"
                aria-label="Visit Our Medium Blog"
              >
                <Trans>Blog</Trans>
              </a>
            </div>
            <div className={styles["link"]}>
              <a
                href="https://forms.clickup.com/f/6vvfh-4624/UVJHEDAS2T3P6DCFJM"
                rel="noreferrer nofollow"
                target="_self"
                aria-label="Contact Us"
              >
                <Trans>Contact</Trans>
              </a>
            </div>
            <div className={styles["link"]}>
              <a
                href="https://angel.co/company/neptune-mutual"
                rel="noreferrer nofollow"
                target="_blank"
                aria-label="Careers Page"
              >
                <Trans>Careers</Trans>
              </a>
            </div>
            <div className={styles["link"]}>
              <a
                rel="noreferrer"
                href={social.documentation}
                target="_blank"
                aria-label="Documentation Site"
              >
                <Trans>Documentation</Trans>
              </a>
            </div>
            <div className={styles["link"]}>
              <a
                rel="noreferrer"
                href="https://docs.neptunemutual.com/usage/terms-of-use"
                target="_blank"
                aria-label="Terms of Service"
              >
                <Trans>Terms of Service</Trans>
              </a>
            </div>
            <div className={styles["link"]}>
              <a
                rel="noreferrer"
                href="https://docs.neptunemutual.com/usage/privacy-policy"
                target="_blank"
                aria-label="Privacy Policy"
              >
                <Trans>Privacy Policy</Trans>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`section_border_container border_none ${styles["disclaimer-wrapper"]}`}
      >
        <div className="section_horizontal_container">
          <p className={styles["disclaimer-title"]}>
            <Trans>Neptune Mutual &copy; 2022</Trans>
          </p>
          <p className={styles["disclaimer-text"]}>
            <Trans>
              Risk warning: Trading crypto assets involves significant risk and
              can result in the loss of your capital. You should not invest more
              than you can afford to lose and you should ensure that you fully
              understand the risks involved. Before trading, please take into
              consideration your level of experience, investment objectives, and
              seek independent financial advice if necessary. It is your
              responsibility to ascertain whether you are permitted to use the
              services of Neptune Mutual based on the legal requirements in your
              country of residence.
            </Trans>
          </p>
        </div>
      </div>
    </div>
  );
};
