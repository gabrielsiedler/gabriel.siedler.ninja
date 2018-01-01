import Link from 'next/link';

import { B, P } from '../Common';
import { A } from './Intro.style';

const Intro = () => (
  <div>
    <P>
      Here is a list of some of the clients I{"'"}ve worked in the past years. The work I{"'"}ve
      done for some of those companies was indirect, through another company, but for each one of
      them I could say I{"'"}ve worked in a product owned by them.
    </P>
    <P>
      <B>Disclaimer:</B> The fact that the company is listed here doesn{"'"}t mean that I{"'"}m
      currently connected to the company in any way. If any doubts or concerns,{' '}
      <Link href="/contact" passHref>
        <A>please contact me.</A>
      </Link>
    </P>
  </div>
);

export default Intro;
