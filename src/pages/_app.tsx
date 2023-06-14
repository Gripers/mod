import { useEffect, useState } from "react";
import "@/styles/globals.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import NextNProgress from "nextjs-progressbar";

import { DrawerContext } from "@/context/DrawerContext";
import { persistor, store } from "@/store/store";
import { ModalContext } from "@/context/ModalContext";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    const loader = document.getElementById("global__loader");
    if (loader)
      setTimeout(() => {
        loader.style.display = "none";
        document.body.removeAttribute("id");
      }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DrawerContext.Provider value={{ open, setOpen }}>
          <ModalContext.Provider value={{ confirmOpen, setConfirmOpen }}>
            <Layout>
              <NextNProgress
                color="black"
                height={2}
                options={{ showSpinner: false }}
              />
              <Component {...pageProps} />
            </Layout>
          </ModalContext.Provider>
        </DrawerContext.Provider>
      </PersistGate>
    </Provider>
  );
}
