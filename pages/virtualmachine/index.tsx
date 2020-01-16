import axios from 'axios';
import * as React from 'react';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Layout from '../../components/Layout';
import { INic, IVirtualMachine, IVirtualMachines } from '../../interfaces/virtualmachine';
import { apiBaseURL } from '../../lib/config';

//interface IState {
//	networks: INetwork[],
//}

const useFetch = (url: string) => {
  const [data, updateData] = React.useState<IVirtualMachine[]>([]);

  // empty array as second argument equivalent to componentDidMount
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      const data: IVirtualMachines = response.data;
      updateData(data.virtual_machines);
    }
    fetchData();
  }, [url]);
	console.log(data);
  return data;
};

export default function Index() {
	const vms = useFetch(apiBaseURL + "/api/v0/virtual_machine");	
	console.log(vms);
	return (
		<Layout title="n0web virtual_machine">
			<Table aria-label="virtual_machine table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>ComputeName</TableCell>
						<TableCell>Vcpus</TableCell>
						<TableCell>Memory</TableCell>
						<TableCell>Nics</TableCell>
						<TableCell>State</TableCell>
						<TableCell>Node</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{vms.sort((a: IVirtualMachine, b: IVirtualMachine) => {
						const key = 'n0core/provisioning/virtual_machine/request_node_name';
						if(a.annotations[key] > b.annotations[key]) {
							return 1;
						}else if(a.annotations[key] < b.annotations[key]) {
							return -1;
						}
						return 0;
					}).map((vm: IVirtualMachine) => (
						<TableRow>
							<TableCell><Link href="">{vm.name}</Link></TableCell>
							<TableCell>{vm.compute_name}</TableCell>
							<TableCell>{vm.limit_cpu_milli_core / 1000}</TableCell>
							<TableCell>{Number(vm.limit_memory_bytes) / 1024 / 1024 + "MB"}</TableCell>
							<TableCell>
									{vm.nics.map((nic: INic) => (
										<>
									<ListItem>{nic.network_name}</ListItem>
									<List>
										<ListItem>{nic.hardware_address}</ListItem>
										<ListItem>{nic.ipv4_address}</ListItem>
									</List>
									</>
									))}
							</TableCell>
							<TableCell>{vm.state}</TableCell>
							<TableCell>{vm.annotations['n0core/provisioning/virtual_machine/request_node_name']}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Layout>
	)
}