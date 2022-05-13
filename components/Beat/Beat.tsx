import { useAppSelector } from 'app/hooks'
import { Beat, BeatCircle, BeatText, Pulse } from 'components/Beat/elements'
import { selectCurrentBPM } from 'state/metronome/metronomeSlice'

export default function BeatComponent() {
  const currentBPM = useAppSelector(selectCurrentBPM)

  return (
    <Beat pulsating={currentBPM !== null}>
      <Pulse bg="beat" bpm={currentBPM} />
      <BeatCircle bg="beat">
        <BeatText fontSize={currentBPM ? 2 : 0} color="dark">
          {currentBPM || 'Select BPM'}
        </BeatText>
      </BeatCircle>
    </Beat>
  )
}
