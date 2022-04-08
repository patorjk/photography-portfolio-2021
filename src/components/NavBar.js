import SettingsIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
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
    themes,
    setTheme
  } = props;

  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

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

        { config.categories.map( cat => (
          <Button color='inherit' to={ cat.path } key={ cat.path } component={ Link } >{ cat.display }</Button>
        )) }

        <Button color='inherit' to='/about' component={ Link } >About</Button>

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
        <IconButton sx={{ marginLeft:'10px' }}>
          <SettingsIcon onClick={ () => setSettingsOpen(true) } />
        </IconButton>
        <SettingsDialog 
          open={ settingsOpen }
          handleClose={ handleSettingsClose }
          theme={ theme }
          themes={ themes }
          setTheme={ setTheme }
        />
      </Toolbar>
    </AppBar>
  ); 
}

NavBar.propTypes = {
  themes: PropTypes.array,
  theme: PropTypes.object,
  setTheme: PropTypes.func,
};

export default NavBar;
