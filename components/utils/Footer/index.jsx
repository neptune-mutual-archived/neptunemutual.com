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
import { logButtonClick } from "@analytics/index";
import { analyticsLogger } from "@utils/logger";

const neptune = "/images/industry/neptune.png";
const logo = "/logos/neptune-mutual-full-inverse.png";

const socialLinks = [
  {
    name: "Twitter",
    link: social.twitter,
    Icon: <TwitterIcon className={styles["twitter-icon"]} />,
  },
  {
    name: "Reddit",
    link: social.reddit,
    Icon: <RedditIcon className={styles["icon-class"]} />,
  },
  {
    name: "Telegram",
    link: social.telegram,
    Icon: <TelegramIcon className={styles["icon-class"]} />,
  },
  {
    name: "LinkedIn",
    link: social.linkedin,
    Icon: <LinkedinIcon className={styles["icon-class"]} />,
  },
  {
    name: "Blog",
    link: social.blog,
    Icon: <BlogIcon className={styles["icon-class"]} />,
  },
  {
    name: "Github",
    link: social.github,
    Icon: <GithubIcon className={styles["icon-class"]} />,
  },
  {
    name: "Discord",
    link: social.discord,
    Icon: <DiscordIcon className={styles["github-icon"]} />,
  },
  {
    name: "Youtube",
    link: social.youtube,
    Icon: <YoutubeIcon className={styles["github-icon"]} />,
  },
];

const quickLinks = [
  {
    name: "Blog",
    ariaLabel: "Visit Our Blog",
    href: social.blog,
  },
  {
    name: "Contact",
    ariaLabel: "Contact Us",
    href: "https://forms.clickup.com/f/6vvfh-4624/UVJHEDAS2T3P6DCFJM",
  },
  {
    name: "Careers",
    ariaLabel: "Careers Page",
    href: "https://angel.co/company/neptune-mutual",
  },
  {
    name: "Documentation",
    ariaLabel: "Documentation Site",
    href: social.documentation,
  },
  {
    name: "Terms Of Service",
    ariaLabel: "Terms Of Service",
    href: "https://docs.neptunemutual.com/usage/terms-of-use",
  },
  {
    name: "Privacy Policy",
    ariaLabel: "Privacy Policy",
    href: "https://docs.neptunemutual.com/usage/privacy-policy",
  },
];

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
              {socialLinks.map(({ name, link, Icon }, i) => (
                <a
                  key={i}
                  href={link}
                  target={"_blank"}
                  rel="noreferrer nofollow"
                  aria-label={name}
                  onClick={() =>
                    analyticsLogger(() =>
                      logButtonClick(
                        `Footer:${name} link`,
                        `${name} link at Footer section clicked`,
                        {
                          link,
                        }
                      )
                    )
                  }
                >
                  {Icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles["link-wrapper-1"]}>
        <div className="section_border_container border_none">
          <div className={styles["link-wrapper-2"]}>
            {quickLinks.map(({ name, ariaLabel, href }, i) => (
              <div key={i} className={styles["link"]}>
                <a
                  href={href}
                  rel="noreferrer nofollow"
                  target="_self"
                  aria-label={ariaLabel}
                  onClick={() =>
                    analyticsLogger(() =>
                      logButtonClick(
                        `Footer-Quicklink:${name} link`,
                        `${name} quicklink at Footer section clicked`,
                        {
                          link,
                        }
                      )
                    )
                  }
                >
                  <Trans>{name}</Trans>
                </a>
              </div>
            ))}
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
