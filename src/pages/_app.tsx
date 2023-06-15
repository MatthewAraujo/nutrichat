import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChatGptProvider } from '../contexts/ChatGPTContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChatGptProvider>
      <Component {...pageProps} />
    </ChatGptProvider>
  )
}
