
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';

import confetti from 'canvas-confetti';
import copy from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import React from 'react';
import ReactGA from '../react-ga';
import { useTranslation } from 'react-i18next';

function LinkDialog(props) {
  const {
    open,
    handleClose,
    album
  } = props;

  const {t} = useTranslation();

  const selectText = (event) => {
    event.preventDefault();
    event.target.setSelectionRange(0, event.target.value.length);
  };

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

    ReactGA.event({
      category: 'Copy Dialog',
      action: 'Copy',
      label: album.name
    });

    handleClose();
  };

  let photoUrl = window.location.origin + '/photo/' + album.name;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      aria-labelledby='photo-dialog-title'
      aria-describedby='photo-dialog-description'
    >
      <DialogTitle id='photo-dialog-title'>
        {t('dialog.shareHeader')}
      </DialogTitle>
      <DialogContent id='photo-dialog-description'>
        <TextField 
          id='photo-url' 
          variant='outlined' 
          value={photoUrl} 
          onFocus={selectText}
          fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCopy}>{t('dialog.copy')}</Button>
        <Button onClick={handleClose}>
          {t('dialog.close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

LinkDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  album: PropTypes.object,
};

export default LinkDialog;
