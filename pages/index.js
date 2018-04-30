import Link from 'next/link';
import withRoot from '../components/withRoot';
console.log(withRoot);

const Index = () => (
  <div>
    <h1>Index</h1>
    <Link href="/other"><a>Other</a></Link>
    <Link href="/another"><a>Another</a></Link>
  </div>
)

export default withRoot(Index);
