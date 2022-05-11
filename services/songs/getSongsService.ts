import { Song } from "models/Song"
import { RequestStatuses } from "../serviceTypes"

export async function getSongsByBPM(bpm: number): Promise<{ songs?: Song[], status: RequestStatuses }> {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        bpm
      }) 
    }

    const result = await fetch(`/api/songs`, options)
    const json = await result.json()
    const serverAnswer = {
      status: result.status,
      ...json
    }
    return mapAnswer(serverAnswer)
  } catch (error) {
    console.error('Error sending answer: ', error)
    return {
      status: RequestStatuses.ERROR,
    }
  }
}

function mapAnswer(serverResponse) {
  console.log(serverResponse)
  return {
    songs: [new Song('', '', '')],
    status: RequestStatuses.SUCCESS
  }
}