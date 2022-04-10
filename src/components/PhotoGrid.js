import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import ClosingMessage from './ClosingMessage';
import PhotoViewer from './PhotoViewer';
import { getPhotoAlbumsByCategory } from '../photos';

function PhotoGrid(props) {

  let photos = getPhotoAlbumsByCategory(props.category);
  const gridItemStyling = {
    marginBottom: '50px'
  };

  return (
    <Grid container alignItems='center' justifyContent='center' align='center'>

      { photos.map((photo, idx) => (
        <Grid item xs={ 12 } sx={ gridItemStyling } key={ idx }>
          <PhotoViewer album={ photo } />
        </Grid>
      )) }

      <Grid item xs={ 12 } sx={ gridItemStyling }>
        <ClosingMessage />
      </Grid>

    </Grid>
  );
}

PhotoGrid.propTypes = {
  category: PropTypes.string,
};

export default PhotoGrid;
