import styled from 'styled-components'

const Metronome = styled.div`
  width: 476px;
  height: 681px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function MainComponent({ ...props }) {
  return <Metronome {...props} />
}
