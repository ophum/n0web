import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Config } from "../../config/config";
import { ImageServiceClient } from "../../n0proto.ts/deployment/v0/ImageServiceClientPb";
import {
    Image,
    ListImagesRequest,
} from "../../n0proto.ts/deployment/v0/image_pb";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

interface ImageListProps {}

export function ImageList(_: ImageListProps) {
    const classes = useStyles();
    const history = useHistory();
    const [isReload, setIsReload] = useState(0);
    const [imageList, setImageList] = useState([] as Image[]);
    useEffect(() => reload(), [isReload]);
    const reload = () => {
        const request = new ListImagesRequest();
        const client = new ImageServiceClient(Config.ProxyURL, {});
        client.listImages(request, {}, (err, res) => {
            if (err || res === null) {
                throw err;
            }
            const images: Image[] = res.getImagesList();
            setImageList([...images]);
        });
    };

    const onClickNewImage = () => {
        history.push("/networks/create");
    };

    return (
        <Container>
            <Box>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={onClickNewImage}
                >
                    New
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {imageList.map((image) => (
                            <TableRow
                                key={image.getName()}
                                onClick={() => {
                                    history.push(
                                        "/images/get/" + image.getName()
                                    );
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {image.getName()}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
