import App from "next/app";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { store } from "../redux";
import React from "react";
import "../styles/globals.css";
import { extendTheme, StylesProvider } from "@chakra-ui/react";
import { Chakra } from "../styles/Chakra";
// import { NavbarContainer } from "../components/Navbar/Navbar.container";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    200: "#384d",
  },
};

const theme = extendTheme({ colors });

const MyApp = (props) => {

    const { Component, appProps } = props
    // console.log(Component, appProps);
    return (
      <Provider store={store}>
        <Chakra theme={theme} cookies={appProps?.cookies}>
          <Component {...appProps} />
        </Chakra>
      </Provider>
    );
  
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

MyApp.getInitialProps = async ({ Component, ctx })=>{
  const appProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  console.log(appProps);
  console.log("HI I AM _APP.JS");
  return { appProps };
}

export default wrapper.withRedux(MyApp)
