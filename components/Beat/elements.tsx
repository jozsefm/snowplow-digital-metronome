import styled from 'styled-components'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

export const Beat = styled.div`
  background: ${({ theme }) =>
    `radial-gradient(ellipse 47% 47% at 50% 50%, ${theme.colors.beat} 0%, rgba(100, 188, 164, 0) 100%)`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 266px;
  height: 266px;
`

export const BeatCircle = styled.div<ColorProps>`
  ${color}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 132px;
  border-radius: 50%;
`

export const BeatText = styled.p<TypographyProps & ColorProps>`
  ${typography}
  ${color}
  letter-spacing: 1.33px;
  text-align: center;
  text-transform: uppercase;
  font-weight: normal;
`
