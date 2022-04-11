import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from '@mui/icons-material/Settings';
import { Menu } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactGA from 'react-ga';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import SettingsDialog from './SettingsDialog';
import config from '../app.config.js';

function NavBar(props) {
  const {
    theme,
    setTheme
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const openGalleryMenu = (event) => setAnchorEl(event.currentTarget);
  const hideGalleryMenu = () => setAnchorEl(null);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsClose = () => setSettingsOpen(false);

  const bStyle = {
    width: '20px'
  };

  const middleStyle = {
    marginLeft: 'auto'
  };

  const rightItemStyle = {
    marginRight: '15px'
  };

  const titleStyle = {
    textDecoration: 'none',
  };

  return (
    <AppBar position='fixed' >
      <Toolbar>
        <MediaQuery minWidth={ 700 }>
          <Typography variant='h6' color='inherit' to='/' component={ Link } style={ titleStyle }>
            { config.title.main }
          </Typography>
          <div style={ bStyle } />
        </MediaQuery>

        <Button
          id='gallery-button'
          aria-controls={ open ? 'gallery-menu' : undefined }
          aria-haspopup='true'
          aria-expanded={ open ? 'true' : undefined }
          onClick={ openGalleryMenu }
        >
          Galleries <ArrowDropDownIcon/>
        </Button>
        <Menu
          id='gallery-menu'
          anchorEl={ anchorEl }
          open={ open }
          onClose={ hideGalleryMenu }
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={ hideGalleryMenu } 
            to={ '/gallery/sunrises-and-sunsets' } component={ Link }>Sunrises and Sunsets</MenuItem>
          <MenuItem onClick={ hideGalleryMenu }
            to={ '/gallery/interactive' } component={ Link }>Interactive</MenuItem>
          <MenuItem onClick={ hideGalleryMenu } 
            to={ '/gallery/spooky' } component={ Link }>Spooky</MenuItem>
          <MenuItem onClick={ hideGalleryMenu }
            to={ '/gallery/panoramas' } component={ Link }>Panoramas</MenuItem>
        </Menu>

        <Button to='/about' component={ Link } >About</Button>

        <div style={ middleStyle } />

        <MediaQuery minWidth={ 700 }>
          <div style={ rightItemStyle } />
        </MediaQuery>
        <ReactGA.OutboundLink
          to={ config.urls.flickr }
          target='_blank' 
          style={ rightItemStyle }
          eventLabel='Flickr'
        >
          <img src={ require('../images/flickr.png') } width={ 32 } alt='Flickr' />
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink 
          to={ config.urls.instagram } 
          target='_blank'
          eventLabel='Instagram'
        >
          <img src={ require('../images/instagram.png') } width={ 32 } alt='Instagram' />
        </ReactGA.OutboundLink>
        <IconButton sx={{ marginLeft:'10px' }} onClick={ () => setSettingsOpen(true) }>
          <SettingsIcon />
        </IconButton>
        <SettingsDialog 
          open={ settingsOpen }
          handleClose={ handleSettingsClose }
          theme={ theme }
          setTheme={ setTheme }
        />
      </Toolbar>
    </AppBar>
  ); 
}

NavBar.propTypes = {
  theme: PropTypes.object,
  setTheme: PropTypes.func,
};

export default NavBar;
