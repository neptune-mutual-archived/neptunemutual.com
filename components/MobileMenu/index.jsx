import { SelectLanguage } from "@components/common/SelectLanguage";
import { Trans } from "@lingui/macro";
import styles from "./style.module.scss";

export const MobileMenu = () => {
  return (
    <div className={styles.mobileMenu}>
      <div className={styles.menu_item}>
        <a
          href="https://medium.com/neptune-mutual"
          rel="noreferrer"
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
          rel="noreferrer"
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
      <div className={styles.menu_item}>
        <SelectLanguage
          textFill="#fff"
          arrowFill="fill-white"
          borderFill="#ffffff"
        />
      </div>
    </div>
  );
};
