import styled from 'styled-components'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

const Songs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: auto;
`

const SongList = styled.div<ColorProps>`
  color: white;
`

const SongsText = styled.p<TypographyProps & ColorProps>`
  ${typography}
  ${color}
  font-family: "Roboto-Black", sans-serif;
  font-weight: 900;
  letter-spacing: 0.78px;
  text-align: center;
`

export default function SongsComponent({ songs }) {
  return (
    <Songs>
      <SongList bg="beat">
        <SongsText fontSize={0} color="primary">
          Songs that use this BPM:
        </SongsText>
        {songs}
      </SongList>
    </Songs>
  )
}
