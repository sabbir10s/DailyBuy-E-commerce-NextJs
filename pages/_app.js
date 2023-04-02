import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { Wrapper } from "@googlemaps/react-wrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/shared/Navbar/Navbar";


export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Wrapper apiKey={process.env.MAPS_API_KEY}>

      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />
    </Wrapper>
  </Provider>;
}
