import { BaseLayout } from "@layouts/Base";
import { HomePage } from "../components/HomePage";
import { pageRoutes } from "@lib/routes";
import { Notice } from "@components/HomePage/Notice";

import "slick-carousel/slick/slick.css";
import { Trans } from "@lingui/macro";
import { getPosts } from "@lib/utils/methods";
// import "slick-carousel/slick/slick-theme.css";

export default function Home({ postsData }) {
  return (
    <BaseLayout
      title="Neptune Mutual"
      selectedNavKey=""
      description="Reduce Your Exposure to Crypto Market Risks"
      canonical={pageRoutes.home}
    >
      <>
        <Notice
          link="https://cryptoslate.com/press-releases/neptune-mutual-protocol-raises-5-3m-in-a-private-funding-round-after-successful-testnet-launch/"
          linkText={<Trans>View Press Release</Trans>}
          text={
            <Trans>
              Neptune Mutual Protocol raises 5.3M$ in a private funding round
              after successful testnet launch
            </Trans>
          }
        />
        <HomePage postsData={postsData} />
      </>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      postsData: await getPosts(),
    },
    revalidate: 60,
  };
}
