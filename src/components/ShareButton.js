import { Share } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ShareDialog from './dialogs/ShareDialog';

function ShareButton(props) {
  const { album } = props;

  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const openDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ShareDialog open={open} handleClose={handleClose} album={album} />
      <Tooltip title={t('photo.share')}>
        <IconButton onClick={openDialog} size="large">
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
