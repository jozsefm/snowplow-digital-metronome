import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'

const Title = styled.div`
  width: 100%;
  height: 134px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const TitleText = styled.p<TypographyProps>`
  ${typography}
  letter-spacing: 6px;
  text-align: center;
  text-transform: uppercase;
  height: 21px;
  font-weight: normal;
  padding: 64px 0 49px 0;
`

export default function TitleComponent() {
  return (
    <Title>
      <TitleText fontSize={1}>digital metronome</TitleText>
    </Title>
  )
}
