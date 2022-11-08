import { Transition } from "@headlessui/react";
import ClipboardIcon from "@utils/icons/ClipboardIcon";
import { Fragment, useEffect, useState } from "react";

import styles from "@components/HomePage/OldRoadmap/style.module.css";
import { Trans } from "@lingui/macro";
import { DownloadIcon } from "@utils/icons/DownloadIcon";
import coverpoolStyles from "@components/HomePage/CoverPoolComponent/coverpool.module.scss";

const CoverSdkComponent = () => {
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    try {
      await navigator?.clipboard?.writeText("npm install @neptunemutual/sdk");
      setCopied(true);
    } catch (e) {
      console.log("failed to copy: ", e);
    }
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 1000);
    }
  }, [copied]);

  return (
    <div className={styles["coversdk-code"]}>
      <p>npm install @neptunemutual/sdk</p>
      <ClipboardIcon className={styles["pointer"]} onClick={() => copyText()} />
      <div className={styles["coversdk-alert"]}>
        <Transition
          show={copied}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <span className={styles["coversdk-alert-span"]}>
            <Trans>Copied</Trans>
          </span>
        </Transition>
      </div>
    </div>
  );
};

const ProductMvpComponent = () => {
  return (
    <a
      href="/files/lightpaper.v1.pdf"
      download
      className={`group ${coverpoolStyles.fit_content} ${coverpoolStyles.desktop_button}`}
    >
      <DownloadIcon className={coverpoolStyles.button_icon} />
      <span className={coverpoolStyles.button_style}>
        <Trans>View the Lightpaper</Trans>
      </span>
    </a>
  );
};

