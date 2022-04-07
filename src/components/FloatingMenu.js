import React, { useState } from 'react';
import ReactGA from 'react-ga';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import MoreVert from '@mui/icons-material/MoreVert';
import ShareButton from './ShareButton';
import { styled } from '@mui/system';
import { alpha } from '@mui/material/styles';

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
    backgroundImage: `linear-gradient(to left, ${alpha(theme.palette.background.default,1)}, ${alpha(theme.palette.background.default, 0)} 100%)`,
}));

export default function FloatingMenu(props) {

  const [anchorEl, setAnchorEl] = useState(null);

  const {
    album,
    photoLabel,
    isTextOpen,
    toggleTextOpen,
    flickrURL,
    instagramURL,
  } = props;

  const viewLinkClick = (link, site) => {
    ReactGA.event({
      category: 'More Options',
      action: site + ' Menu Section',
      label: photoLabel
    });

    setAnchorEl(null);
    window.open(link, "_blank");
  };

  const moreOptions = (evt) => {
    ReactGA.event({
      category: 'More Options',
      action: 'Menu Opened',
      label: photoLabel
    });
    setAnchorEl(evt.currentTarget);
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(false)}
      >
          {flickrURL ? <MenuItem onClick={() => viewLinkClick(flickrURL, "Flickr")}>Download/View on Flickr</MenuItem> : null}
          {instagramURL ? <MenuItem onClick={() => viewLinkClick(instagramURL, "Instagram")}>View on Instagram</MenuItem> : null}
      </Menu>

      <OptionSideShadow />

      <OptionBar>
        <Tooltip title={"Toggle Text Display"} >
          <IconButton onClick={(evt) => toggleTextOpen()} sx={{padding: '8px'}}>
            {isTextOpen ?
              <ExpandLess />
              :
              <ExpandMore />
            }
          </IconButton>
        </Tooltip>
        {album.showShareLink !== false &&
          <ShareButton album={album} />
        }
        
        {(flickrURL || instagramURL) &&
          <Tooltip title="More Actions">
            <IconButton onClick={moreOptions} sx={{padding: '8px'}}><MoreVert /></IconButton>
          </Tooltip>
        }
      </OptionBar>
    </>
  );
}