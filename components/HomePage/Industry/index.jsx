import TwitterIcon from "@utils/icons/TwitterIcon";
import GithubIcon from "@utils/icons/GithubIcon";
import TelegramIcon from "@utils/icons/TelegramIcon";
import LinkedinIcon from "@utils/icons/LinkedinIcon";
import BlogIcon from "@utils/icons/BlogIcon";
import RedditIcon from "@utils/icons/RedditIcon";
import { BrandCarouselComponent } from "@components/HomePage/BrandCarousel/BrandCarousel";
import { social } from "@components/utils/social";
import styles from "./style.module.scss";
import { classNames } from "@lib/utils/classNames";
import { Trans } from "@lingui/macro";
import { DiscordIcon } from "@utils/icons/DiscordIcon";
import YoutubeIcon from "@utils/icons/YoutubeIcon";
import { logButtonClick } from "@analytics/index";
import { analyticsLogger } from "@utils/logger";

const neptune = "/images/industry/neptune.png";
const fenbushiImg = "/images/brand/fenbushi.svg";
const animocaImg = "/images/brand/animoca.svg";

const socialLinks = [
  {
    name: "Twitter",
    link: social.twitter,
    Icon: <TwitterIcon className="relative w-7 h-7 top-1" />,
  },
  {
    name: "Reddit",
    link: social.reddit,
    Icon: <RedditIcon className="w-7 h-7" />,
  },
  {
    name: "Telegram",
    link: social.telegram,
    Icon: <TelegramIcon className="w-7 h-7" />,
  },
  {
    name: "LinkedIn",
    link: social.linkedin,
    Icon: <LinkedinIcon className="w-7 h-7" />,
  },
  {
    name: "Blog",
    link: social.blog,
    Icon: <BlogIcon className="w-7 h-7" />,
  },
  {
    name: "Github",
    link: social.github,
    Icon: <GithubIcon className="w-7 h-7" />,
  },
  {
    name: "Discord",
    link: social.discord,
    Icon: <DiscordIcon className="w-8 h-8" />,
  },
  {
    name: "Youtube",
    link: social.youtube,
    Icon: <YoutubeIcon className="w-8 h-8" />,
  },
];

export const IndustryComponent = () => {
  return (
    <>
      <div className={classNames(styles.sections_container)}>
        <div className={classNames(styles.connect_container)}>
          <div className="md:pl-12 md:mt-20 xl:mt-0 xl:pl-17 ">
            <h2 className="text-2xl font-semibold text-center text-white font-sora md:text-left sm:text-3xxl mt-9 xl:mt-28">
              <Trans>Connect with Us</Trans>
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start mt-7 xl:mt-10 gap-7 xl:gap-8 mb-14 md:mb-28">
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
                        `${name} link:cwu`,
                        `${name} link at \`Connect with Us\` section clicked`,
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
          <div className="max-w-full mt-9 md:mt-0 md:ml-auto">
            <img src={neptune} alt="Illustration of Neptune Planet" />
          </div>
        </div>

        <div className="p-3 bg-white border-transparent mt-58 xl:mt-76 shadow-powerCard rounded-2xl">
          <div className={styles.inner_container}>
            <h2 className="text-2xl font-semibold leading-10 text-center sm:text-h3 text-01052D font-sora">
              <Trans>Trusted by Industry Leaders</Trans>
            </h2>
            <div className="flex flex-col items-center justify-center md:flex-row">
              <img src={fenbushiImg} alt="Fenbushi" />
              <div className="p-7 md:p-9"></div>
              <img src={animocaImg} alt="Animoca Brands" />
            </div>
          </div>
        </div>

        <BrandCarouselComponent />
      </div>
    </>
  );
};
