import CodePreviewComponent from "@components/HomePage/CodePreviewComponent/CodePreviewComponent";
import { Button } from "@components/HomePage/CoverPoolComponent/Button";
import { classNames } from "@lib/utils/classNames";
import { Trans } from "@lingui/macro";
import { DownloadIcon } from "@utils/icons/DownloadIcon";
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
                rel="noreferrer nofollow"
                className={classNames(
                  "group",
                  styles.desktop_button,
                  styles.btn_container
                )}
              >
                <DownloadIcon className={styles.button_icon} />
                <span className={styles.button_style}>
                  <Trans>Get the Neptune Mutual SDK</Trans>
                </span>
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
            rel="noreferrer nofollow"
          >
            <Button text={<Trans>Get the Neptune Mutual SDK</Trans>} />
          </a>
        </div>
        <div className={styles.bottom_container}>
          {/* <div className="flex flex-col justify-between w-full gap-8 mx-4 mt-10 lg:pr-8 xl:pr-32 2xl:pr-80 lg:mt-60 lg:flex-row"> */}
          {coverPoolContent.map((paragraph, idx) => (
            <div key={idx}>
              <h3 className={styles.neutralTitle}>{paragraph.neutralTitle}</h3>
              <h3 className={styles.colouredTitle}>
                {paragraph.colouredTitle}
              </h3>
              <p className={styles.description}>{paragraph.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
