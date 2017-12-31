import Link from 'next/link';

import { P, H3, A } from './Content.style';

const Work = () => (
  <div>
    <H3>Work</H3>
    <P>
      Currently I{"'"}m a remote worker for{' '}
      <A href="https://ae.studio" target="_blank">
        Agency Enterprise
      </A>{' '}
      and{' '}
      <A href="https://www.toptal.com" target="_blank">
        Toptal
      </A>, building systems from scratch to production for{' '}
      <Link href="/clients" passHref>
        <A>different clients</A>
      </Link>{' '}
      using mainly technologies such as Node.js(Express/Next.js), React/Redux and Styled Components.
    </P>
  </div>
);

export default Work;
