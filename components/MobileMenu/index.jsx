import { SelectLanguage } from "@components/common/SelectLanguage";
import { Trans } from "@lingui/macro";
import Link from "next/link";
import styles from "./style.module.scss";

export const MobileMenu = () => {
  return (
    <div className={styles.mobileMenu}>
      <div className={styles.menu_item}>
        <Link href="https://neptunemutual.medium.com/">
          <a target="_blank">
            <Trans>Blog</Trans>
          </a>
        </Link>
      </div>
      <div className={styles.menu_item}>
        <Link href="https://t.me/neptunemutualchat">
          <a target="_blank">
            <Trans>Contact</Trans>
          </a>
        </Link>
      </div>
      <div className={styles.menu_item}>
        <Link href="https://docs.neptunemutual.com">
          <a target="_blank">
            <Trans>Documentation</Trans>
          </a>
        </Link>
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
