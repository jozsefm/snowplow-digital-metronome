import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { makeStore } from 'app/store'
import Index from 'pages/index'
import { Provider } from 'react-redux'
import { RemoteSongsResponse } from 'services/songs/getSongsService'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'
import { RequestStatuses } from 'types/RequestStatus'

jest.mock('../services/songs/getSongsService', () => ({
  getSongsByBPM: () => {
    return new Promise<RemoteSongsResponse>((resolve) =>
      setTimeout(
        () =>
          resolve({
            songs: [{ title: 'Test Title', author: 'Dummy Author', bpm: 9001 }],
            status: RequestStatuses.SUCCESS,
          }),
        100,
      ),
    )
  },
}))

describe('<Index />', () => {
  it('renders the whole app', () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Index />
        </ThemeProvider>
      </Provider>,
    )

    expect(screen.getByText('digital metronome')).toBeInTheDocument()
    expect(screen.getByText('Songs that use this BPM:')).toBeInTheDocument()
  })

  it('Selects a BPM', async () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Index />
        </ThemeProvider>
      </Provider>,
    )

    user.click(screen.getByRole('button', { name: /74 BPM/i }))
    await expect(screen.findByText('74')).resolves.toBeInTheDocument()
  })

  it('Loads local songs by BPM', async () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Index />
        </ThemeProvider>
      </Provider>,
    )

    user.click(screen.getByRole('button', { name: /74 BPM/i }))

    await expect(screen.findByText('The Scientist (Coldplay)')).resolves.toBeInTheDocument()
    await expect(screen.findByText('Sultans of Swing (Dire Straits)')).resolves.toBeInTheDocument()
  })

  it('Loads remote songs by BPM', async () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Index />
        </ThemeProvider>
      </Provider>,
    )

    user.click(screen.getByRole('button', { name: /74 BPM/i }))

    await expect(screen.findByText('Loading more songs')).resolves.toBeInTheDocument()
    await expect(screen.findByText('Test Title (Dummy Author)')).resolves.toBeInTheDocument()
  })
})
