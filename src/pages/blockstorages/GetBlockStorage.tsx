import { Card, CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { DeleteConfirmDialog } from "../../components/DeleteConfirmDialog";
import { Config } from "../../config/config";
import { BlockStorageServiceClient } from "../../n0proto.ts/provisioning/v0/Block_storageServiceClientPb";
import {
    BlockStorage,
    DeleteBlockStorageRequest,
    GetBlockStorageRequest,
    PurgeBlockStorageRequest,
} from "../../n0proto.ts/provisioning/v0/block_storage_pb";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },

    deleteButton: {
        marginTop: "10px",
    },
});

interface GetBlockStorageProps {}

export function GetBlockStorage(_: GetBlockStorageProps) {
    const classes = useStyles();
    const history = useHistory();
    const { name } = useParams();

    const [bs, setBS] = useState(new BlockStorage());

    const reload = () => {
        const request = new GetBlockStorageRequest();
        request.setName(name);
        const client = new BlockStorageServiceClient(Config.ProxyURL, {});
        client.getBlockStorage(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }

            setBS(res.clone());
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
        const deleteRequest = new DeleteBlockStorageRequest();
        deleteRequest.setName(bs.getName());
        const client = new BlockStorageServiceClient(Config.ProxyURL, {});
        client.deleteBlockStorage(deleteRequest, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }

            const purgeRequest = new PurgeBlockStorageRequest();
            purgeRequest.setName(bs.getName());
            client.purgeBlockStorage(purgeRequest, null, (err, res) => {
                if (err || res === null) {
                    console.log(err);
                    throw err;
                }
                history.push("/blockstorages");
            });
        });
    };

    return (
        <>
            <Container>
                <Typography variant="h5">Get BlockStorage</Typography>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Name</Typography>
                        <Typography variant="body1">{bs.getName()}</Typography>
                        <Typography variant="h6">Node</Typography>
                        <Typography variant="body1">
                            {bs.getNodeName()}
                        </Typography>
                        <Typography variant="h6">request size(GB)</Typography>
                        <Typography variant="body1">
                            {bs.getRequestBytes() / 1024 / 1024 / 1024}
                        </Typography>
                        <Typography variant="h6">limit size(GB)</Typography>
                        <Typography variant="body1">
                            {bs.getLimitBytes() / 1024 / 1024 / 1024}
                        </Typography>

                        {bs.getState() ===
                            BlockStorage.BlockStorageState.AVAILABLE && (
                            <Button
                                className={classes.deleteButton}
                                variant="outlined"
                                color="secondary"
                                onClick={onClickDeleteButton}
                            >
                                Delete
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </Container>
            <DeleteConfirmDialog
                isShow={isShowDeleteDialog}
                deleteResourceType="blockstorage"
                deleteResourceName={bs.getName()}
                onClose={onCloseDeleteDialog}
                onDelete={onDelete}
            />
        </>
    );
}
