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
      <Component {...pageProps} />
    </SWRConfig>
  );
}
