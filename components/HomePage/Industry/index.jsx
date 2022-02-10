import TwitterIcon from "@utils/icons/TwitterIcon";
import GithubIcon from "@utils/icons/GithubIcon";
import TelegramIcon from "@utils/icons/TelegramIcon";
import LinkedinIcon from "@utils/icons/LinkedinIcon";
import MediumIcon from "@utils/icons/MediumIcon";
import RedditIcon from "@utils/icons/RedditIcon";
import { BrandCarouselComponent } from "@components/HomePage/BrandCarousel/BrandCarousel";
import { social } from "@components/utils/social";
import styles from "./style.module.scss";
import { classNames } from "@lib/utils/classNames";
import { Trans } from "@lingui/macro";

const neptune = "/images/industry/neptune.png";
const fenbushiImg = "/images/brand/fenbushi.png";
const animocaImg = "/images/brand/animoca.svg";

export const IndustryComponent = () => {
  return (
    <>
      <div className={classNames(styles.sections_container)}>
        <div className={classNames(styles.connect_container)}>
          <div className="md:pl-12 md:mt-20 xl:mt-0 xl:pl-17 ">
            <h2 className="font-semibold font-sora  text-white text-2xl text-center md:text-left sm:text-3xxl mt-9 xl:mt-28">
              <Trans>Connect with Us</Trans>
            </h2>
            <div className="flex justify-center md:justify-start mt-7 xl:mt-10 gap-7 xl:gap-8 mb-14 md:mb-28">
              <a
                href={social.twitter}
                target={"_blank"}
                rel="noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-7 h-7 relative top-1" />
              </a>
              <a
                href={social.reddit}
                target={"_blank"}
                rel="noreferrer"
                aria-label="Reddit"
              >
                <RedditIcon className="w-7 h-7" />
              </a>
              <a
                href={social.telegram}
                target={"_blank"}
                rel="noreferrer"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-7 h-7" />
              </a>
              <a
                href={social.linkedin}
                target={"_blank"}
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-7 h-7" />
              </a>
              <a
                href={social.medium}
                target={"_blank"}
                rel="noreferrer"
                aria-label="Medium"
              >
                <MediumIcon className="w-7 h-7" />
              </a>
              <a
                href={social.github}
                target={"_blank"}
                rel="noreferrer"
                aria-label="Github"
              >
                <GithubIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div className="mt-9 md:mt-0 md:ml-auto max-w-full">
            <img src={neptune} alt="Illustration of Neptune Planet" />
          </div>
        </div>

        <div className="mt-58 xl:mt-76 bg-white shadow-powerCard border-transparent rounded-2xl p-3">
          <div className={styles.inner_container}>
            <h2 className="text-2xl leading-10 sm:text-h3 text-01052D text-center font-semibold font-sora">
              <Trans>Trusted by Industry Leaders</Trans>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
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
