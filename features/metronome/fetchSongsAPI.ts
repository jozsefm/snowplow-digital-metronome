import { Song } from "models/Song"

export async function fetchSongsByBPM(amount = 1): Promise<{ data: Song[] }> {
  const response = await fetch('/api/counter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  })
  const result = await response.json()

  return result
}
