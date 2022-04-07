import React from 'react';
import Grid from '@mui/material/Grid';
import { getPhotoAlbumByName } from '../photos/index.js';
import PhotoViewer from './PhotoViewer.js';
import ClosingMessage from './ClosingMessage';
import MainContent from './styled/MainContent';

function PhotoGrid(props) {
  let photo = getPhotoAlbumByName(props.photoName);
  const gridItemStyling = {
    marginBottom: '50px'
  };

  return (
    <MainContent>
      <Grid container alignItems="center" justifyContent="center" align="center">
        <Grid item xs={12} sx={gridItemStyling} >
            <PhotoViewer album={photo} />
        </Grid>

        <Grid item xs={12} sx={gridItemStyling}>
            <ClosingMessage />
        </Grid>
      </Grid>
    </MainContent>
  );
}

export default PhotoGrid;