import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>Walter Nieves-Canabal | PharmD Portfolio</title>
        <meta name="description" content="Tech-forward pharmacy student building the future of healthcare access and innovation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="PharmD, Pharmacy Student, Digital Health, Product Management, Innovation, Puerto Rico, Rare Disease, Walter Nieves-Canabal" />
        <meta name="author" content="Walter Nieves-Canabal" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:url" content="https://walternieves.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Walter Nieves-Canabal | PharmD Portfolio" />
        <meta property="og:description" content="Tech-forward pharmacy student building the future of healthcare access and innovation." />
        <meta property="og:image" content="https://walternieves.com/preview-walter.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="walternieves.com" />
        <meta name="twitter:url" content="https://walternieves.com" />
        <meta name="twitter:title" content="Walter Nieves-Canabal | PharmD Portfolio" />
        <meta name="twitter:description" content="Tech-forward pharmacy student building the future of healthcare access and innovation." />
        <meta name="twitter:image" content="https://walternieves.com/preview-walter.png" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Walter Nieves-Canabal",
              "jobTitle": "PharmD Candidate",
              "url": "https://walternieves.com",
              "sameAs": [
                "https://www.linkedin.com/in/walter-nieves-canabal/"
              ]
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
