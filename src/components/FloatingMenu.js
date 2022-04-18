import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MoreVert from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {alpha} from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import {styled} from '@mui/system';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import ReactGA from 'react-ga';
import ShareButton from './ShareButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const OptionBar = styled('div')(({theme}) => ({
  bottom: '0px',
  right: '5px',
  position: 'absolute',
  backgroundColor: theme.palette.background.default,
  borderRadius: '15px',
  minWidth: '128px',
  display: 'flex',
  justifyContent: 'flex-end',
}));

const OptionSideShadow = styled('div')(({theme}) => ({
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
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(false)}
      >
        {/* eslint-disable-next-line max-len */}
        {flickrURL ? <MenuItem onClick={() => viewLinkClick(flickrURL, 'Flickr')}>Download/View on Flickr</MenuItem> : null}
      </Menu>

      <OptionSideShadow />

      <OptionBar className={'options-bar'}>
        {hasText(description) && (
          <Tooltip title={'Toggle Text Display'} >
            <IconButton onClick={() => toggleTextOpen()} sx={{padding: '8px'}}>
              {isTextOpen ?
                <ExpandLess />
                :
                <ExpandMore />
              }
            </IconButton>
          </Tooltip>
        )}
        {album.showShareLink !== false &&
          <ShareButton album={album} />
        }
        <Tooltip title={'Download from Flickr'}>
          <IconButton onClick={() => viewLinkClick(flickrURL, 'Flickr')}>
            <CloudDownloadIcon />
          </IconButton>
        </Tooltip>
        

      </OptionBar>
    </>
  );
}

// more options menu - useful when more options are added
/*
        {(flickrURL) &&
          <Tooltip title='More Actions'>
            <IconButton onClick={moreOptions} sx={{padding: '8px'}}><MoreVert /></IconButton>
          </Tooltip>
        }
 */

FloatingMenu.propTypes = {
  album: PropTypes.any,
  description: PropTypes.any,
  photoLabel: PropTypes.string,
  isTextOpen: PropTypes.bool,
  toggleTextOpen: PropTypes.func,
  flickrURL: PropTypes.string,
};

export default FloatingMenu;
