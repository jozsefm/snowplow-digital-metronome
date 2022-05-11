import { Song } from 'types/Song'
import bpmJson from './bpm.json'

export const bpms = [72, 74, 82, 84, 128, 138]

export interface Songs {
  [key: number]: Song[]
}

export const localSongs: Songs = bpmJson.reduce((acc, song) => {
  const [title, author, bpm] = song

  if (!acc[bpm]) {
    acc[bpm] = []
  }

  acc[bpm] = [...acc[bpm], { title, author, bpm }]

  return acc
}, {})
