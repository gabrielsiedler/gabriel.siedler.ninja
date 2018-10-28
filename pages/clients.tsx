import Head from 'next/head'
import React from 'react'
import { Content as ClientsContent } from '../app/components/Clients'
import { FlexContainer } from '../app/components/Common'
import { Content } from '../app/components/Content'
import { GAWrapper } from '../app/components/GAWrapper'
import { Presentation } from '../app/components/Presentation'

const Clients = () => (
  <FlexContainer>
    <Head>
      <title>Gabriel Siedler - Clients</title>
      <meta name="description" content="Gabriel Siedler - remote Full stack web developer personal website - Clients" />
    </Head>
    <Presentation title="Clients" backgroundImage="/static/images/clients.jpg" maskColor="rgba(0, 0, 0, 0.5)" />
    <Content>
      <ClientsContent />
    </Content>
  </FlexContainer>
)

export default GAWrapper(Clients)
