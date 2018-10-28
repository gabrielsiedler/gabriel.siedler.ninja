import Link from 'next/link'
import { A, H3, P } from '../Common'

export const More = () => (
  <div>
    <H3>More?</H3>
    <P>
      You can visit my{' '}
      <A href="https://www.github.com/gabrielsiedler" rel="noopener noreferrer" target="_blank">
        github profile
      </A>{' '}
      or{' '}
      <Link href="/contact" passHref>
        <A>contact me</A>
      </Link>{' '}
      for more information.
    </P>
  </div>
)