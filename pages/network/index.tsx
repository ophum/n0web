import axios from 'axios';
import * as React from 'react';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Layout from '../../components/Layout';
import { INetwork, INetworks } from '../../interfaces/network';

//interface IState {
//	networks: INetwork[],
//}

const useFetch = (url: string) => {
  const [data, updateData] = React.useState<INetwork[]>([]);

  // empty array as second argument equivalent to componentDidMount
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      const data: INetworks = response.data;
      updateData(data.networks);
    }
    fetchData();
  }, [url]);
	console.log(data);
  return data;
};

export default function Index() {
	const networks = useFetch("http://172.16.14.10:8082/api/v0/network");	
	console.log(networks);
	return (
		<Layout title="n0web network">
			<Button variant="contained" color="primary">作成</Button>
			<Table aria-label="network table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>ipv4 cidr</TableCell>
						<TableCell>ipv6 cidr</TableCell>
						<TableCell>VLAN ID</TableCell>
						<TableCell>Description</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{networks.map((net: INetwork) => (
						<TableRow>
							<TableCell><Link href="">{net.name}</Link></TableCell>
							<TableCell>{net.ipv4_cidr}</TableCell>
							<TableCell></TableCell>
							<TableCell>{net.annotations['n0core/provisioning/virtual_machine/vlan_id']}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Layout>
	)
}