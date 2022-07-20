import '@styles/globals.css';
import '@styles/Table.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AppProvider } from '@context/AppCtx';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
