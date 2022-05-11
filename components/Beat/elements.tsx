import styled, { keyframes } from 'styled-components'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

const pulsating = keyframes`
  to {
    transform: scale(2);
    opacity: 0;
  }
`

export const Beat = styled.div<{ pulsating: boolean }>`
  ::before {
    content: "";
    display: block;
    background: ${({ theme }) =>
      `radial-gradient(ellipse 47% 47% at 50% 50%, ${theme.colors.beat} 0%, rgba(100, 188, 164, 0) 100%)`};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    transition: transform ease-out 300ms;
    transform: ${({ pulsating }) =>
      pulsating ? 'scale(0)' : 'scale(1)'};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 266px;
  height: 266px;
  position: relative;
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
  z-index: 1;
`

export const Pulse = styled.div<ColorProps & { bpm: number | null }>`
  ${color}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  z-index: 1;
  animation: ${pulsating} ${({ bpm }) => 60 / bpm}s linear infinite;
  position: absolute;
`

export const BeatText = styled.p<TypographyProps & ColorProps>`
  ${typography}
  ${color}
  letter-spacing: 1.33px;
  text-align: center;
  text-transform: uppercase;
  font-weight: normal;
  user-select: none;
`
