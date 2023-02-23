import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
