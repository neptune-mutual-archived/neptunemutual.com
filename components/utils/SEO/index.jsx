import Head from "next/head";

export const SEOMeta = ({
  title,
  description,
  canonical,
  iconHref = "/favicon.ico",
}) => (
  <Head>
    <title>{title}</title>

    <meta name="description" content={description} />
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

    <link rel="icon" href={iconHref} />
    <link rel="apple-touch-icon" href={iconHref} />

    <meta property="og:type" content="website" />
    <meta property="og:image" content="/images/OG.png" />
    <meta name="twitter:image" content="/images/OG.png" />

    <link rel="canonical" href={canonical} />
  </Head>
);

export default SEOMeta;
