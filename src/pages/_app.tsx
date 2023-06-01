import { useState } from 'react';
import '@/styles/globals.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { DrawerContext } from '@/context/DrawerContext';
import Layout from '@/components/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);

  return (
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
  );
}
