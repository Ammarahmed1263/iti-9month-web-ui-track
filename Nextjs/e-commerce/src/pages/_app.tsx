import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import NewsManager from "@/components/NewsManager";
import { Toaster } from "sonner";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

type AppPropsWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    getLayout?: (page: ReactElement) => ReactElement;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return (
    <div className={`${sans.variable} ${serif.variable} font-sans antialiased`}>
      <ThemeProvider attribute='data-theme' defaultTheme='system' enableSystem>
        <NewsManager initialNews={pageProps.news} />
        {getLayout(<Component {...pageProps} />)}
        <Toaster
          richColors
          closeButton
          position='top-center'
          toastOptions={{
            closeButton: false,
            className: "!rounded-none !font-sans border border-border",
          }}
        />
      </ThemeProvider>
    </div>
  );
}
