import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { makeStore } from 'app/store'
import Songs from 'components/Songs/Songs'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'

jest.mock('../../services/songs/getSongsService', () => ({
  getSongsByBPM: (amount: number) =>
    new Promise<{ data: number }>((resolve) => setTimeout(() => resolve({ data: amount }), 500)),
}))

describe('<Songs />', () => {
  it('renders the component', () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Songs/>  
        </ThemeProvider>
      </Provider>,
    )

    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('decrements the value', () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Songs/>  
        </ThemeProvider>
      </Provider>,
    )

    user.click(screen.getByRole('button', { name: /decrement value/i }))

    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  it('increments the value', () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Songs/>  
        </ThemeProvider>
      </Provider>,
    )

    user.click(screen.getByRole('button', { name: /increment value/i }))

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('increments by amount', () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Songs/>  
        </ThemeProvider>
      </Provider>,
    )

    user.type(screen.getByLabelText(/set increment amount/i), '{backspace}5')
    user.click(screen.getByRole('button', { name: /add amount/i }))

    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('increments async', async () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Songs/>  
        </ThemeProvider>
      </Provider>,
    )

    user.type(screen.getByLabelText(/set increment amount/i), '{backspace}3')
    user.click(screen.getByRole('button', { name: /add async/i }))

    await expect(screen.findByText('3')).resolves.toBeInTheDocument()
  })

  it('increments if amount is odd', async () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Songs/>  
        </ThemeProvider>
      </Provider>,
    )

    user.click(screen.getByRole('button', { name: /add if odd/i }))

    expect(screen.getByText('0')).toBeInTheDocument()

    user.click(screen.getByRole('button', { name: /increment value/i }))
    user.type(screen.getByLabelText(/set increment amount/i), '{backspace}8')
    user.click(screen.getByRole('button', { name: /add if odd/i }))

    await expect(screen.findByText('9')).resolves.toBeInTheDocument()
  })
})
