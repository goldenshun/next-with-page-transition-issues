import Link from 'next/link';
import { Table } from 'semantic-ui-react';
import withRoot from '../components/withRoot';

const Another = () => {
  console.log('render Another');
  return (
    <div>
      <Table definition>
        <Table.Body>
          <Table.Row><Table.Cell>Cell</Table.Cell></Table.Row>
        </Table.Body>
      </Table>
      <Link href="/"><a>Home</a></Link>
    </div>
  );
}

Another.displayName = 'Another';

export default withRoot(Another);
