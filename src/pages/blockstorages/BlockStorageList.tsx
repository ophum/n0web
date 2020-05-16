import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'

import {ListBlockStoragesRequest, BlockStorage} from '../../n0proto.ts/provisioning/v0/block_storage_pb';
import {BlockStorageServiceClient} from '../../n0proto.ts/provisioning/v0/Block_storageServiceClientPb';
import { useHistory } from 'react-router-dom';
import { Config } from '../../config/config';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface BlockStorageListProps {

}

export function BlockStorageList(_: BlockStorageListProps) {
    const classes = useStyles();
    const history = useHistory();
    const [isReload, setIsReload] = useState(0);
    const [bsList, setBSList] = useState([] as BlockStorage[])
    useEffect(() => reload(), [isReload])
    const reload = () => {
        const request = new ListBlockStoragesRequest();
        const client = new BlockStorageServiceClient(Config.ProxyURL, {});
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
                    <TableRow key={bs.getName()} onClick={(() => history.push(`/blockstorages/get/${bs.getName()}`))}>
                        <TableCell component="th" scope="row">
                            {bs.getName()}
                        </TableCell>
                            <TableCell align="right">{getStateString(bs.getState())}</TableCell>
                            <TableCell align="right">{bs.getLimitBytes() / 1024 / 1024 / 1024}GB</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function getStateString(state: BlockStorage.BlockStorageState): string {
    const s = BlockStorage.BlockStorageState;
    switch(state){
    case s.AVAILABLE:
        return "AVAILABLE";
    case s.BLOCK_STORAGE_UNSPECIFIED:
        return "BLOCK_STORAGE_UNSPECIFIED";
    case s.DELETED:
        return "DELETED";
    case s.IN_USE:
        return "IN_USE";
    case s.PENDING:
        return "PENDING";
    case s.PROTECTED:
        return "PROTECTED";
    }
    return "UNKNOWN";
}
