import styled from 'styled-components'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

export const Songs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  max-height: 119px;
`

export const SongList = styled.div<ColorProps>`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const LoadingText = styled(SongItem)`
  margin: 10px auto 0 auto;
  font-weight: bold;
  max-width: 150px;
  text-align: center;
`

export const ErrorText = styled(LoadingText)`
  color: red;
  max-width: 220px;
`

export const SongScrollArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: ${({ theme }) => `${theme.sizes.appWidth}`};

  .simplebar-scrollbar::before {
    background: white;
  }

  [data-simplebar] {
    height: 128px;
  }
`
