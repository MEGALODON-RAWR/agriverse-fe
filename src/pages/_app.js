import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import 'bootstrap/dist/css/bootstrap.min.css'
import RefreshTokenHandler from '@/components/refreshTokenHandler'
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [inetrval, setInterval] = useState(0);
  return (
    <SessionProvider session={session} refetchInterval={inetrval}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}
