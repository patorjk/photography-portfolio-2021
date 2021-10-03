import React from 'react';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import { getPhotoAlbumByName } from '../photos/index.js';
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
  let photo = getPhotoAlbumByName(props.photoName);


  return (
    <div className={classes.root}>

      <Grid container alignItems="center" justifyContent="center" align="center">

        <Grid item xs={12} className={classes.gridItem} >
            <PhotoViewer album={photo} />
        </Grid>

        <Grid item xs={12} className={classes.gridItem}>
            <ClosingMessage />
        </Grid>

      </Grid>

    </div>
  );
}

export default PhotoGrid;