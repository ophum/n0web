import axios from 'axios';
import Link from 'next/link';
import * as React from 'react';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Layout from '../../components/Layout';
import { INetwork, INetworks } from '../../interfaces/network';
import { apiBaseURL } from '../../lib/config';

//interface IState {
//	networks: INetwork[],
//}

const useFetch = (url: string) => {
  const [data, updateData] = React.useState<INetwork[]>([]);

  // empty array as second argument equivalent to componentDidMount
  React.useEffect(() => {
    async function fetchData() {
			const response = await axios.get(url);
			//console.log(response.data.networks[0].annotations['n0core/provisioning/virtual_machine/vlan_id']);
      const data: INetworks = response.data;
      updateData(data.networks);
    }
    fetchData();
	}, [url]);
  return data;
};

export default function Index() {
	const networks: INetwork[] = useFetch(apiBaseURL + "/api/v0/network");	
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
					{networks.sort((a: INetwork, b: INetwork) => {
						const key = 'n0core/provisioning/virtual_machine/vlan_id';
						if(a.annotations && b.annotations) {
							return Number(a.annotations[key]) - Number(b.annotations[key]);
						}
						return 0;
					}).map((net: INetwork) => (
						<TableRow key={net.name}>
							<TableCell>
								<Link as={"/network/" + net.name} href="/network/[name]">
									{net.name}
								</Link>
							</TableCell>
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
