import type { NextPage } from 'next'
import Head from 'next/head'
import Beat from '../components/Beat'
import Buttons from '../components/Buttons'
import Main from '../components/Main'
import Metronome from '../components/Metronome'
import Title from '../components/Title'

const IndexPage: NextPage = () => {
  return (
    <Main>
      <Head>
        <title>Snowplow Digital Metronome</title>
      </Head>
      <Metronome>
        <Title />
        <Beat bpm={72} />
        <Buttons />
      </Metronome>
    </Main>
  )
}

export default IndexPage