import styled from 'styled-components'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

export const Songs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: auto;
`

export const SongList = styled.div<ColorProps>`
  color: white;
`

export const SongsText = styled.p<TypographyProps & ColorProps>`
  ${typography}
  ${color}
  font-family: "Roboto-Black", sans-serif;
  font-weight: 900;
  letter-spacing: 0.78px;
  text-align: center;
  margin-bottom: 5px;
`

export const SongItem = styled(SongsText)`
  font-family: 'Roboto-Regular', sans-serif;
  font-weight: 200;
  color: white;
  letter-spacing: 1.33px;
  line-height: 20px;
  font-size: 13px;
`
