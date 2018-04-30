import Link from 'next/link';
import { Container } from 'semantic-ui-react';
import withRoot from '../components/withRoot';

const Another = () => (
  <Container textAlign="center">
    <h1>Another</h1>
    <Link href="/"><a>Home</a></Link>
  </Container>
)

export default withRoot(Another);
