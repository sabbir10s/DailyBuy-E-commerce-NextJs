import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { Wrapper } from "@googlemaps/react-wrapper";

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Wrapper apiKey={process.env.MAPS_API_KEY}>
      <Component {...pageProps} />
    </Wrapper>
  </Provider>;
}
