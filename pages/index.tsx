import Beat from 'components/Beat/Beat'
import Buttons from 'components/Buttons/Buttons'
import Main from 'components/Main'
import Metronome from 'components/Metronome'
import Songs from 'components/Songs/Songs'
import Title from 'components/Title'
import type { NextPage } from 'next'
import Head from 'next/head'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Snowplow Digital Metronome</title>
      </Head>
      <Main>
        <Metronome>
          <Title/>
          <Beat/>
          <Buttons/>
          <Songs/>
        </Metronome>
      </Main>
    </>
  )
}

export default IndexPage
