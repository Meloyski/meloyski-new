import React from "react";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import "../style/styles.scss";

const MyApp = (props: AppProps) => {
  const { Component, pageProps, router } = props;

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
};

export default MyApp;
