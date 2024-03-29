import { BaseLayout } from "@layouts/Base";
import { HomePage } from "../components/HomePage";
import { pageRoutes } from "@lib/routes";
import { Notice } from "@components/HomePage/Notice";

import "slick-carousel/slick/slick.css";
import { Trans } from "@lingui/macro";
import { getPosts } from "@lib/utils/methods";
import { useEffect } from "react";
import { logPageLoad } from "@analytics/index";
import { useCookies } from "context/cookies";
// import "slick-carousel/slick/slick-theme.css";

export default function Home({ postsData }) {
  const { accepted } = useCookies();
  useEffect(() => {
    if (accepted) logPageLoad("HomePage");
  }, [accepted]);

  return (
    <BaseLayout
      title="Neptune Mutual Decentralized Insurance"
      selectedNavKey=""
      description="Neptune Mutual protects the Ethereum community from hacks and exploits through its unique parametric DeFi insurance marketplace designed to cover, protect and secure onchain digital assets; power by Ethereum, driven by stablecoins."
      canonical={pageRoutes.home}
    >
      <>
        <Notice
          link="https://blog.neptunemutual.com/ethereum-defi-cover-protocol-launch-announcement/"
          linkText={<Trans>View Annoucement</Trans>}
          text={
            <Trans>
              Parametric Cover Protection for Prime dApps Now Live on the
              Ethereum Mainnet!
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
