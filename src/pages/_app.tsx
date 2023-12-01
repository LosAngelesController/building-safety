import "../styles/globals.css";
import type { AppProps } from "next/app";
import styles from "../styles/Home.module.css";
import "./../../node_modules/mapbox-gl/dist/mapbox-gl.css";
import "./App.css";
import "../styles/rc-slider.css";

import "./../../node_modules/@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./mapboxdark.css";

import TagManager from "react-gtm-module";
import { useEffect } from "react";

import { Analytics } from "@vercel/analytics/react";

const tagManagerArgs = {
  gtmId: "G-LFP8Y1HYF7",
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  });
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
