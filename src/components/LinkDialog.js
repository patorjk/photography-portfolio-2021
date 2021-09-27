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

  const [textRef, setTextRef] = useState(React.createRef());

  useEffect(() => {
    if (open && textRef.current) {
      setTimeout(() => {
      textRef.current.focus();  
    },1000)
      
    }
  }, [open, textRef.current])

  const selectText = (event) => {
    event.preventDefault();
    event.target.setSelectionRange(0, event.target.value.length);
  }

  const handleCopy = (event) => {
    copy(photoUrl);

    let xPos = event.clientX / window.innerWidth;
    let yPos = event.clientY / window.innerHeight;

    confetti({
      origin: {
        x: xPos,
        y: yPos,
      },
      zIndex: 10000
    });
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
          inputRef={textRef}
          autoFocus
          onFocus={selectText}
          fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCopy}>Copy</Button>
        <Button onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}