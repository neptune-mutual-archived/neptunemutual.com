import { BaseLayout } from "@layouts/Base";
import { HomePage } from "../components/HomePage";
import { pageRoutes } from "@lib/routes";
import { Notice } from "@components/HomePage/Notice";

import "slick-carousel/slick/slick.css";
import { Trans } from "@lingui/macro";
// import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <BaseLayout
      title="Neptune Mutual"
      selectedNavKey=""
      description="Reduce Your Exposure to Crypto Market Risks"
      canonical={pageRoutes.home}
    >
      <>
        <Notice
          link="https://www.cointelligence.com/content/neptune-mutual-raises-strategic-round-led-by-animoca-brands-to-build-cover-protocol-for-metaverse-assets/"
          linkText={<Trans>View Press Release</Trans>}
          text={
            <Trans>
              Neptune Mutual Raises Strategic Round, Led by Animoca Brands, to
              Build Cover Protocol for Metaverse Assets
            </Trans>
          }
        />
        <HomePage />
      </>
    </BaseLayout>
  );
}
