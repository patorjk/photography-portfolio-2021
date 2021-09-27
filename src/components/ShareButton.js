import React, {useState} from 'react'
import ReactGA from 'react-ga';
import {
  IconButton
} from '@mui/material';
import {
  Share
} from '@mui/icons-material';
import {makeStyles} from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import LinkDialog from './LinkDialog';

const useStyles = makeStyles(theme => ({
  btn: {}
}));

export default function(props) {
  const {
    album
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <LinkDialog open={open} handleClose={handleClose} album={album} />
      <Tooltip title="Share Link to Image">
        <IconButton onClick={openDialog} size="large">
            <Share className={classes.btn} />
        </IconButton>
      </Tooltip>
    </>
  ); 
};