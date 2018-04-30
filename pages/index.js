import Link from 'next/link';
import { Container } from 'semantic-ui-react';
import withRoot from '../components/withRoot';

const Index = () => (
  <Container textAlign="center">
    <h1>Index</h1>
    <Link href="/other"><a>Other</a></Link>
    <Link href="/another"><a>Another</a></Link>
  </Container>
)

export default withRoot(Index);
