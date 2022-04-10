import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import ClosingMessage from './ClosingMessage';
import PhotoViewer from './PhotoViewer';
import GridBlock from './styled/GridBlock';
import { getPhotoAlbumByName } from '../photos';

function ContentGrid(props) {
  const {
    items
  } = props;

  const getDisplay = (item) => {
    if (item.type === 'photo') {
      return (
        <PhotoViewer album={ getPhotoAlbumByName(item.name) } />
      )
    } else {
      return null;
    }
  }

  return (
    <Grid container alignItems='center' justifyContent='center' align='center'>

      { items.map((item, idx) => (
        <GridBlock item xs={ 12 } key={ idx }>
          { getDisplay(item) }
        </GridBlock>
      )) }

      <GridBlock item xs={ 12 } >
        <ClosingMessage />
      </GridBlock>

    </Grid>
  );
}

ContentGrid.propTypes = {
  items: PropTypes.array,
};

export default ContentGrid;
