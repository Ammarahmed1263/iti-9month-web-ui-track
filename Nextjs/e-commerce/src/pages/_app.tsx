import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import NewsManager from "@/components/NewsManager";
import { Toaster } from "sonner";

type AppPropsWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    getLayout?: (page: ReactElement) => ReactElement;
  };
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return (
    <ThemeProvider attribute='data-theme' defaultTheme='system' enableSystem>
      <NewsManager initialNews={pageProps.news} />
      {getLayout(<Component {...pageProps} />)}
      <Toaster richColors closeButton position='top-center' toastOptions={{
        closeButton: false
      }}/>
    </ThemeProvider>
  );
}
