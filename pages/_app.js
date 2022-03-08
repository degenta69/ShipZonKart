import App from "next/app";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { store } from "../redux";
import { ChakraProvider } from '@chakra-ui/react'
import React from "react";

import "../styles/globals.css";
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


class MyApp extends App {
  static async GetInitialProps({ Component, ctx }) {
    const appProps = Component.GetInitialProps
      ? await Component.GetInitialProps(ctx)
      : {};
    console.log(appProps);
    return { appProps };
  }
  render() {
    const { Component, appProps } = this.props;
    return (
      <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...appProps} />
      </ChakraProvider>
      </Provider>
    );
  }
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
