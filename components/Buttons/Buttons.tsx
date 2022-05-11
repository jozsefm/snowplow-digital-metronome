import { useAppDispatch, useAppSelector } from 'app/hooks'
import { Button, Buttons } from 'components/Buttons/elements'
import { bpms } from 'constants/bpmData'
import {
  selectCurrentBPM, setBPM
} from 'features/metronome/metronomeSlice'
import { useMemo } from 'react'

export default function ButtonsComponent() {
  const dispatch = useAppDispatch()
  const currentBPM = useAppSelector(selectCurrentBPM)

  const handleButtonClickMap = useMemo(() => {
    return bpms.reduce((acc, bpm) => {
      acc[bpm] = () => dispatch(setBPM(bpm))
      return acc
    }, {} )
  }, [dispatch])

  return (
    <Buttons>
      {bpms.map((bpm) => (
        <Button current={bpm === currentBPM} fontSize={0} borderRadius={0} key={bpm} onClick={handleButtonClickMap[bpm]}>
          {bpm} BPM
        </Button>
      ))}
    </Buttons>
  )
}
