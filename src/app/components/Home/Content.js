import Link from 'next/link';

import { Environment } from './';
import { ContentContainer, H2, H3, B, A } from './Content.style';

const Content = () => (
  <ContentContainer>
    <H2>Olá!</H2>
    <p>
      I am <B>Gabriel Siedler</B>, a full stack web developer from Brazil.
    </p>
    <p>
      I love developing SPA, making everything mobile friendly and creating reliable and
      good-to-maintain systems, seeking best practices and a good and clean code with top-noch
      technologies.
    </p>
    <p>
      I have full stack experience with 5+ years focused only in modern web technologies such as
      React/Redux, Angular, Node.js, CSS3, HTML5, Docker and MongoDB.
    </p>
    <p>
      Currently I{"'"}m a remote worker for{' '}
      <Link href="/work#ae" passHref>
        <A>Agency Enterprise</A>
      </Link>{' '}
      and{' '}
      <Link href="/work#toptal" passHref>
        <A>Toptal</A>
      </Link>, building systems from scratch to production for{' '}
      <Link href="/clients" passHref>
        <A>different clients</A>
      </Link>{' '}
      using mainly technologies such as Node.js(Express/Next.js), React/Redux and Styled Components.
    </p>
    <H3>Environment</H3>
    <p>My comfy place - or development eco-system - can be resumed by the fancy images below:</p>
    <Environment />
    <H3>More?</H3>
    <p>
      You can visit my{' '}
      <A href="https://www.github.com/gabrielsiedler" rel="noopener noreferrer" target="_blank">
        github profile
      </A>{' '}
      or{' '}
      <Link href="/contact" passHref>
        <A>contact me</A>
      </Link>{' '}
      for more information.
    </p>
  </ContentContainer>
);

export default Content;
