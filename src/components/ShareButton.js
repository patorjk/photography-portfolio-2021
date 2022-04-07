import React from 'react'
import {
  IconButton
} from '@mui/material';
import {
  Share
} from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import ShareDialog from './ShareDialog';

export default function(props) {
  const {
    album
  } = props;

  const [open, setOpen] = React.useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ShareDialog open={open} handleClose={handleClose} album={album} />
      <Tooltip title="Share Link to Image">
        <IconButton onClick={openDialog} size="large">
            <Share />
        </IconButton>
      </Tooltip>
    </>
  ); 
};