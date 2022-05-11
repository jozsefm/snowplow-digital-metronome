import type { NextApiHandler } from 'next'

const getSongsByBPMHandler: NextApiHandler = async (request, response) => {
  const { bpm } = JSON.parse(request.body)

  try {
    const options = {
      method: 'GET',
    }

    const result = await fetch(
      `https://api.getsongbpm.com/tempo/?bpm=${bpm}&api_key=${process.env.GETSONGBPM_API_KEY}`,
      options,
    )
    const json = await result.json()

    return response.status(200).json({
      songs: json.tempo.slice(0, 10).map((song) => ({
        title: song['song_title'],
        author: song.artist.name,
      })),
    })
  } catch (error) {
    console.error('Error fetching songs: ', error)
    return response.status(500).end()
  }
}

export default getSongsByBPMHandler
