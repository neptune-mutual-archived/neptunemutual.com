import { SelectLanguage } from "@components/common/SelectLanguage";
import { classNames } from "@lib/utils/classNames";
import { Trans } from "@lingui/macro";
import styles from "./style.module.scss";
import LanguageDropdown from "@components/common/LanguageDropdown";
import { analyticsLogger } from "@utils/logger";

export const MobileMenu = ({
  onLanguageButtonClick,
  isLanguageDropdownOpen,
}) => {
  const blogLink = "https://blog.neptunemutual.com";
  return isLanguageDropdownOpen ? (
    <div className={styles.language_dropdown}>
      <LanguageDropdown mobileView={true} />
    </div>
  ) : (
    <div className={styles.mobileMenu}>
      <div className={classNames(styles.menu_item, styles.language_item)}>
        <SelectLanguage
          mobileView={true}
          showDropdownOnFocus={false}
          onButtonClick={onLanguageButtonClick}
        />
      </div>
      <div className={styles.menu_item}>
        <a
          href={blogLink}
          rel="noreferrer nofollow"
          target="_blank"
          aria-label="Blog"
          onClick={() =>
            analyticsLogger(() =>
              logButtonClick(
                "Mobile Blog Link",
                "Mobile menu blog link clicked",
                {
                  blogLink,
                }
              )
            )
          }
        >
          <Trans>Blog</Trans>
        </a>
      </div>
      <div className={styles.menu_item}>
        <a
          href="https://t.me/neptunemutualchat"
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Contact"
          onClick={() =>
            analyticsLogger(() =>
              logButtonClick(
                "Mobile Contact Link",
                "Mobile menu contact link clicked",
                {
                  contactLink: "https://t.me/neptunemutualchat",
                }
              )
            )
          }
        >
          <Trans>Contact</Trans>
        </a>
      </div>
      <div className={styles.menu_item}>
        <a
          href="https://docs.neptunemutual.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Documentation"
          onClick={() =>
            analyticsLogger(() =>
              logButtonClick(
                "Mobile Documentation Link",
                "Mobile menu Documentation link clicked",
                {
                  documentationLink: "https://docs.neptunemutual.com",
                }
              )
            )
          }
        >
          <Trans>Documentation</Trans>
        </a>
      </div>
    </div>
  );
};
