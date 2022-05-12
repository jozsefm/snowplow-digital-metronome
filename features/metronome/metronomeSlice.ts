import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from 'app/store'
import { localSongs } from 'constants/bpmData'
import { getSongsByBPM, RemoteSongsResponse } from 'services/songs/getSongsService'
import { RequestStatuses } from 'types/RequestStatus'
import { Song } from 'types/Song'

export interface MetronomeState {
  bpm: number | null
  localSongs: Song[]
  remoteSongs: Song[]
  fetchStatus: RequestStatuses
}

const initialState: MetronomeState = {
  bpm: null,
  localSongs: [],
  remoteSongs: [],
  fetchStatus: RequestStatuses.INITIAL,
}

export const getRemoteSongs = createAsyncThunk('metronome/getRemoteSongs', async (bpm: number) => {
  const response = await getSongsByBPM(bpm)
  return response
})

export const metronomeSlice = createSlice({
  name: 'metronome',
  initialState,
  reducers: {
    setBPM: (state, { payload }: PayloadAction<number>) => {
      if (state.bpm === payload) {
        state.bpm = null
        state.localSongs = []
        state.remoteSongs = []
        state.fetchStatus = RequestStatuses.INITIAL
      } else {
        state.bpm = payload
        state.localSongs = localSongs[payload]
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRemoteSongs.pending, (state) => {
        state.fetchStatus = RequestStatuses.LOADING
      })
      .addCase(getRemoteSongs.fulfilled, (state, action: PayloadAction<RemoteSongsResponse>) => {
        state.fetchStatus = action.payload.status
        state.remoteSongs = action.payload.songs
      })
  },
})

export const { setBPM } = metronomeSlice.actions

export const selectCurrentLocalSongs = (state: AppState) => state.metronome.localSongs
export const selectCurrentRemoteSongs = (state: AppState) => state.metronome.remoteSongs
export const selectSongsLoadingStatus = (state: AppState) => state.metronome.fetchStatus
export const selectCurrentBPM = (state: AppState) => state.metronome.bpm

export default metronomeSlice.reducer
