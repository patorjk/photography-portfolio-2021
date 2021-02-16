import React, { useState } from 'react';
import ReactGA from 'react-ga';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import LikeButton from './LikeButton';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  collapseBtn: {
    padding: '8px',
    color: theme.palette.primary.main,
  },
  optionsBtn: {
    padding: '8px',
    color: theme.palette.primary.main,
  },
  optionBar: {
    bottom: '0px',
    right: '5px',
    position: 'absolute',
    backgroundColor: 'rgb(250,250,250)',
//    backgroundColor: 'rgba(100,100,100,1)',// rgb(250,250,250)',
    borderRadius: '15px',
    //boxShadow: '1px 1px 3px 3px rgba(0, 0, 0, .1);'
  },
  optionSideShadow: {
    bottom: '0px',
    right: '130px',
    width: '200px',
    height: '48px',
    position: 'absolute',
    backgroundImage: 'linear-gradient(to left, rgba(250, 250, 250, 0.9), rgba(250, 250, 250, 0) 100%)',
  },
  optionsIcon: {},
}));

export default function FloatingMenu(props) {

  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const {
    photoLabel,
    isTextOpen,
    toggleTextOpen,
    flickrURL,
    instagramURL,
    heartBreak,
    setHeartBreak
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
          <IconButton color="inherit" onClick={(evt) => toggleTextOpen()} className={classes.collapseBtn}>
            {isTextOpen ?
              <Remove className={classes.optionsIcon} />
              :
              <Add className={classes.optionsIcon} />
            }
          </IconButton>
        </Tooltip>
        <LikeButton heartBreak={heartBreak} setHeartBreak={setHeartBreak} />
        
        {(flickrURL || instagramURL) &&
          <Tooltip title="More Actions">
            <IconButton color="inherit" onClick={moreOptions} className={classes.optionsBtn}><MoreVert className={classes.optionsIcon} /></IconButton>
          </Tooltip>
        }
      </div>
    </>
  );
}