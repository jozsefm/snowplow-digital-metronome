import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import metronomeReducer from 'state/metronome/metronomeSlice'

export function makeStore() {
  return configureStore({
    reducer: { metronome: metronomeReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store
