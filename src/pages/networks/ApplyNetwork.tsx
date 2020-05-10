import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {ApplyNetworkRequest, Network} from '../../n0proto.ts/pool/v0/network_pb';
import {NetworkServiceClient} from '../../n0proto.ts/pool/v0/NetworkServiceClientPb';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  createButton: {
      width: '400px',
      marginTop: '10px',
  },
});

interface ApplyNetworkProps{

}

export function ApplyNetwork(_: ApplyNetworkProps) {
    const classes = useStyles();
    const history = useHistory();

    const [newNetworkName, setNewNetworkName] = useState("");
    const [newNetworkIpv4Cidr, setNewNetworkIpv4Cidr] = useState("");

    const onChangeNewNetworkName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewNetworkName(e.target.value);
    }
    const onChangeNewNetworkIpv4Cidr = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewNetworkIpv4Cidr(e.target.value);
    }
    const onClickApplyNetwork = () => {
        const request = new ApplyNetworkRequest();
        request.setName(newNetworkName);
        request.setIpv4Cidr(newNetworkIpv4Cidr);
        request.getAnnotationsMap().set('n0core/provisioning/virtual_machine/vlan_id', "0");
        console.log(request.toArray());
        const client = new NetworkServiceClient("http://localhost:8080", {});
        client.applyNetwork(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }

            history.push("/networks");
        })
    }
    return (
        <Container>
            <Typography
                variant="h4">
                    Apply Network
            </Typography>
            <div>
                <TextField
                    label="Name"
                    onChange={onChangeNewNetworkName}
                />
            </div>
            <div>
                <TextField
                    label="IPv4 CIDR"
                    onChange={onChangeNewNetworkIpv4Cidr}
                />
            </div>
            <div>
                <Button
                    className={classes.createButton}
                    variant="outlined"
                    color="primary"
                    onClick={onClickApplyNetwork}>
                        apply
                </Button>
            </div>
        </Container>
    )
}
