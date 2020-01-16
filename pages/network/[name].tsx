import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import Layout from '../../components/Layout';
import { INetwork } from '../../interfaces/network';

const useFetch = (url: string) => {
	const [data, updateData] = React.useState<INetwork[]>([]);
	console.log(url);
  // empty array as second argument equivalent to componentDidMount
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      const data: INetwork = response.data;
      updateData([data]);
    }
    fetchData();
  }, [url]);
	console.log(data);
  return data;
};


export default function Name() {
	const router = useRouter();
	const {name} = router.query;
	const net: INetwork[] = useFetch('http://172.16.14.10:8082/api/v0/network/' + name);
	console.log(net);
	return (
		<Layout title={"n0web" + name }>
			{net.map((n: INetwork) => (
				<>
				<List>
					<ListItem>Name: {n.name}</ListItem>
					<ListItem>Ipv4_cidr: {n.ipv4_cidr}</ListItem>
					<ListItem>VLAN ID: {n.annotations['n0core/provisioning/virtual_machine/vlan_id']}</ListItem>
					<ListItem>State: {n.state}</ListItem>
				</List>
				<TextareaAutosize defaultValue={
"ApplyNetwork-" + n.name + ":\n" + 
"	type: Network\n" + 
"	action: ApplyNetwork\n" +
"	args:\n" +
"		name: " + n.name + "\n" +
"		ipv4_cidr: " + n.ipv4_cidr + "\n" +
"		annotations:\n" + 
"			n0core/provisioning/virtual_machine/vlan_id: \"" + n.annotations['n0core/provisioning/virtual_machine/vlan_id'] + "\"\n" + 
"	ignore_error: true"}>
	</TextareaAutosize>
				</>
			))}
		</Layout>
	);
}