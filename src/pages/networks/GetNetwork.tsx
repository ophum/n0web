import { Card, CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { DeleteConfirmDialog } from "../../components/DeleteConfirmDialog";
import { Config } from "../../config/config";
import { NetworkServiceClient } from "../../n0proto.ts/pool/v0/NetworkServiceClientPb";
import {
    DeleteNetworkRequest,
    GetNetworkRequest,
    Network,
} from "../../n0proto.ts/pool/v0/network_pb";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    deleteButton: {
        marginTop: "10px",
    },
});

interface GetNetworkProps {}

export function GetNetwork(_: GetNetworkProps) {
    const classes = useStyles();
    const history = useHistory();
    const { name } = useParams();

    const [network, setNetwork] = useState(new Network());

    const reload = () => {
        const request = new GetNetworkRequest();
        request.setName(name);
        const client = new NetworkServiceClient(Config.ProxyURL, {});
        client.getNetwork(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }

            setNetwork(res);
        });
    };
    useEffect(() => reload(), []);

    const [isShowDeleteDialog, setIsShowDeleteDialog] = useState(false);
    const onCloseDeleteDialog = () => {
        setIsShowDeleteDialog(false);
    };
    const onClickDeleteButton = () => {
        setIsShowDeleteDialog(true);
    };

    const onDelete = () => {
        const request = new DeleteNetworkRequest();
        request.setName(network.getName());
        const client = new NetworkServiceClient(Config.ProxyURL, {});
        client.deleteNetwork(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }

            history.push("/networks");
        });
    };

    return (
        <>
            <Container>
                <Typography variant="h5">Get Network</Typography>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Name</Typography>
                        <Typography variant="body1">
                            {network.getName()}
                        </Typography>
                        <Typography variant="h6">IPv4 CIDR</Typography>
                        <Typography variant="body1">
                            {network.getIpv4Cidr()}
                        </Typography>
                        <Button
                            className={classes.deleteButton}
                            variant="outlined"
                            color="secondary"
                            onClick={onClickDeleteButton}
                        >
                            Delete
                        </Button>
                    </CardContent>
                </Card>
            </Container>
            <DeleteConfirmDialog
                isShow={isShowDeleteDialog}
                deleteResourceType="network"
                deleteResourceName={network.getName()}
                onClose={onCloseDeleteDialog}
                onDelete={onDelete}
            />
        </>
    );
}
