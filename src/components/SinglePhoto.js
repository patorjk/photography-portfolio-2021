import PropTypes from 'prop-types';
import React from 'react';
import ClosingMessage from './ClosingMessage';
import { ContentFlowGrid } from './ContentFlowGrid';
import Footer from './Footer';
import PhotoViewer from './PhotoViewer.js';
import { getPhotoAlbumByName } from '../photos/index.js';

function SinglePhoto(props) {
  const photo = getPhotoAlbumByName(props.photoName);

  return (
    <ContentFlowGrid>
      <PhotoViewer album={photo} />

      <ClosingMessage />
      <Footer />
    </ContentFlowGrid>
  );
}

SinglePhoto.propTypes = {
  photoName: PropTypes.string,
};

export default SinglePhoto;
