import styled from 'styled-components'
import { typography, TypographyProps, color, ColorProps  } from 'styled-system'

const Beat = styled.div`
  background: ${({theme}) => `radial-gradient(ellipse 47% 47% at 50% 50%, ${theme.colors.beat} 0%, rgba(100, 188, 164, 0) 100%)`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 266px;
  height: 266px;
`

const BeatCircle = styled.div<ColorProps>`
  ${color}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 132px;
  border-radius: 50%;
`

const BeatText = styled.p<TypographyProps & ColorProps>`
  ${typography}
  ${color}
  letter-spacing: 1.33px;
  text-align: center;
  text-transform: uppercase;
  height: 28px;
  font-weight: normal;
  width: 30px;
`

export default function BeatComponent({ bpm }) {
  return <Beat>
    <BeatCircle bg='beat'>
      <BeatText fontSize={2} color='dark'>{bpm}</BeatText>
    </BeatCircle>
  </Beat>
}