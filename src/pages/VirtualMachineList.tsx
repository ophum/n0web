import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {ListVirtualMachinesRequest, VirtualMachine} from '../n0proto.ts/provisioning/v0/virtual_machine_pb';
import {VirtualMachineServiceClient} from '../n0proto.ts/provisioning/v0/Virtual_machineServiceClientPb';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface VirtualMachineListProps {

}

export function VirtualMachineList(_: VirtualMachineListProps) {
    const classes = useStyles();
    const [isReload, setIsReload] = useState(0);
    const [vmList, setVMList] = useState([] as VirtualMachine[])
    useEffect(() => reload(), [isReload])
    const reload = () => {
        const request = new ListVirtualMachinesRequest();
        const client = new VirtualMachineServiceClient("http://localhost:8080", {});
        client.listVirtualMachines(request, {}, (err, res) => {
            if(err || res === null) {
                throw err;
            }
            const vms: VirtualMachine[] = res.getVirtualMachinesList()
            vms[1].clearSshAuthorizedKeysList()
            console.log(vms);
            setVMList([
                ...vms
            ]);
        });
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">vcpus</TableCell>
                        <TableCell align="right">memory</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {vmList.map((vm) => (
                    <TableRow key={vm.getName()}>
                        <TableCell component="th" scope="row">
                            {vm.getName()}
                        </TableCell>
                        <TableCell align="right">{vm.getLimitCpuMilliCore() / 1000}</TableCell>
                        <TableCell align="right">{vm.getLimitMemoryBytes() / 1024 / 1024}MB</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
