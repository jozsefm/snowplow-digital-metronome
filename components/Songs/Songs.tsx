import { useAppSelector } from 'app/hooks'
import { SongItem, SongList, Songs, SongsText } from 'components/Songs/elements'
import { selectCurrentLocalSongs, selectCurrentRemoteSongs, selectSongsLoadingStatus } from 'features/metronome/metronomeSlice'

export default function SongsComponent() {
  const localSongs = useAppSelector(selectCurrentLocalSongs)
  const remoteSongs = useAppSelector(selectCurrentRemoteSongs)
  const loadingStatus = useAppSelector(selectSongsLoadingStatus)

  return (
    <Songs>
      <SongList bg="beat">
        <>
          <SongsText fontSize={0} color="primary">
            Songs that use this BPM:
          </SongsText>
          {localSongs.map((localSong) => {
            return (
              <SongItem key={localSong.title} fontSize={0}>
                {localSong.title} ({localSong.author})
              </SongItem>
            )
          })}
        </>
      </SongList>
    </Songs>
  )
}
