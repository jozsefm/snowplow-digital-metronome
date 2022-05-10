import styled from 'styled-components'
import { border, BorderProps, color, ColorProps, typography, TypographyProps } from 'styled-system'
import { bpmRange } from '../constants/bpmRange'

const Buttons = styled.div`
  display: grid;
  width: 300px;
  height: 81px;
  margin: 49px 0 32px 0;
  grid-template-columns: 86px 84px 86px;
  grid-template-rows: 35px 35px; 
  column-gap: 22px;
  row-gap: 11px;
`

const Button = styled.div<ColorProps & BorderProps & TypographyProps>`
  ${color}
  ${border}
  ${typography}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  letter-spacing: 0.78px;
`

export default function ButtonsComponent() {
  return <Buttons>
    {bpmRange.map((bpm) => <Button bg='button' fontSize={0} borderRadius={0} key={bpm}>{bpm} BPM</Button>)}
  </Buttons>
}