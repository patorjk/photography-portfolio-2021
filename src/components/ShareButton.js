import {
  Share
} from '@mui/icons-material';
import {
  IconButton
} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import React from 'react';
import ShareDialog from './ShareDialog';

function ShareButton(props) {
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
      <ShareDialog open={ open } handleClose={ handleClose } album={ album } />
      <Tooltip title='Share Link to Image'>
        <IconButton onClick={ openDialog } size='large'>
          <Share />
        </IconButton>
      </Tooltip>
    </>
  ); 
}

ShareButton.propTypes = {
  album: PropTypes.object,
};

export default ShareButton;
