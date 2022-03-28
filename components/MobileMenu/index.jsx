import { SelectLanguage } from "@components/common/SelectLanguage";
import { classNames } from "@lib/utils/classNames";
import { Trans } from "@lingui/macro";
import styles from "./style.module.scss";
import LanguageDropdown from "@components/common/LanguageDropdown";

export const MobileMenu = ({
  onLanguageButtonClick,
  isLanguageDropdownOpen,
}) => {
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
          href="https://medium.com/neptune-mutual"
          rel="noreferrer nofollow"
          target="_blank"
          aria-label="Blog"
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
        >
          <Trans>Documentation</Trans>
        </a>
      </div>
    </div>
  );
};
