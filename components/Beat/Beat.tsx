import { useAppSelector } from 'app/hooks';
import { Beat, BeatCircle, BeatText } from "components/Beat/elements";
import {
  selectCurrentBPM
} from 'features/metronome/metronomeSlice';

export default function BeatComponent() {
  const currentBPM = useAppSelector(selectCurrentBPM)

  return (
    <Beat>
      <BeatCircle bg="beat">
        <BeatText fontSize={currentBPM ? 2 : 0} color="dark">
          {currentBPM || 'Select BPM'}
        </BeatText>
      </BeatCircle>
    </Beat>
  )
}
