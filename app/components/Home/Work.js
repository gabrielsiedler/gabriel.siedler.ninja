import Link from 'next/link';

import { ImagesBox, ImageLink, Image } from './Work.style';
import { A, P, H3 } from '../Common';

const Work = () => (
  <div>
    <H3>Work</H3>
    <ImagesBox>
      <ImageLink href="https://ae.studio" target="_blank">
        <Image alt="Agency Enterprise" src="/static/images/companies/aestudio-logo-light.svg" />
      </ImageLink>
      <ImageLink href="https://www.toptal.com" target="_blank">
        <Image alt="Toptal" src="/static/images/companies/full_logo.svg" />
      </ImageLink>
    </ImagesBox>
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
