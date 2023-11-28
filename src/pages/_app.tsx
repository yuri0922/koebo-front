import { Header } from "@/components/layouts/Header";
import { useFetcher } from "@/hooks/useFetcher";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

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
      <div className="w-full h-screen bg-orange-50">
        <div className="mx-auto w-[600px] bg-white border-x border-orange-200 shadow-sm">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </SWRConfig>
  );
}
