import Footer from "@/components/shared/Footer";
import MobileNavbar from "@/components/shared/MobileNavbar";
import TopBar from "@/components/shared/TopBar";
import { store } from "@/redux/app/store";
import TopSearchBar from "@/components/shared/TopSearchBar";
import { Head, Html, Main, NextScript } from "next/document";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

export default function Document() {
  // const router = useRouter()
  // console.log(router.pathname);
  return (
    <Html lang="en">
      <Provider store={store}>
        <Head />
        <MobileNavbar />
        <TopBar />
        <TopSearchBar />
        <body>
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Provider>
    </Html>
  );
}
