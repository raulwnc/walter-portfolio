import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Walter Nieves-Canabal | PharmD + Digital Health Innovator</title>
        <meta name="description" content="Portfolio of Walter Nieves-Canabal, a PharmD student passionate about pharmacy, innovation, and access to care. Includes tech projects, research, and leadership." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="PharmD, Pharmacy Student, Digital Health, Product Management, Innovation, Puerto Rico, Rare Disease, Walter Nieves-Canabal" />
        <meta name="author" content="Walter Nieves-Canabal" />
        <meta property="og:title" content="Walter Nieves-Canabal | PharmD Portfolio" />
        <meta property="og:description" content="Tech-forward pharmacy student building the future of healthcare access and innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walter-portfolio-theta.vercel.app" />
        <meta property="og:image" content="/puerto-rico-flag.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
