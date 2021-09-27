import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import { getPhotoAlbumsByCategory } from '../photos/index.js';
import PhotoViewer from './PhotoViewer.js';
import ClosingMessage from './ClosingMessage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  gridItem: {
    marginBottom: '50px'
  },
}));

function PhotoGrid(props) {

  const classes = useStyles();

  const [heartBreak, setHeartBreak] = useState(false);

  let photos = getPhotoAlbumsByCategory(props.category);

  return (
    <div className={classes.root}>

      <Grid container alignItems="center" justifyContent="center" align="center">

        {photos.map((photo, idx) => (
          <Grid item xs={12} className={classes.gridItem} key={idx}>
              <PhotoViewer album={photo} heartBreak={heartBreak} setHeartBreak={setHeartBreak} />
          </Grid>
        ))}

        <Grid item xs={12} className={classes.gridItem}>
          <ClosingMessage />
        </Grid>

      </Grid>

    </div>
  );
}

export default PhotoGrid;