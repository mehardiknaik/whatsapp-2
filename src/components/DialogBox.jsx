import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const DialogBox = ({ dialogOpen, setDialogOpen, cleanStorage }) => {
  return (
    <Dialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Clear All</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to clear all Numbers?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDialogOpen(false)}>No</Button>
        <Button onClick={cleanStorage} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
