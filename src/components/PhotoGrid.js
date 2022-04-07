import React from 'react';
import Grid from '@mui/material/Grid';
import { getPhotoAlbumsByCategory } from '../photos/index.js';
import PhotoViewer from './PhotoViewer';
import ClosingMessage from './ClosingMessage';
import MainContent from './styled/MainContent';

function PhotoGrid(props) {

  let photos = getPhotoAlbumsByCategory(props.category);
  const gridItemStyling = {
    marginBottom: '50px'
  };

  return (
    <MainContent>

      <Grid container alignItems="center" justifyContent="center" align="center">

        {photos.map((photo, idx) => (
          <Grid item xs={12} sx={gridItemStyling} key={idx}>
              <PhotoViewer album={photo} />
          </Grid>
        ))}

        <Grid item xs={12} sx={gridItemStyling}>
          <ClosingMessage />
        </Grid>

      </Grid>

    </MainContent>
  );
}

export default PhotoGrid;