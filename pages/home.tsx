import Head from 'next/head'
import React from 'react'
import { FlexContainer } from '../app/components/Common'
import { Content } from '../app/components/Content'
import { GAWrapper } from '../app/components/GAWrapper'
import { Content as HomeContent } from '../app/components/Home'
import { Presentation } from '../app/components/Presentation'

const Home = () => (
  <FlexContainer>
    <Head>
      <title>Gabriel Siedler - Full stack web developer</title>
      <meta name="description" content="Gabriel Siedler - remote Full stack web developer personal website" />
    </Head>
    <Presentation
      title="Gabriel Siedler"
      subtitle="Full Stack Web Developer"
      backgroundImage="/static/images/me.png"
      maskColor="rgba(25,65,86,0.7)"
    />
    <Content>
      <HomeContent />
    </Content>
  </FlexContainer>
)

export default GAWrapper(Home)
