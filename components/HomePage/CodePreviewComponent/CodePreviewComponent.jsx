import { CodeButtonComponent } from "@components/CodeButtonComponent";
import { Trans } from "@lingui/macro";
import { useState } from "react";
import styles from "./code.module.scss";

const liquidityImage = "/images/code/SDK-liquidity.png";
const coverImage = "/images/code/SDK-cover.png";
const liquidityImageMobile = "/images/code/SDK-liquidity-mobile.png";
const coverImageMobile = "/images/code/SDK-cover-mobile.png";

const CodePreviewComponent = () => {
  const [addLiquidityActive, setAddLiquidityActive] = useState(true);
  const [provideCoverActive, setProvideCoverActive] = useState(false);

  const handleAddLiquidity = () => {
    if (!addLiquidityActive) {
      setAddLiquidityActive(true);
      setProvideCoverActive(false);
    }
  };

  const handleProvideCover = () => {
    if (!provideCoverActive) {
      setAddLiquidityActive(false);
      setProvideCoverActive(true);
    }
  };

  return (
    <div>
      <div className={styles.code_container}>
        <CodeButtonComponent
          onClick={handleAddLiquidity}
          className={
            addLiquidityActive ? styles.active : `bg-2B2E36 text-C0AEAE`
          }
        >
          <Trans>Add Liquidity</Trans>
        </CodeButtonComponent>
        <CodeButtonComponent
          onClick={handleProvideCover}
          className={
            provideCoverActive ? styles.active : `bg-2B2E36 text-C0AEAE`
          }
        >
          <Trans>Purchase Covers</Trans>
        </CodeButtonComponent>
      </div>
      <div className={styles.desktop_image_container}>
        <img
          className={styles.desktop_image}
          src={addLiquidityActive ? liquidityImage : coverImage}
          alt="Source Code Explaining How to Add Liquidity"
        />
      </div>
      <div className={styles.mobile_image_container}>
        <img
          className={styles.mobile_image}
          src={addLiquidityActive ? liquidityImageMobile : coverImageMobile}
          alt="Source Code Explaining How to Purchase Cover"
        />
      </div>
    </div>
  );
};

export default CodePreviewComponent;
