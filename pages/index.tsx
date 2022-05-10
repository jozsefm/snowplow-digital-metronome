import type { NextPage } from 'next'
import Head from 'next/head'
import Beat from '../components/Beat'
import Buttons from '../components/Buttons'
import Main from '../components/Main'
import Metronome from '../components/Metronome'
import Songs from '../components/Songs'
import Title from '../components/Title'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Snowplow Digital Metronome</title>
      </Head>
      <Main>
        <Metronome>
          <Title />
          <Beat bpm={72} />
          <Buttons />
          <Songs songs={[]}/>
        </Metronome>
      </Main>
    </>
  )
}

export default IndexPage
