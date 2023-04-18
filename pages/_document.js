
import { store } from "@/redux/app/store";
import { Head, Html, Main, NextScript } from "next/document";
import { Provider } from "react-redux";

export default function Document() {

  return (
    <Html lang="en">
      <Provider store={store}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Provider>
    </Html>
  );
}
