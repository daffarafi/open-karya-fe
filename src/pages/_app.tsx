import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer, Navbar } from '@elements'
import { AuthContextProvider } from '@contexts'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthContextProvider>
            <Head>
                <title>Open Karya | By Dapa</title>
                <meta
                    name="description"
                    content="Kumpulan Karya Anak Bangsa Indonesia"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="w-full min-h-screen bg-landing-bg flex flex-col gap-20">
                <Component {...pageProps} />
            </main>
            <Footer />
        </AuthContextProvider>
    )
}
