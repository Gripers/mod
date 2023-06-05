import { useState } from 'react';
import '@/styles/globals.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NextNProgress from 'nextjs-progressbar';

import { DrawerContext } from '@/context/DrawerContext';
import { persistor, store } from '@/store/store';
import Layout from '@/components/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DrawerContext.Provider value={{ open, setOpen }}>
          <Layout>
            <NextNProgress
              color='black'
              height={2}
              options={{ showSpinner: false }}
            />
            <Component {...pageProps} />
          </Layout>
        </DrawerContext.Provider>
      </PersistGate>
    </Provider>
  );
}
