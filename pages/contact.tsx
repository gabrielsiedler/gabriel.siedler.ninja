import Head from 'next/head'
import React from 'react'
import { FlexContainer } from '../app/components/Common'
import { Content as ContactContent } from '../app/components/Contact'
import { Content } from '../app/components/Content'
import { GAWrapper } from '../app/components/GAWrapper'
import { Presentation } from '../app/components/Presentation'

const Contact = () => (
  <FlexContainer>
    <Head>
      <title>Gabriel Siedler - Contact</title>
      <meta
        name="description"
        content="Gabriel Siedler - remote Full stack web developer personal website - Let's talk!"
      />
    </Head>
    <Presentation title="Contact" backgroundImage="/static/images/contact.jpg" maskColor="rgba(158, 158, 158, 0.7)" />
    <Content>
      <ContactContent />
    </Content>
  </FlexContainer>
)

export default GAWrapper(Contact)
