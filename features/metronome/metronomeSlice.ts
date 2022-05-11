import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from 'app/store'
import { localSongs } from 'constants/bpmData'
import { Song } from 'models/Song'
import { getSongsByBPM } from 'services/songs/getSongsService'

export interface MetronomeState {
  bpm: number | null
  localSongs: Song[]
  remoteSongs: Song[]
  fetchStatus: 'idle' | 'loading' | 'failed'
}

const initialState: MetronomeState = {
  bpm: null,
  localSongs: [],
  remoteSongs: [],
  fetchStatus: 'idle'
}

export const getRemoteSongs = createAsyncThunk(
  'metronome/getRemoteSongs',
  async (bpm: number) => {
    const response = await getSongsByBPM(bpm)
    return response.songs
  },
)

export const metronomeSlice = createSlice({
  name: 'metronome',
  initialState,
  reducers: {
    setBPM: (state, { payload }: PayloadAction<number>) => {
      if (state.bpm === payload) {
        state.bpm = null
        state.localSongs = []
      } else {
        state.bpm = payload
        // I map it to an object literal to avoid puttin non-serializable data into the store
        // see: https://redux.js.org/style-guide/#do-not-put-non-serializable-values-in-state-or-actions
        state.localSongs = localSongs[payload].map(song => ({...song}))
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRemoteSongs.pending, (state) => {
        state.fetchStatus = 'loading'
      })
      .addCase(getRemoteSongs.fulfilled, (state, action: PayloadAction<Song[]>) => {
        state.fetchStatus = 'idle'
        state.remoteSongs = action.payload
      })
  },
})

export const { setBPM } = metronomeSlice.actions

export const selectCurrentLocalSongs = (state: AppState) => state.metronome.localSongs
export const selectCurrentRemoteSongs = (state: AppState) => state.metronome.remoteSongs
export const selectSongsLoadingStatus = (state: AppState) => state.metronome.fetchStatus
export const selectCurrentBPM = (state: AppState) => state.metronome.bpm

export default metronomeSlice.reducer
