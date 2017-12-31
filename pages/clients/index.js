import React from 'react';
import Head from 'next/head';

import { Presentation } from '../../app/components/Presentation';
import { Content } from '../../app/components/Content';
import { FlexContainer } from '../../app/components/Common';

const Clients = () => (
  <FlexContainer>
    <Head>
      <title>Gabriel Siedler - Clients</title>
      <meta type="description" content="" />
    </Head>
    <Presentation
      title="Gabriel Siedler"
      subtitle="Full Stack Web Developer"
      backgroundImage="/static/images/me.png"
      maskColor="rgba(25,65,86,0.7)"
    />
    <Content>
      test
    </Content>
  </FlexContainer>
);

export default Clients;
