import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (<>
<Navbar />
<Head>
        <title>Astra Robotics</title>
        <meta name="description" content="Astra Robotics is an interdisciplinary robotics club of RVCE." />
        <meta name="keywords" content="Robotics, Student Club" />
        <meta property="og:title" content="Astra Robotics" />
        <meta property="og:description" content="Astra Robotics is an interdisciplinary robotics club of RVCE." />
        <meta property="og:image" content="/astralogo.png" />
        <link rel="icon" href="/astralogo.png" />
      </Head>
  <Component {...pageProps} /></>);
}
