import axios from 'axios';
import * as React from 'react';

import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Layout from '../../components/Layout';
import { INode, INodes } from '../../interfaces/node';

//interface IState {
//	networks: INetwork[],
//}

const useFetch = (url: string) => {
  const [data, updateData] = React.useState<INode[]>([]);

  // empty array as second argument equivalent to componentDidMount
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      const data: INodes = response.data;
      updateData(data.nodes);
    }
    fetchData();
  }, [url]);
	console.log(data);
  return data;
};

export default function Index() {
	const nodes = useFetch("http://172.16.14.10:8082/api/v0/node");	
	console.log(nodes);
	return (
		<Layout title="n0web node">
			<Table aria-label="network table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Address</TableCell>
						<TableCell>Serial</TableCell>
						<TableCell>State</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{nodes.map((node: INode) => (
						<TableRow>
							<TableCell><Link href="">{node.name}</Link></TableCell>
							<TableCell>{node.address}</TableCell>
							<TableCell>{node.serial}</TableCell>
							<TableCell>{node.state}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Layout>
	)
}