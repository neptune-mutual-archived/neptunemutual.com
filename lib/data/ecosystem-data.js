import { Trans } from "@lingui/macro";

const ecosystemData = [
  {
    id: 1,
    name: <Trans>Low Risk Cover Policies</Trans>,
    subData: [
      {
        name: <Trans>Zero Risk</Trans>,
        description: <Trans>Say goodbye to denied claims assessment.</Trans>,
      },
      {
        name: <Trans>100%+ MCR</Trans>,
        description: (
          <Trans>
            There is always enough liquidity to pay all cover policyholders.
          </Trans>
        ),
      },
      {
        name: <Trans>Dedicated Cover Pools</Trans>,
        description: (
          <Trans>
            A hack on one project will not affect cover for another.
          </Trans>
        ),
      },
      {
        name: <Trans>Stablecoin Liquidity</Trans>,
        description: (
          <Trans>NPM token price won&apos;t affect cover pool liquidity.</Trans>
        ),
      },
    ],
  },
  {
    id: 2,
    name: <Trans>Liquidity Providers Return</Trans>,
    subData: [
      {
        name: <Trans>Receive Rewards</Trans>,
        description: <Trans>Get cover fee paid by cover policyholders.</Trans>,
      },
      {
        name: <Trans>POD Staking</Trans>,
        description: (
          <Trans>
            Add your Proof Of Deposits (PODs) tokens to get native tokens of the
            cover creator.
          </Trans>
        ),
      },
      {
        name: <Trans>Flash Loan Income</Trans>,
        description: (
          <Trans>
            Income received from flash loan lendings gets added to the pool.
          </Trans>
        ),
      },
      {
        name: <Trans>Lending Income</Trans>,
        description: (
          <Trans>
            The protocol supplies a small part of the assets that are in excess
            of the minimum capital requirement to lending protocols.
          </Trans>
        ),
      },
    ],
  },
  {
    id: 3,
    name: <Trans>Cover Creation</Trans>,
    subData: [
      {
        name: <Trans>Parametric Cover</Trans>,
        description: (
          <Trans>
            Guarantees protection and fast resolution to your cover
            policyholders in the event of an incident.
          </Trans>
        ),
      },
      {
        name: <Trans>Capital Efficiency</Trans>,
        description: <Trans>Crowdfund your investor protection fund.</Trans>,
      },
      {
        name: <Trans>Your Confident, Protected Community</Trans>,
        description: (
          <Trans>
            Build your own dedicated cover protection community within your
            ecosystem.
          </Trans>
        ),
      },
      {
        name: <Trans>Personalized Rewards</Trans>,
        description: (
          <Trans>
            Reward your cover protection community with your native tokens.
          </Trans>
        ),
      },
      {
        name: <Trans>Protect your Funding Community</Trans>,
        description: (
          <Trans>
            Reassurance cover for liquidity pools is available to lower the risk
            for liquidity providers.
          </Trans>
        ),
      },
    ],
  },
];

export default ecosystemData;
