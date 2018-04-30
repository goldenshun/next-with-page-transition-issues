import Link from 'next/link';
import withRoot from '../components/withRoot';

const Another = () => (
  <div>
    <h1>Another</h1>
    <Link href="/"><a>Home</a></Link>
  </div>
)

export default withRoot(Another);
