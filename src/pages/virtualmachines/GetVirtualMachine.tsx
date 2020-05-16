
import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {DeleteVirtualMachineRequest, GetVirtualMachineRequest, VirtualMachine} from '../../n0proto.ts/provisioning/v0/virtual_machine_pb';
import {VirtualMachineServiceClient} from '../../n0proto.ts/provisioning/v0/Virtual_machineServiceClientPb';
import { Card, CardContent } from '@material-ui/core';
import { DeleteConfirmDialog } from '../../components/DeleteConfirmDialog';
import {Config} from '../../config/config';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  basicButton: {
      marginTop: '10px',
  },
});

interface GetVirtualMachineProps{

}

export function GetVirtualMachine(_: GetVirtualMachineProps) {
    const classes = useStyles();
    const history = useHistory();
    const {name} = useParams();

    const [loc, setLoc] = useState("");
    const [vm, setVM] = useState(new VirtualMachine());

    const reload = () => {
        const request = new GetVirtualMachineRequest();
        request.setName(name);
        const client = new VirtualMachineServiceClient(Config.ProxyURL, {});
        client.getVirtualMachine(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }

            setVM(res);
            setLoc(`http://${Config.VMConsoleFQDN}/n0core/static/virtual_machines/vnc.html?path=n0core/api/v0/virtual_machines/${name}/vncwebsocket`)
        })
    }
    useEffect(() => reload(), []);

    const [isShowDeleteDialog, setIsShowDeleteDialog] = useState(false);
    const onCloseDeleteDialog = () => {
        setIsShowDeleteDialog(false);
    }

    const onClickDeleteButton = () => {
        setIsShowDeleteDialog(true);
    }

    const onDelete = () => {
        const request = new DeleteVirtualMachineRequest()
        request.setName(vm.getName());
        const client = new VirtualMachineServiceClient(Config.ProxyURL, {});
        client.deleteVirtualMachine(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }

            history.push('/virtualmachines');
        })
    }

    return (
        <>
        <Container>
            <Typography
                variant="h5">
                    Get VirtualMachine
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
                        State
                    </Typography>
                    <Typography variant="body1">
                        <StateChip state={vm.getState()} />
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
                    <Link href={loc} target="_blank" rel="noreferrer noopener">
                        <Button
                        className={classes.basicButton}
                        variant="contained"
                        color="primary">
                            Open Console
                        </Button>
                    </Link>
                    <Button
                        className={classes.basicButton}
                        variant="outlined"
                        color="secondary"
                        onClick={onClickDeleteButton}>
                            Delete
                    </Button>
                </CardContent>
            </Card>
        </Container>
        <DeleteConfirmDialog
            isShow={isShowDeleteDialog}
            deleteResourceType="virtualmachine"
            deleteResourceName={vm.getName()}
            onClose={onCloseDeleteDialog}
            onDelete={onDelete} />

        </>
    )
}

interface StateChipProps {
    state: VirtualMachine.VirtualMachineState;
}

function StateChip(props: StateChipProps) {
    const s = VirtualMachine.VirtualMachineState;
    return (
        <Chip
            label={getStateString(props.state)}
            variant="outlined"
            color={(() => {
                if (props.state === s.RUNNING) {
                    return "primary";
                }
                return "default";
            })()}/>
    )
}
function getStateString(state: VirtualMachine.VirtualMachineState): string {
    const s = VirtualMachine.VirtualMachineState;
    switch(state){
    case s.PAUSED:
        return "PAUSED";
    case s.PENDING:
        return "PENDING";
    case s.RUNNING:
        return "RUNNING";
    case s.SHUTDOWN:
        return "SHUTDOWN";
    case s.VIRTUAL_MACHINE_UNSPECIFIED:
        return "VIRTUAL_MACHINE_UNSPECIFIED";
    }
    return "UNKNOWN";
}
