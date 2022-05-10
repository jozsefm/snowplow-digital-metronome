import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from '../app/store'
import { theme } from '../theme'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Black';
    font-style: normal;
    font-display: optional;
    src: url('/fonts/Roboto-Black.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Regular';
    font-style: normal;
    font-display: optional;
    src: url('/fonts/Roboto-Regular.woff2') format('woff2');
  }

  body {
    font-family: 'Roboto Regular', sans-serif;
    font-weight: 400;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  )
}
