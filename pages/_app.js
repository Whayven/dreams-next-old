import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import Nav from "../components/nav";
import Footer from "../components/footer";

import "../style.css";

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Dreams</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </ApolloProvider>
  )
};

// Wraps all components in the tree with the data provider
export default withData(App);