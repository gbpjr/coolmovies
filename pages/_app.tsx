import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { FC, useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Head from 'next/head';
import { createStore } from '../redux';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { MainTheme } from '../src/shared/themes/main';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [store, setStore] = useState<EnhancedStore | null>(null);
  React.useEffect(() => {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: '/graphql',
    });

    const store = createStore({ epicDependencies: { client } });
    setStore(store);
  }, []);
  if (!store) return <>{'Loading...'}</>;
  return (
    <>
      <Head>
        <title>{'Coolmovies Frontend'}</title>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <ThemeProvider theme={MainTheme}>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
