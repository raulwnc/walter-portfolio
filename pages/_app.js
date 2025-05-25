import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>Walter Nieves-Canabal | PharmD Portfolio</title>
        <meta
          name="description"
          content="Tech-forward pharmacy student building the future of healthcare access and innovation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="PharmD, Pharmacy Student, Digital Health, Product Management, Innovation, Puerto Rico, Rare Disease, Walter Nieves-Canabal"
        />
        <meta name="author" content="Walter Nieves-Canabal" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:url" content="https://walter-portfolio-theta.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Walter Nieves-Canabal | PharmD Portfolio" />
        <meta
          property="og:description"
          content="Tech-forward pharmacy student building the future of healthcare access and innovation."
        />
        <meta property="og:image" content="https://walter-portfolio-theta.vercel.app/walter-og.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="walter-portfolio-theta.vercel.app" />
        <meta property="twitter:url" content="https://walter-portfolio-theta.vercel.app" />
        <meta name="twitter:title" content="Walter Nieves-Canabal | PharmD Portfolio" />
        <meta
          name="twitter:description"
          content="Tech-forward pharmacy student building the future of healthcare access and innovation."
        />
        <meta name="twitter:image" content="https://walter-portfolio-theta.vercel.app/walter-og.png" />
      <meta name="color-scheme" content="light" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
