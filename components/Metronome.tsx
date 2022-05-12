import styled from 'styled-components'

const Metronome = styled.div`
  width: ${({ theme }) => `${theme.sizes.appWidth}`};
  height: 681px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function MainComponent({ ...props }) {
  return <Metronome {...props} />
}
