import { Transition } from "@headlessui/react";
import ClipboardIcon from "@utils/icons/ClipboardIcon";
import { Fragment, useEffect, useState } from "react";

import styles from "@components/HomePage/OldRoadmap/style.module.css";
import { Button } from "@components/HomePage/CoverPoolComponent/Button";
import { Trans } from "@lingui/macro";

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
  const handleClick = () => {
    var el = document.createElement("a");
    el.setAttribute("href", "/files/lightpaper.v1.pdf");
    el.setAttribute("download", "lightpaper.v1.pdf");

    el.style.display = "none";
    document.body.appendChild(el);

    el.click();

    document.body.removeChild(el);
  };

  return (
    <Button
      text={"Download Neptune Mutual Lightpaper"}
      handleClick={handleClick}
    />
  );
};

export const data = [
  {
    name: <Trans>The Idea</Trans>,
    description: [
      <Trans key={1}>
        Blockchain-based covers have a low claims-to-payout ratio. Existing
        cover products are unscalable, discretionary, and discriminatory. Smart
        contract audits do not guarantee security. Attacks on exchanges,
        metaverses, DApps, and DeFi protocols are increasing and getting more
        sophisticated.
      </Trans>,
      <Trans key={2}>
        We saw a growing need for security and reliable covers that inspired us
        to create Neptune Mutual.
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
      <Trans key={4}>User Experience</Trans>,
    ],
  },
  {
    name: <Trans>Token Design</Trans>,
    description: (
      <Trans>
        Neptune Mutual&apos;s Lightpaper gives detailed information on our NPM
        token design and usage. Here are key points to take not of:
      </Trans>
    ),
    bulletPoints: [
      <Trans key={1}>There is a fixed supply of 1 billion NPM tokens.</Trans>,
      <Trans key={2}>
        The minting of NPM tokens will have a time-frame of 6 years.
      </Trans>,
      <Trans key={3}>
        NPM tokes are mainly used for our incident resolution reporting
        mechanism including other functions of the protocol such as creating a
        cover.
      </Trans>,
    ],
    Component: ProductMvpComponent,
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
          to find out how to get access to cover features on your own frontend
          app or backend API.
        </Trans>
        <br />
        <br />
        <Trans>
          Built on Typescript, developers can use the SDK in both frontend and
          backend environments using any popular framework. The SDK is available
          as an NPM package:
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
    name: <Trans>Fund Raising, Recruitment & Build</Trans>,
    highlight: true,
    description: [
      <Trans key={1}>
        Neptune Mutual successfully closed its Seed Round backed by industry
        leaders including Fenbushi and Coinbase Ventures. Soon after, Animoca
        Brands led the subsequent investment round and has been joined by an
        impressive list of investors.
      </Trans>,
      <Trans key={2}>
        Neptune Mutual has grown quickly from 3 co-founders to a team of over
        25, based in countries across the world.
      </Trans>,
    ],
  },
  {
    name: <Trans>Protocol Testnet Launch</Trans>,
    DescComponent: () => (
      <>
        <Trans>
          The Neptune Mutual protocol launches on a couple of test networks like
          Kovan and Binance Smart Chain Testnet. Community members participate
          in the protocol by becoming cover purchasers, liquidity providers, and
          consensus witnesses. We will develop{" "}
          <a
            className="anchor"
            target={"_blank"}
            rel="noreferrer"
            href="https://www.neptunemutual.com/"
          >
            Neptune Mutual faucet
          </a>{" "}
          to provide users with testnet DAI and NPM tokens
        </Trans>
        .
      </>
    ),
  },
  {
    name: <Trans>Protocol Audit & Launch</Trans>,
    description: (
      <Trans>
        The Neptune Mutual Protocol v1 gets audited by a couple of
        highly-sophisticated security research companies. The protocol gets
        improved over time through bug-bounty programs and continuous security
        reviews conducted by independent researchers.
      </Trans>
    ),
  },
  {
    name: <Trans>SDK Audit & Launch</Trans>,
    description: [
      <Trans key={1}>
        Neptune Mutual SDK undergoes a strict internal security audit before it
        becomes available for public use.
      </Trans>,
      <Trans key={2}>
        Furthermore, the app, Github, hosting, CI/CD pipelines, DNS, HTTP
        security, and more is thoroughly audited as well. Additional, proper
        cyber hygienes are implemented across the organization.
      </Trans>,
    ],
  },
  {
    name: <Trans>Aggregated Policies (v2)</Trans>,
    description: (
      <Trans>
        This upgrade enables multiple policies to be aggregated under a single
        cover pool providing larger DeFi and Meta projects an ability to secure
        their portfolio of smaller DApps.
      </Trans>
    ),
  },
  {
    name: <Trans>Security Analytics Dashboard</Trans>,
    description: (
      <Trans>
        Based on the-then demand, the Neptune Mutual team partners with
        blockchain security experts, groups, and companies to “conceptualize” a
        brand new security analytics service exclusively for our portfolio
        projects. The dashboard will be based on production smart contract
        security.
      </Trans>
    ),
  },
  {
    name: <Trans>Security Scorecards & Widgets</Trans>,
    description: (
      <Trans>
        As the next iteration and enhancements to the dashboard solution,
        Neptune Mutual also scores the security posture of our portfolio DeFi
        projects and apps. The score rating can be used on any external website
        by simply copying and pasting a few lines of code.
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
