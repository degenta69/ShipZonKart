import App from "next/app";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { store } from "../redux";
import React from "react";
import "../styles/globals.css";

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
        <Component {...appProps} />
      </Provider>
    );
  }
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
