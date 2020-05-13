
import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {DeleteVirtualMachineRequest, GetVirtualMachineRequest, VirtualMachine} from '../../n0proto.ts/provisioning/v0/virtual_machine_pb';
import {VirtualMachineServiceClient} from '../../n0proto.ts/provisioning/v0/Virtual_machineServiceClientPb';
import { Card, CardContent } from '@material-ui/core';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  deleteButton: {
      marginTop: '10px',
  },
});

interface GetVirtualMachineProps{

}

export function GetVirtualMachine(_: GetVirtualMachineProps) {
    const classes = useStyles();
    const history = useHistory();
    const {name} = useParams();

    const [vm, setVM] = useState(new VirtualMachine());

    const reload = () => {
        const request = new GetVirtualMachineRequest();
        request.setName(name);
        const client = new VirtualMachineServiceClient("http://localhost:8080", {});
        client.getVirtualMachine(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }

            setVM(res);
        })
    }
    useEffect(() => reload(), []);

    const onClickDeleteButton = () => {
        const request = new DeleteVirtualMachineRequest()
        request.setName(vm.getName());
        const client = new VirtualMachineServiceClient("http://localhost:8080", {});
        client.deleteVirtualMachine(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }

            history.push('/virtualmachines');
        })
    }

    return (
        <Container>
            <Typography
                variant="h4">
                    Get Network
            </Typography>
            <Card>
                <CardContent>
                    <Typography variant="h6">
                        Name
                    </Typography>
                    <Typography variant="body1">
                        {vm.getName()}
                    </Typography>
                    <Typography variant="h6">
                        vcpus
                    </Typography>
                    <Typography variant="body1">
                        {vm.getLimitCpuMilliCore() / 1000}
                    </Typography>
                    <Typography variant="h6">
                        memory(MB)
                    </Typography>
                    <Typography variant="body1">
                        {vm.getLimitMemoryBytes() / 1024 / 1024}
                    </Typography>
                    <Button
                        className={classes.deleteButton}
                        variant="outlined"
                        color="secondary"
                        onClick={onClickDeleteButton}>
                            Delete
                    </Button>
                </CardContent>
            </Card>
        </Container>
    )
}
