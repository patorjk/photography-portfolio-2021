import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import ClosingMessage from './ClosingMessage';
import PhotoViewer from './PhotoViewer';
import GridBlock from './styled/GridBlock';
import ResponsiveContainer from './styled/ResponsiveContainer';
import {getPhotoAlbumByName} from '../photos';

function ContentGrid(props) {
  const {
    items
  } = props;

  const getDisplay = (item) => {
    if (item.type === 'photo') {
      return (
        <PhotoViewer album={getPhotoAlbumByName(item.name)} {...item.photoProps} />
      );
    } else if (item.type === 'text') {
      return (
        <ResponsiveContainer sx={{textAlign: 'left', padding: '0px 12px'}}>
          {item.header && (<h3>{item.header}</h3>)}
          {item.text.map((pp, idx) => (
            <p key={idx}>{pp}</p>
          ))}
        </ResponsiveContainer>
      );
    } else if (item.type === 'react') {
      return (
        <ResponsiveContainer sx={{textAlign: 'left',position:'relative', padding: '0px 12px'}}>
          {item.children}
        </ResponsiveContainer>
      );
    } else {
      return null;
    }
  };

  return (
    <Grid container alignItems='center' justifyContent='center' align='center'>

      {items.map((item) => (
        <GridBlock item xs={12} key={item.id}>
          {getDisplay(item)}
        </GridBlock>
      ))}

      <GridBlock item xs={12} >
        <ClosingMessage />
      </GridBlock>

    </Grid>
  );
}

ContentGrid.propTypes = {
  items: PropTypes.array,
};

export default ContentGrid;
