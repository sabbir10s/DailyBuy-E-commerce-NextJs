import Footer from "@/components/shared/Footer";
import MobileNavbar from "@/components/shared/MobileNavbar";
import TopBar from "@/components/shared/TopBar";
// import TopSearchBar from "@/components/shared/TopSearchBar";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <MobileNavbar /> */}
      <TopBar />
      {/* <TopSearchBar /> */}
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