export const data = [
  {
    name: <Trans>The Idea</Trans>,
    description: [
      <Trans key={1}>
        Blockchain-based covers typically have a low claims-to-payout ratio.
        Existing cover products are unscalable, discretionary, and
        discriminatory. Smart contract audits do not guarantee security. Attacks
        on exchanges, metaverses, DApps, and DeFi protocols are increasing and
        getting more sophisticated.
      </Trans>,
      <Trans key={2}>
        We saw a growing need for security and reliable covers and this is what
        inspired us to create Neptune Mutual.
      </Trans>,
    ],
  },
  {
    name: <Trans>Product Design</Trans>,
    description: (
      <Trans>
        Four key principles drive the design of Neptune Mutual&apos;s cover
        protocol:
      </Trans>
    ),
    bulletPoints: [
      <Trans key={1}>Security</Trans>,
      <Trans key={2}>Minimizing risk</Trans>,
      <Trans key={3}>Scalability</Trans>,
      <Trans key={4}>User Experience (UX)</Trans>,
    ],
  },
  {
    name: <Trans>Token Design</Trans>,
    description: (
      <Trans>
        Neptune Mutual&apos;s Lightpaper gives detailed information on our NPM
        token design and usage. Here are key points to take note of:
      </Trans>
    ),
    bulletPoints: [
      <Trans key={1}>There is a fixed supply of 1 billion NPM tokens.</Trans>,
      <Trans key={2}>
        The minting of NPM tokens will have a timeframe of 6 years.
      </Trans>,
      <Trans key={3}>
        NPM tokens will be used for the incident reporting and resolution
        mechanism including other functions of the protocol such as creating a
        cover. The team are working on developing a range of other utility
        features for the NPM token.
      </Trans>,
    ],
  },
  {
    name: <Trans>Product MVP</Trans>,
    description: (
      <Trans>
        All participants of the Neptune Mutual ecosystem will get a
        comprehensive documentation that helps with understanding the different
        aspects of the Neptune Mutual protocol.
      </Trans>
    ),
    DescComponent: ProductMvpComponent,
  },
  {
    name: <Trans>Cover SDK Beta</Trans>,
    DescComponent: () => (
      <>
        <Trans>
          Check out the Cover SDK source code on the Neptune Mutual Github
          repository.{" "}
          <a
            className="anchor"
            target={"_blank"}
            rel="noreferrer"
            href="https://docs.neptunemutual.com/"
          >
            Read the SDK documentation
          </a>{" "}
          to find out how to get access to cover feature on your own frontend
          app or backend API.
        </Trans>
        <br />
        <br />
        <Trans>
          Built on Typescript, developers can use the SDK in both frontend and
          backend environments using any popular framework. The SDK is also
          available as an NPM package.
        </Trans>
      </>
    ),
    Component: CoverSdkComponent,
  },
  {
    name: <Trans>Incorporation & Legal</Trans>,
    description: (
      <Trans>
        In September 2021, we incorporated legal entities to support the
        fundraising, development, recruitment, expansion, and operational demand
        of the Neptune Mutual protocol.
      </Trans>
    ),
  },
  {
    name: <Trans>Fundraising & Team Building</Trans>,
    description: [
      <Trans key={1}>
        Neptune Mutual successfully closed its seed round backed by industry
        leaders including Fenbushi and Coinbase Ventures. Soon after, Animoca
        Brands led the strategic investment round, and finally a private round
        was completed in Q2 2022 with an impressive list of investors bring
        total funds raised to over 10M USD.
      </Trans>,
      <Trans key={2}>
        Neptune Mutual has grown quickly from 3 cofounders to a team of over 25,
        based in countries across the world.
      </Trans>,
    ],
  },
  {
    name: <Trans>Protocol Testnet Launch - Ethereum</Trans>,
    DescComponent: () => (
      <>
        <Trans>
          The Neptune Mutual protocol launched on the Polygon Mumbai Testnet.
          Over 20k Neptunite community members participated in the protocol by
          becoming cover purchasers, liquidity providers, and incident
          reporters. We developed the{" "}
          <a
            className="anchor"
            target={"_blank"}
            rel="noreferrer"
            href="https://faucet.neptunemutual.com/"
          >
            Neptune Mutual faucet
          </a>{" "}
          to provide users with testnet DAI and NPM tokens.
        </Trans>
      </>
    ),
  },
  {
    name: <Trans>1st Protocol Audit</Trans>,
    description: (
      <Trans>
        The Neptune Mutual Protocol first code audit is completed by BlockSec.
        The full audit report will be published on the Neptune Mutual website.
      </Trans>
    ),
  },
  {
    name: <Trans>Diversified Cover Pools</Trans>,
    description: (
      <Trans>
        This new feature enables a diversified cover pool creator to create a
        master liquidity pool that supplies underwriting liquidity to a number
        of different projects. Each project defines their respective trigger
        parameters and cover policies; users can buy cover policies from these
        individual projects. Because liquidity from the diversified cover pool
        is underwriting multiple different projects with diversified risk, the
        diversified cover creator can choose to leverage the underwriting
        liquidity to provide more than 1 DAI of cover for 1 DAI of liquidity.
        Diversified Cover Pools therefore cannot provide the absolute guarantee
        of payout to policyholders in the way that Dedicated Cover Pools can,
        however for a variety of applications and market sectors Diversified
        Cover Pools offer a number of very significant advantages.
      </Trans>
    ),
  },
  {
    name: <Trans>2nd Protocol Audit</Trans>,
    description: (
      <Trans>
        The Neptune Mutual Protocol second code audit will be carried out by
        Open Zeppelin. The full audit report will be published on the Neptune
        Mutual website when it is available.
      </Trans>
    ),
  },
  {
    name: <Trans>Protocol Testnet Launch - Avalanche</Trans>,
    description: (
      <Trans>
        The Neptune Mutual protocol to launch on the Avalanche Fuji Testnet. The
        Neptune Mutual faucet will again be used to provide users with testnet
        DAI and NPM tokens.
      </Trans>
    ),
  },
  {
    name: <Trans>Protocol Mainnet Launch - Ethereum</Trans>,
    highlight: true,
    description: (
      <Trans>
        The protocol will be launched on mainnet. In the first instance a
        centralised voucher system will be used with trusted Neptune Mutual
        startegic partners for incident reporting and resolution. The community
        incident reporting and resolution mechanism will be introduced following
        the TGE.
      </Trans>
    ),
  },
  {
    name: <Trans>To Be Announced</Trans>,
    description: (
      <Trans>
        As the industry evolves and matures further, Neptune Mutual creates even
        more products, apps, and services to remain relevant in the space and
        continuously innovate.
      </Trans>
    ),
  },
];

export const points = data.reduce((pv, cv) => {
  pv.push({ name: cv.name, highlight: cv?.highlight ?? false });
  return pv;
}, []);
