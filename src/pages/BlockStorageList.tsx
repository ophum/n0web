import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'

import {ListBlockStoragesRequest, BlockStorage} from '../n0proto.ts/provisioning/v0/block_storage_pb';
import {BlockStorageServiceClient} from '../n0proto.ts/provisioning/v0/Block_storageServiceClientPb';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface BlockStorageListProps {

}

export function BlockStorageList(_: BlockStorageListProps) {
    const classes = useStyles();
    const [isReload, setIsReload] = useState(0);
    const [bsList, setBSList] = useState([] as BlockStorage[])
    useEffect(() => reload(), [isReload])
    const reload = () => {
        const request = new ListBlockStoragesRequest();
        const client = new BlockStorageServiceClient("http://localhost:8080", {});
        client.listBlockStorages(request, {}, (err, res) => {
            if(err || res === null) {
                throw err;
            }
            const bss: BlockStorage[] = res.getBlockStoragesList()
            setBSList([
                ...bss
            ]);
        });
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">State</TableCell>
                        <TableCell align="right">Size</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {bsList.map((bs) => (
                    <TableRow key={bs.getName()}>
                        <TableCell component="th" scope="row">
                            {bs.getName()}
                        </TableCell>
                            <TableCell align="right">{bs.getState()}</TableCell>
                            <TableCell align="right">{bs.getLimitBytes() / 1024 / 1024 / 1024}GB</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
