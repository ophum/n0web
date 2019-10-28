import axios from 'axios';
import * as React from 'react';

import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Layout from '../../components/Layout';
import { IBlockStorage, IBlockStorages } from '../../interfaces/blockstorage';

//interface IState {
//	networks: INetwork[],
//}

const useFetch = (url: string) => {
  const [data, updateData] = React.useState<IBlockStorage[]>([]);

  // empty array as second argument equivalent to componentDidMount
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      const data: IBlockStorages = response.data;
      updateData(data.block_storages);
    }
    fetchData();
  }, [url]);
	console.log(data);
  return data;
};

export default function Index() {
	const bss = useFetch("http://172.16.14.10:8082/api/v0/block_storage");	
	console.log(bss);
	return (
		<Layout title="n0web block_storage">
			<Table aria-label="block_storage table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>StorageName</TableCell>
						<TableCell>LimitBytes</TableCell>
						<TableCell>State</TableCell>
						<TableCell>Node</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{bss.map((bs: IBlockStorage) => (
						<TableRow>
							<TableCell><Link href="">{bs.name}</Link></TableCell>
							<TableCell>{bs.storage_name}</TableCell>
							<TableCell>{Number(bs.limit_bytes) / 1024 / 1024}MB</TableCell>
							<TableCell>{bs.state}</TableCell>
							<TableCell>{bs.annotations['n0core/provisioning/block_storage/request_node_name']}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Layout>
	)
}