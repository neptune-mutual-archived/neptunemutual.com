import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const SEOMeta = ({
  title,
  description,
  canonical,
  iconHref = "/favicon.ico",
}) => {
  const router = useRouter();
  const [host, setHost] = useState("");

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setHost(baseUrl);
  }, [router.pathname]);

  return (
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
      <meta property="og:image" content="/images/og.png" />
      <meta name="twitter:image" content={`${host}/images/og.png`} />

      <link rel="canonical" href={canonical} />
    </Head>
  );
};

export default SEOMeta;
