import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import {ListNetworksRequest, Network} from '../n0proto.ts/pool/v0/network_pb';
import {NetworkServiceClient} from '../n0proto.ts/pool/v0/NetworkServiceClientPb';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface NetworkListProps {

}

export function NetworkList(_: NetworkListProps) {
    const classes = useStyles();
    const history = useHistory();
    const [isReload, setIsReload] = useState(0);
    const [netList, setNetList] = useState([] as Network[])
    useEffect(() => reload(), [isReload])
    const reload = () => {
        const request = new ListNetworksRequest();
        const client = new NetworkServiceClient("http://localhost:8080", {});
        client.listNetworks(request, {}, (err, res) => {
            if(err || res === null) {
                throw err;
            }
            const nets: Network[] = res.getNetworksList()
            setNetList([
                ...nets
            ]);
        });
    }

    const onClickNewNetwork = () => {
        history.push('/networks/apply');
    }

    return (
        <Container>
            <Box>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={onClickNewNetwork}>
                        New
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">ipv4 cidr</TableCell>
                            <TableCell align="right">ipv6 cidr</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {netList.map((net) => (
                        <TableRow key={net.getName()} onClick={() => {
                            history.push('/networks/get/' + net.getName());
                        }}>
                            <TableCell component="th" scope="row">
                                {net.getName()}
                            </TableCell>
                            <TableCell align="right">{net.getIpv4Cidr()}</TableCell>
                            <TableCell align="right">{net.getIpv6Cidr()}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
