import Head from "next/head";

export const SEOMeta = ({
  title,
  description,
  canonical,
  iconHref = "/favicon.ico",
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Decentralized Insurance, DeFi Insurance, Neptune Mutual, Parametric, Cover, Pool, NPM, Reassurance, POD"
      />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta
        name="twitter:image"
        content="https://neptunemutual.com/images/og.png"
      />

      <link rel="icon" href={iconHref} />
      <link rel="apple-touch-icon" href={iconHref} />

      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/og.png" />

      <link rel="canonical" href={canonical} />
    </Head>
  );
};

export default SEOMeta;
