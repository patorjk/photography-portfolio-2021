import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import ClosingMessage from './ClosingMessage';
import PhotoViewer from './PhotoViewer.js';
import { getPhotoAlbumByName } from '../photos/index.js';

function SinglePhoto(props) {
  let photo = getPhotoAlbumByName(props.photoName);
  const gridItemStyling = {
    marginBottom: '50px',
  };

  return (
    <Grid container alignItems="center" justifyContent="center" align="center">
      <Grid item xs={12} sx={gridItemStyling}>
        <PhotoViewer album={photo} />
      </Grid>

      <Grid item xs={12} sx={gridItemStyling}>
        <ClosingMessage />
      </Grid>
    </Grid>
  );
}

SinglePhoto.propTypes = {
  photoName: PropTypes.string,
};

export default SinglePhoto;
