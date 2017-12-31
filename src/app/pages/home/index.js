import React from 'react';
import Head from 'next/head';

import { Presentation } from '../../components/Presentation';
import { Content } from '../../components/Content';
import { FlexContainer } from '../../components/Common';
import { Content as HomeContent } from '../../components/Home';

const Home = () => (
  <FlexContainer>
    <Head>
      <title>Gabriel Siedler - test</title>
      <meta type="description" content="this is a meta test" />
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
);

export default Home;
