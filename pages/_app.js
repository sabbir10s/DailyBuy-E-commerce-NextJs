import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useRouter } from "next/router";
import MenuBar from "@/components/shared/MenuBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <Wrapper apiKey={process.env.MAPS_API_KEY}>
        {router.pathname !== "/" && <MenuBar />}
        <Component {...pageProps} />
      </Wrapper>
      <ToastContainer />
    </Provider>
  );
}
