import Link from 'next/link';
import { Container } from 'semantic-ui-react';
import withRoot from '../components/withRoot';

const Other = () => (
  <Container textAlign="center">
    <h1>Other</h1>
    <Link href="/"><a>Home</a></Link>
  </Container>
)

Other.displayName = 'Other';

export default withRoot(Other);
