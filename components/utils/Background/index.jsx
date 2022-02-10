import styles from "./background.module.scss";

export const Background = ({ children }) => {
  return (
    <div className={styles.bg_root}>
      <div className={"section_border_container"}>
        <div className={"section_horizontal_container"}>{children}</div>
      </div>
    </div>
  );
};

export const Hero = ({ children }) => {
  return <div className={styles.hero}>{children}</div>;
};
