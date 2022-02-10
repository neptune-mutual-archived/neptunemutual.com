import { classNames } from "@lib/utils/classNames";
import styles from "./burger.module.scss";

export const BurgerComponent = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={classNames(styles.wrapper, isOpen && styles.active)}
      aria-label="Open/Close sidebar"
    >
      <div className={classNames(styles.bar)}></div>
      <div className={classNames(styles.bar)}></div>
      <div className={classNames(styles.bar)}></div>
    </button>
  );
};
