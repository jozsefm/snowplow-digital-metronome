import {
  ThreeDots
} from '@agney/react-loading';
import { useAppSelector } from 'app/hooks';
import { ErrorText, LoadingText, SongItem, SongList, Songs, SongScrollArea, SongsText } from 'components/Songs/elements';
import { selectCurrentLocalSongs, selectCurrentRemoteSongs, selectSongsLoadingStatus } from 'features/metronome/metronomeSlice';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { RequestStatuses } from 'types/RequestStatus';

export default function SongsComponent() {
  const localSongs = useAppSelector(selectCurrentLocalSongs)
  const remoteSongs = useAppSelector(selectCurrentRemoteSongs)
  const loadingStatus = useAppSelector(selectSongsLoadingStatus)

  return (
    <Songs>
      <SongList bg="beat">
        <SongsText fontSize={0} color="primary">
          Songs that use this BPM:
        </SongsText>
        <SongScrollArea>
          <SimpleBar autoHide={false}>
            <>
              {localSongs.map((localSong) => {
                return (
                  <SongItem key={localSong.title} fontSize={0}>
                    {localSong.title} ({localSong.author})
                  </SongItem>
                )
              })}
              {loadingStatus === RequestStatuses.LOADING
                ? <>
                    <LoadingText>Loading more songs</LoadingText>
                    <ThreeDots width='32px' />
                  </>
                : null
              }
              {loadingStatus === RequestStatuses.SUCCESS
                ? remoteSongs.map((localSong) => {
                  return (
                    <SongItem key={localSong.title} fontSize={0}>
                      {localSong.title} ({localSong.author})
                    </SongItem>
                  )
                })
                : null
              }
              {loadingStatus === RequestStatuses.ERROR
                ? <ErrorText>
                    Failed to load more songs. 😲 Please try again!
                </ErrorText>
                : null
              }
            </>
          </SimpleBar>
        </SongScrollArea>
      </SongList>
    </Songs>
  )
}
