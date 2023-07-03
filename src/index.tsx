import 'inter-ui'
import React, { StrictMode } from 'react'
import { isMobile } from 'react-device-detect'
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import './i18n'
import './index.css'
import App from './pages/App'
import store from './state'
import UserUpdater from './state/user/updater'
import ProtocolUpdater from './state/protocol/updater'
import TokenUpdater from './state/tokens/updater'
import PoolUpdater from './state/pools/updater'
import ApplicationUpdater from './state/application/updater'
import ListUpdater from './state/lists/updater'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'
import { ApolloProvider } from '@apollo/client/react'
import { client } from 'apollo/client'
import WebContextProvider from './utils/WebContextProvider.js';

const GOOGLE_ANALYTICS_ID: string | undefined = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
if (typeof GOOGLE_ANALYTICS_ID === 'string') {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID)
  ReactGA.set({
    customBrowserType: !isMobile
      ? 'desktop'
      : 'web3' in window || 'ethereum' in window
      ? 'mobileWeb3'
      : 'mobileRegular',
  })
} else {
  ReactGA.initialize('test', { testMode: true, debug: true })
}

window.addEventListener('error', (error) => {
  ReactGA.exception({
    description: `${error.message} @ ${error.filename}:${error.lineno}:${error.colno}`,
    fatal: true,
  })
})

function Updaters() {
  return (
    <>
      <ListUpdater />
      <UserUpdater />
      <ProtocolUpdater />
      <TokenUpdater />
      <PoolUpdater />
      <ApplicationUpdater />
    </>
  )
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <FixedGlobalStyle />
    <ApolloProvider client={client}>
      <WebContextProvider>
        <Provider store={store}>
          <Updaters />
          <ThemeProvider>
            <ThemedGlobalStyle />
            <HashRouter>
              <App />
            </HashRouter>
          </ThemeProvider>
        </Provider>
      </WebContextProvider>
    </ApolloProvider>
  </StrictMode>
);
