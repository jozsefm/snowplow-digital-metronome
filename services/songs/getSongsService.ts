import { Song } from 'types/Song'
import { RequestStatuses } from '../../types/RequestStatus'

export interface RemoteSongsResponse {
  songs?: Song[]
  status: RequestStatuses
}

export async function getSongsByBPM(bpm: number): Promise<RemoteSongsResponse> {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        bpm,
      }),
    }

    const result = await fetch(`/api/songs`, options)
    const json = await result.json()

    return {
      songs: json.songs,
      status: RequestStatuses.SUCCESS,
    }
  } catch (error) {
    console.error('Error fetching remote songs: ', error)
    return {
      status: RequestStatuses.ERROR,
    }
  }
}
