import '@/styles/globals.css'

import type { Metadata } from 'next'
import type { AppProps } from 'next/app'

export const metadata: Metadata = {
  title: 'Next TODO',
  description: 'Todo app built with Next.js by Farshad Hatami'
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
