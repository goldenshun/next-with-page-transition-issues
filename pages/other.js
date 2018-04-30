import Link from 'next/link';
import withRoot from '../components/withRoot';

const Other = () => (
  <div>
    <h1>Other</h1>
    <Link href="/"><a>Home</a></Link>
  </div>
)

export default withRoot(Other);
