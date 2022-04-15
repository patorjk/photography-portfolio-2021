import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MoreVert from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactGA from 'react-ga';
import ShareButton from './ShareButton';

const OptionBar = styled('div')(({ theme }) => ({
  bottom: '0px',
  right: '5px',
  position: 'absolute',
  backgroundColor: theme.palette.background.default,
  borderRadius: '15px',
  minWidth: '128px',
  display: 'flex',
  justifyContent: 'flex-end',
}));

const OptionSideShadow = styled('div')(({ theme }) => ({
  bottom: '0px',
  right: '130px',
  width: '200px',
  height: '48px',
  position: 'absolute',
  // eslint-disable-next-line max-len
  backgroundImage: `linear-gradient(to left, ${alpha(theme.palette.background.default,1)}, ${alpha(theme.palette.background.default, 0)} 100%)`,
}));

function FloatingMenu(props) {

  const [anchorEl, setAnchorEl] = useState(null);

  const {
    album,
    photoLabel,
    isTextOpen,
    toggleTextOpen,
    flickrURL,
    instagramURL,
    description
  } = props;

  const viewLinkClick = (link, site) => {
    ReactGA.event({
      category: 'More Options',
      action: site + ' Menu Section',
      label: photoLabel
    });

    setAnchorEl(null);
    window.open(link, '_blank');
  };

  const moreOptions = (evt) => {
    ReactGA.event({
      category: 'More Options',
      action: 'Menu Opened',
      label: photoLabel
    });
    setAnchorEl(evt.currentTarget);
  };

  const hasText = (des) => {
    if (typeof des === 'string') {
      return !!des;
    } else if (Array.isArray(des)) {
      return !!des.join('');
    }
    return false;
  };

  return (
    <>
      <Menu
        anchorEl={ anchorEl }
        open={ Boolean(anchorEl) }
        onClose={ () => setAnchorEl(false) }
      >
        { /* eslint-disable-next-line max-len */ }
        { flickrURL ? <MenuItem onClick={ () => viewLinkClick(flickrURL, 'Flickr') }>Download/View on Flickr</MenuItem> : null }
        { /* eslint-disable-next-line max-len */ }
        { instagramURL ? <MenuItem onClick={ () => viewLinkClick(instagramURL, 'Instagram') }>View on Instagram</MenuItem> : null }
      </Menu>

      <OptionSideShadow />

      <OptionBar>
        {hasText(description) && (
          <Tooltip title={ 'Toggle Text Display' } >
            <IconButton onClick={ () => toggleTextOpen() } sx={{ padding: '8px' }}>
              { isTextOpen ?
                <ExpandLess />
                :
                <ExpandMore />
              }
            </IconButton>
          </Tooltip>
        )}
        { album.showShareLink !== false &&
          <ShareButton album={ album } />
        }
        
        { (flickrURL || instagramURL) &&
          <Tooltip title='More Actions'>
            <IconButton onClick={ moreOptions } sx={{ padding: '8px' }}><MoreVert /></IconButton>
          </Tooltip>
        }
      </OptionBar>
    </>
  );
}

FloatingMenu.propTypes = {
  album: PropTypes.any,
  description: PropTypes.string,
  photoLabel: PropTypes.string,
  isTextOpen: PropTypes.bool,
  toggleTextOpen: PropTypes.func,
  flickrURL: PropTypes.string,
  instagramURL: PropTypes.string,
};

export default FloatingMenu;
