import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material';

import confetti from 'canvas-confetti';

export default function LinkDialog(props) {
  const {
    open,
    handleClose,
    album
  } = props;

  const selectText = (event) => {
    event.preventDefault();
    event.target.setSelectionRange(0, event.target.value.length);
  }

  const handleCopy = (event) => {
    copy(photoUrl);

    let xPos = event.clientX / window.innerWidth;
    let yPos = event.clientY / window.innerHeight;

    if (xPos === 0 && yPos === 0) {
      xPos = (window.innerWidth / 2) / window.innerWidth;
      yPos = (window.innerHeight / 2) / window.innerHeight;
    }

    confetti({
      origin: {
        x: xPos,
        y: yPos,
      },
      zIndex: 10000
    });
    event.preventDefault();
    event.stopPropagation();

    handleClose();
  };

  let photoUrl = window.location.origin + '/photo/' + album.name;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      aria-labelledby="photo-dialog-title"
      aria-describedby="photo-dialog-description"
    >
      <DialogTitle id="photo-dialog-title">
        Link to Photo
      </DialogTitle>
      <DialogContent id="photo-dialog-description">
        <TextField 
          id="photo-url" 
          variant="outlined" 
          value={photoUrl} 
          onFocus={selectText}
          fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCopy} autoFocus>Copy</Button>
        <Button onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}