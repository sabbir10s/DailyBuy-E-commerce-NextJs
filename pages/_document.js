import Footer from "@/components/shared/Footer";
// import MobileNavbar from "@/components/shared/MobileNavbar";
// import TopBar from "@/components/shared/TopBar";
// import TopSearchBar from "@/components/shared/TopSearchBar";
import { store } from "@/redux/app/store";
import { Head, Html, Main, NextScript } from "next/document";
import { Provider } from "react-redux";

export default function Document() {

  return (
    <Html lang="en">
      <Provider store={store}>
        <Head />
        {/* <<MobileNavbar />
        <TopBar />
        <TopSearchBar />> */}
        <body>
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Provider>
    </Html>
  );
}
