import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';
import { useFetcher } from '@/hooks/useFetcher';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  const { fetcher } = useFetcher();
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <div className="h-full w-full bg-orange-50">
        <div className="mx-auto flex min-h-screen w-screen flex-col border-x border-orange-200 bg-white shadow-sm lg:w-[473px]">
          <div className="flex-grow overflow-y-auto">
            <Header />
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
    </SWRConfig>
  );
}
