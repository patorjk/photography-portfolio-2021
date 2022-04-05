import React, { useState } from 'react';
import ReactGA from 'react-ga';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import MoreVert from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';
import ShareButton from './ShareButton';

const useStyles = makeStyles((theme) => ({
  collapseBtn: {
    padding: '8px',
  },
  optionsBtn: {
    padding: '8px',
  },
  optionBar: {
    bottom: '0px',
    right: '5px',
    position: 'absolute',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '15px',
    minWidth: '128px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  optionSideShadow: {
    bottom: '0px',
    right: '130px',
    width: '200px',
    height: '48px',
    position: 'absolute',
    backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 100%)',
  },
  optionsIcon: {},
}));

export default function FloatingMenu(props) {

  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

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

      <div className={classes.optionSideShadow} />

      <div className={classes.optionBar}>
        <Tooltip title={"Toggle Text Display"} >
          <IconButton onClick={(evt) => toggleTextOpen()} className={classes.collapseBtn}>
            {isTextOpen ?
              <ExpandLess className={classes.optionsIcon} />
              :
              <ExpandMore className={classes.optionsIcon} />
            }
          </IconButton>
        </Tooltip>
        {album.showShareLink !== false &&
          <ShareButton album={album} />
        }
        
        {(flickrURL || instagramURL) &&
          <Tooltip title="More Actions">
            <IconButton onClick={moreOptions} className={classes.optionsBtn}><MoreVert className={classes.optionsIcon} /></IconButton>
          </Tooltip>
        }
      </div>
    </>
  );
}