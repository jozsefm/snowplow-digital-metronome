import styled from 'styled-components'
import { color, ColorProps } from 'styled-system'

const Main = styled.main<ColorProps>`
  ${color}
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export default function MainComponent({ ...props }) {
  return <Main bg='dark' color='primary' {...props} />
}