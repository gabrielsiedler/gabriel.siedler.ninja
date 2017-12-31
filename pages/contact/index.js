import React from 'react';
import Head from 'next/head';

import { Presentation } from '../../app/components/Presentation';
import { Content } from '../../app/components/Content';
import { FlexContainer } from '../../app/components/Common';

const Contact = () => (
  <FlexContainer>
    <Head>
      <title>Gabriel Siedler - Contact</title>
      <meta type="description" content="" />
    </Head>
    <Presentation
      title="Contact"
      backgroundImage="/static/images/raven.jpg"
      maskColor="rgba(158, 158, 158, 0.4)"
    />
    <Content>
      contact
    </Content>
  </FlexContainer>
);

export default Contact;
