import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper, { PaperProps } from "@material-ui/core/Paper";
import React from "react";
import Draggable from "react-draggable";

export interface DeleteConfirmDialogProps {
    isShow: boolean;
    deleteResourceType: string;
    deleteResourceName: string;
    onClose(): void;
    onDelete(): void;
}

export function DeleteConfirmDialog(props: DeleteConfirmDialogProps) {
    return (
        <Dialog
            open={props.isShow}
            onClose={props.onClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
                Delete
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Delete {props.deleteResourceType} {props.deleteResourceName}{" "}
                    OK?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={props.onClose}
                    color="default"
                    variant="contained"
                >
                    Cancel
                </Button>
                <Button
                    onClick={props.onDelete}
                    color="secondary"
                    variant="outlined"
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

function PaperComponent(props: PaperProps) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}
