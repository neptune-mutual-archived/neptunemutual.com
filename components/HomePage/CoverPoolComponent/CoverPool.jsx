import CodePreviewComponent from "@components/HomePage/CodePreviewComponent/CodePreviewComponent";
import { Button } from "@components/HomePage/CoverPoolComponent/Button";
import { Trans } from "@lingui/macro";
import styles from "./coverpool.module.scss";

const coverPoolContent = [
  {
    neutralTitle: <Trans>Write</Trans>,
    colouredTitle: <Trans>Less Code</Trans>,
    description: (
      <Trans>
        Write less code and plug in your own Web3 provider. Get complete access
        to all coverage features.
      </Trans>
    ),
  },
  {
    neutralTitle: <Trans>Use</Trans>,
    colouredTitle: <Trans>Anywhere</Trans>,
    description: (
      <Trans>
        Built on Typescript, the SDK works on both frontend and backend
        environments, on any framework.
      </Trans>
    ),
  },
  {
    neutralTitle: <Trans>Attract</Trans>,
    colouredTitle: <Trans>Liquidity</Trans>,
    description: (
      <Trans>
        With our support, you can get more visibility to bootstrap liquidity
        into your own cover pool.
      </Trans>
    ),
  },
];

export const CoverPoolComponent = () => {
  return (
    <div className={"section_border_container"}>
      <div className={"section_horizontal_container"}>
        <div className={styles.content_container}>
          <div className={styles.left_container}>
            <h2 className={styles.left_heading}>
              <Trans>Your Cover Pool</Trans>,
              <br className={styles.heading_line_break} />{" "}
              <Trans>Your Style</Trans>
            </h2>
            <h3 className={styles.buidl}>
              <Trans>Let&apos;s #buidl</Trans>
            </h3>
            <p className={styles.desc}>
              <Trans>
                Imagine how cool it would be to access all coverage features
                inside your own app just the way you like it.
              </Trans>
            </p>
            <div className={styles.desktop_button_container}>
              <a
                href="https://www.npmjs.com/package/@neptunemutual/sdk"
                target="_blank"
                rel="noreferrer"
              >
                <Button text={<Trans>Get the Neptune Mutual SDK</Trans>} />
              </a>
            </div>
          </div>
          <div className={styles.code_component_wrapper}>
            <div className={styles.code_component}>
              <CodePreviewComponent />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.code_component_wrapper} ${styles.full_width}`}>
        <div className={`${styles.code_component}`}>
          <CodePreviewComponent />
        </div>
      </div>

      <div className={"section_horizontal_container"}>
        <div className={styles.mobile_btn_container}>
          <a
            href="https://www.npmjs.com/package/@neptunemutual/sdk"
            target="_blank"
            rel="noreferrer"
          >
            <Button text={<Trans>Get the Neptune Mutual SDK</Trans>} />
          </a>
        </div>
        <div className={styles.bottom_container}>
          {/* <div className="mx-4 lg:pr-8 xl:pr-32 2xl:pr-80 mt-10 lg:mt-60 flex flex-col lg:flex-row w-full justify-between gap-8"> */}
          {coverPoolContent.map((paragraph, idx) => (
            <div key={idx}>
              <h3>
                <p className={styles.neutralTitle}>{paragraph.neutralTitle}</p>
                <p className={styles.colouredTitle}>
                  {paragraph.colouredTitle}
                </p>
              </h3>
              <p className={styles.description}>{paragraph.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
