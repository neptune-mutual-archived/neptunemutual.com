import { classNames } from "@lib/utils/classNames";
import { DownloadIcon } from "@utils/icons/DownloadIcon";
import styles from "./coverpool.module.scss";

const Button = ({ text, handleClick }) => {
  const handleBtnClick = (e) => {
    if (handleClick) handleClick(e);
  };

  return (
    <button
      className={classNames("group", styles.desktop_button)}
      onClick={handleBtnClick}
    >
      <DownloadIcon className={styles.button_icon} />
      <span className={styles.button_style}>{text}</span>
    </button>
  );
};

export { Button };
