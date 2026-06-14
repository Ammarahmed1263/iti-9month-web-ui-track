import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";

type AppPropsWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    getLayout?: (page: ReactElement) => ReactElement;
  };
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return getLayout(<Component {...pageProps} />);
}
