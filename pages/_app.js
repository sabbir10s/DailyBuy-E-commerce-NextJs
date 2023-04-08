import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { Wrapper } from "@googlemaps/react-wrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer";
import { useRouter } from "next/router";


import React from 'react';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Provider store={store}>
      <Wrapper apiKey={process.env.MAPS_API_KEY}>
        {
          router.pathname !== "/404" && <Navbar />
        }
        <Component {...pageProps} />
        {
          router.pathname !== "/404" && <Footer />
        }
        <ToastContainer />
      </Wrapper>
    </Provider>
  );
};

export default App;
