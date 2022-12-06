import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import merge from 'lodash.merge';
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

import PageChange from "../components/PageChange/PageChange.js";

import '../styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

const theme = merge(darkTheme(), {
  colors: {
    accentColor: 'rgb(51 65 85)',
    connectButtonBackground: 'rgb(51 65 85)',
    downloadBottomCardBackground: 'rgb(51 65 85)',
    modalBackground: 'rgb(51 65 85)',

  },
});

const { chains, provider } = configureChains(
  [
    chain.mainnet,
  ],
  [
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "ChatGBT Token",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export function reportWebVitals(metric) {
  console.log(metric);
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Chat GBT Homepage</title>
        </Head>
        <Layout>
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider theme={theme} chains={chains}>
              <Component {...pageProps} />              
            </RainbowKitProvider>
          </WagmiConfig>          
        </Layout>
      </React.Fragment>
    );
  }
}
