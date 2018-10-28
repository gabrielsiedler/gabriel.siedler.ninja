import Link from 'next/link'
import { A, H3, Italic, P } from '../../Common'

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
    <P small grey>
      <Italic>
        You can also look at this page's code on its{' '}
        <A href="https://github.com/gabrielsiedler/gabriel.siedler.ninja" rel="noopener noreferrer" target="_blank">
          repository
        </A>
        .
      </Italic>
    </P>
  </div>
)
