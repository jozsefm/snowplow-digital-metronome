import store from 'app/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from 'theme'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Black';
    font-style: normal;
    font-display: block;
    src: url('/fonts/Roboto-Black.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto-Regular';
    font-style: normal;
    font-display: block;
    src: url('/fonts/Roboto-Regular.woff2') format('woff2');
  }

  body {
    font-family: "Roboto-Regular", sans-serif;
    font-weight: 400;
    margin: 0;
  }

  p {
    margin: 0;
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
