import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from '@mui/icons-material/Settings';
import { Menu, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import ReactGA from './react-ga';
import { MagicalText, GhostSVG, StarCrossSVG } from 'react-halloween';
import { useTranslation } from 'react-i18next';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import SettingsDialog from './dialogs/SettingsDialog';
import config from '../app.config.js';

function NavBar(props) {
  const { theme, setTheme } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();
  const location = useLocation();
  const [adornmentType, setAdornmentType] = useState('sparkle');
  const [adornment, setAdornment] = useState(StarCrossSVG);

  useEffect(() => {
    if (location.pathname.indexOf('halloween') !== -1) {
      setAdornmentType('ghost');
      setAdornment(GhostSVG);
    } else {
      setAdornmentType('sparkle');
      setAdornment(StarCrossSVG);
    }
  }, [location.pathname]);

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  const openGalleryMenu = (event) => setAnchorEl(event.currentTarget);
  const hideGalleryMenu = () => setAnchorEl(null);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsClose = () => setSettingsOpen(false);

  const bStyle = {
    width: '20px',
  };

  const middleStyle = {
    marginLeft: 'auto',
  };

  const rightItemStyle = {
    marginRight: '15px',
  };

  const titleStyle = {
    textDecoration: 'none',
  };

  const [hoveringOverTitle, setHoveringOverTitle] = useState(false);
  const onMouseEnter = useCallback(() => {
    setHoveringOverTitle(true);
  }, [setHoveringOverTitle]);
  const onMouseLeave = useCallback(() => {
    setHoveringOverTitle(false);
  }, [setHoveringOverTitle]);

  return (
    <AppBar position={isDesktopOrLaptop ? 'fixed' : 'static'}>
      <Toolbar>
        <MediaQuery minWidth={700}>
          <Typography
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            variant="h6"
            color="inherit"
            to="/"
            component={Link}
            style={titleStyle}
          >
            {t('toolbar.title')}
          </Typography>
          <div style={bStyle} />
        </MediaQuery>

        <Button
          id="gallery-button"
          aria-controls={open ? 'gallery-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={openGalleryMenu}
        >
          {t('toolbar.galleries')} <ArrowDropDownIcon />
        </Button>
        <Menu
          id="gallery-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={hideGalleryMenu}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MediaQuery maxWidth={699}>
            <MenuItem onClick={hideGalleryMenu} to={'/'} component={Link}>
              {t('toolbar.galleryMain')}
            </MenuItem>
          </MediaQuery>
          <MenuItem
            onClick={hideGalleryMenu}
            to={'/gallery/sunrises-and-sunsets'}
            component={Link}
          >
            {t('toolbar.gallerySunrisesAndSunsets')}
          </MenuItem>
          <MenuItem
            onClick={hideGalleryMenu}
            to={'/gallery/interactive'}
            component={Link}
          >
            {t('toolbar.galleryInteractive')}
          </MenuItem>
          <MenuItem
            onClick={hideGalleryMenu}
            to={'/gallery/mccloud-at-night'}
            component={Link}
          >
            {t('toolbar.galleryMcCloudAtNight')}
          </MenuItem>
          <MenuItem
            onClick={hideGalleryMenu}
            to={'/gallery/christmas'}
            component={Link}
          >
            {t('toolbar.galleryChristmas')}
          </MenuItem>
          <MenuItem
            onClick={hideGalleryMenu}
            to={'/gallery/dark'}
            component={Link}
          >
            {t('toolbar.gallerySpooky')}
          </MenuItem>
          <MenuItem
            onClick={hideGalleryMenu}
            to={'/gallery/halloween-houses'}
            component={Link}
          >
            {t('toolbar.galleryHalloween')}
          </MenuItem>
          <MenuItem
            onClick={hideGalleryMenu}
            to={'/gallery/panoramas'}
            component={Link}
          >
            {t('toolbar.galleryPanoramas')}
          </MenuItem>
        </Menu>

        <Button to="/about" component={Link}>
          {t('toolbar.about')}
        </Button>

        <div style={middleStyle} />

        <MediaQuery minWidth={700}>
          <div style={rightItemStyle} />
        </MediaQuery>

        <ReactGA.OutboundLink
          to={config.urls.flickr}
          target="_blank"
          style={rightItemStyle}
          eventLabel="Flickr"
        >
          <Tooltip title={t('toolbar.tooltipFlickr')}>
            <img
              src={require('../images/flickr.png')}
              width={32}
              alt="Flickr"
            />
          </Tooltip>
        </ReactGA.OutboundLink>

        <ReactGA.OutboundLink
          to={config.urls.instagram}
          target="_blank"
          eventLabel="Instagram"
        >
          <Tooltip title={t('toolbar.tooltipInstagram')}>
            <img
              src={require('../images/instagram.png')}
              width={32}
              alt="Instagram"
            />
          </Tooltip>
        </ReactGA.OutboundLink>
        {/* The settings button isn't needed and is just a distraction */}
        {/*
        <IconButton sx={{marginLeft:'10px'}} onClick={() => setSettingsOpen(true)}>
          <Tooltip title={t('toolbar.tooltipSettings')}>
            <SettingsIcon />
          </Tooltip>
        </IconButton>
        <SettingsDialog
          open={settingsOpen}
          handleClose={handleSettingsClose}
          theme={theme}
          setTheme={setTheme}
        />
        */}
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  theme: PropTypes.object,
  setTheme: PropTypes.func,
};

export default NavBar;
