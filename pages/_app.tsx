import '@/styles/globals.css';
import { Metadata } from 'next';
import type { AppProps } from 'next/app';

export const metadata: Metadata = {
  title: 'Next TODO',
  description: 'Todo app built with Next.js',
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
